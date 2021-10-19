let url = 'http://localhost:3030/jsonstore/phonebook';
    const ulList = document.getElementById('phonebook');
    const textAreaForPerson = document.getElementById('person');
    const textAreaForPhone = document.getElementById('phone');
 
    document.getElementById('btnLoad').addEventListener('click', showData);
    //document.getElementById('btnCreate').addEventListener('click', addData);
 
 
    function showData() {
 
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Object.values(data).forEach(n => {
                    let li = document.createElement('li');
                    let deleteButton = document.createElement('button');
                    deleteButton.setAttribute('class', 'deleteBtn');
                    deleteButton.textContent = 'Delete';
                    li.setAttribute('id', n._id);
                    li.textContent = `${n.person}: ${n.phone}`;
                    li.appendChild(deleteButton);
                    ulList.appendChild(li);
                });
            })
            .catch(dealWithErrors)
    }
 
    function deleteInformation() {
        let senders = {
            method: 'DELETE'
        }
        fetch(`http://localhost:3030/jsonstore/phonebook/${this.value}`, senders)
            .then(printInformation)
            .catch(dealWithErrors);
        }
 
    function dealWithErrors(){}


/* second*/
document.querySelector('#btnLoad').addEventListener('click', loadAllContacts);
document.querySelector('#btnCreate').addEventListener('click', addContact);

async function loadAllContacts() {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const contacts = await response.json();
    console.log(contacts);
    const phoneBookUl = document.querySelector('#phonebook');
    phoneBookUl.querySelectorAll('li').forEach(li => li.remove());
    Object.values(contacts).map(createContactLi).forEach(li => phoneBookUl.appendChild(li));
}

function createContactLi(contact) {
    const li = document.createElement('li');
    li.textContent = `${contact.person}: ${contact.phone}`;
    li.dataset.id = contact._id;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteContact);

    li.appendChild(deleteBtn);

    return li;
}

async function deleteContact(e) {
    const li = e.target.closest('li')
    const id = e.target.closest('li').dataset.id;

    const response = await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        li.remove();
    }
}

async function addContact() {
    const person = document.querySelector('#person');
    const phone = document.querySelector('#phone');

    let response = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ person: person.value, phone: phone.value })
    });

    const contact = await response.json();
    const li = createContactLi(contact);
    document.querySelector('#phonebook').appendChild(li);

    person.value = '';
    phone.value = '';
}
/* not good
function attachEvents() {
    const btnLoad=document.querySelector('#btnLoad');
    const btnCreate=document.querySelector('#btnCreate');
    let ulElement=document.querySelector('#phonebook');

    btnLoad.addEventListener('click', onLoad);
    btnCreate.addEventListener('click', onCreate);

    async function onLoad(event){
        event.preventDefault();
        ulElement.innerHTML='';
        try {                    
            const response = await fetch('http://localhost:3030/jsonstore/phonebook');   
            
            if (response.status !== 200 ) {
                console.log('Load Button Error GET request');                 
            }else{
                console.log('Load Button GET request successful'); 
                let data=await response.json();
                console.log(data);

                for (const item of Object.values(data)) { 
                    console.log(item.person+item.phone);
                    let btnDelete=e('button','Delete',null);
                    btnDelete.setAttribute('id', item._id);
                    btnDelete.addEventListener('click', onDeleteRecord);
                    let liElement=e('li',item.person+': '+item.phone, null);
                    liElement.setAttribute('id',item._id);
                    liElement.appendChild(btnDelete);
                    ulElement.appendChild(liElement);                    
                }
            }        
        }
        catch (err) {
            console.log(err.message);            
        }
    }

    async function onDeleteRecord(event) {
        event.preventDefault();
        const idToBeDeleted=event.target.id;
        //delete from DOM
        event.target.parentNode.remove();
        //delete from Server by the ID
        console.log(idToBeDeleted)
        try {                    
            const response = await fetch('http://localhost:3030/jsonstore/phonebook/'+idToBeDeleted, {
                    method: 'DELETE'
                });        
            
            if (response.status !== 200 ) {
                console.log('Error DELETE request');                 
            }else{
                console.log('DELETE request successful');                 
            }        
        }
        catch (err) {
            console.log(err.message);            
        }

    }

    async function onCreate(event) {
        event.preventDefault();
        let personData=document.querySelector('#person');
        let phoneData=document.querySelector('#phone');

        if (personData.value=='' || phoneData.value=='') {
            return;
        }

        const data={person:personData.value, phone:phoneData.value};

        try {                    
            const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
                    method: 'post',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(data),
                });        
            
            if (response.status !== 200 ) {
                console.log('Error POST request');                 
            }else{
                console.log('POST request successful');                
            }        
        }
        catch (err) {
            console.log(err.message);            
        }

        personData.value='';
        phoneData.value='';
        btnLoad.click();
    }

    function e(type, content, className){
        const result= document.createElement(type);
        result.textContent=content;
        if (className) {
            result.className=className;
        }
        return result;
    }  
}

attachEvents();*/