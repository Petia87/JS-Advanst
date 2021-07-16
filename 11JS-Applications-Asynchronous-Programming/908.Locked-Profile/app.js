function lockedProfile() {
    async function resolve(url) {
        let profileRequest = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
       return await profileRequest.json();
    }
 
    (async () => {
        let profileRequest = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
        let profiles = await profileRequest.json();
 
        await resolve();
 
        console.log(profiles);
        let mainSection = document.getElementById('main');
        let templateProfile = document.querySelector('.profile');
        templateProfile.remove();
 
        Object.keys(profiles).forEach((key, i) => {
            let profile = profiles[key];
            let htmlProfile = createHtmlProfile(i + 1, profile.username, profile.email, profile.age);
            mainSection.appendChild(htmlProfile);
        })
    })();
 
    function createHtmlProfile(userIndex, username, email, age) {
 
        let profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');
 
        let profileImage = document.createElement('img');
        profileImage.src = './iconProfile2.png';
        profileImage.classList.add('userIcon');
 
        let lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';
 
        let lockRadio = document.createElement('input');
        lockRadio.type = 'radio';
        lockRadio.name = `user${userIndex}Locked`;
        lockRadio.value = 'lock';
        lockRadio.checked = true;
 
        let unlockLabel = document.createElement('label');
        unlockLabel.textContent = 'Unlock';
 
        let unlockRadio = document.createElement('input');
        unlockRadio.type = 'radio';
        unlockRadio.name = `user${userIndex}Locked`;
        unlockRadio.value = 'unlock';
 
        let br = document.createElement('br');
        let hr = document.createElement('hr');
 
        let usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username';
 
        let usernameInput = document.createElement('input');
        usernameInput.name = `user${userIndex}Username`;
        usernameInput.value = username;
        usernameInput.readOnly = true;
        usernameInput.disabled = true;
 
        let hiddenFieldsDiv = document.createElement('div');
        hiddenFieldsDiv.id = `user${userIndex}HiddenFields`;
 
        let hiddenFieldsHr = document.createElement('hr');
 
        let emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';
 
        let emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.name = `user${userIndex}Email`;
        emailInput.value = email;
        emailInput.readOnly = true;
        emailInput.disabled = true;
 
        let ageLabel = document.createElement('label');
        ageLabel.textContent = 'Age:';
 
        let ageInput = document.createElement('input');
        ageInput.type = 'email';
        ageInput.name = `user${userIndex}Age`;
        ageInput.value = age;
        ageInput.readOnly = true;
        ageInput.disabled = true;
 
        hiddenFieldsDiv.appendChild(hiddenFieldsHr);
        hiddenFieldsDiv.appendChild(emailLabel);
        hiddenFieldsDiv.appendChild(emailInput);
        hiddenFieldsDiv.appendChild(ageLabel);
        hiddenFieldsDiv.appendChild(ageInput);
 
        let showMoreButton = document.createElement('button');
        showMoreButton.textContent = 'Show More';
        showMoreButton.addEventListener('click', showHiddenInfoHandler);
 
        profileDiv.appendChild(profileImage);
        profileDiv.appendChild(lockLabel);
        profileDiv.appendChild(lockRadio);
        profileDiv.appendChild(unlockLabel);
        profileDiv.appendChild(unlockRadio);
        profileDiv.appendChild(br);
        profileDiv.appendChild(hr);
        profileDiv.appendChild(usernameLabel);
        profileDiv.appendChild(usernameInput);
        profileDiv.appendChild(hiddenFieldsDiv);
        profileDiv.appendChild(showMoreButton);
 
        return profileDiv;
    }
 
    function showHiddenInfoHandler(e) {
        let profile = e.target.parentElement;
        let showMoreButton = e.target;
        let hiddenFieldsDiv = e.target.previousElementSibling;
        let radioButton = profile.querySelector('input[type="radio"]:checked');
        console.log(radioButton);
 
        if (radioButton.value !== 'unlock') {
            return;
        }
 
        showMoreButton.textContent = showMoreButton.textContent === 'Show More'
            ? 'Hide it'
            : 'Show More';
 
        hiddenFieldsDiv.style.display = hiddenFieldsDiv.style.display === 'block'
            ? 'none'
            : 'block';
    }
}

/*
function lockedProfile() {
    // Test it without turning on the server :)))
    document.querySelector('.profile').remove();
    const main = document.getElementById('main');
     let url = 'http://localhost:3030/jsonstore/advanced/profiles';
     fetch(url)
     .then(body => body.json())
     .then(response => {
           Object.values(response).forEach(person => {
               main.appendChild(profileCreator(person.username, person.age, person.email));
           })
     })
     .catch(err => {
         let img = document.createElement('img');
         img.src = 'http://www.quickmeme.com/img/bd/bdcd6e56b51e5bd690db16f4ba2116c4c44bb285e7a740fda4c1734217ffcbc1.jpg';
         main.appendChild(img)
     })
 
     function showMoreHandler(e) {
        let profile = e.target.parentNode;
        let divToReveal = profile.querySelector('#userHiddenFields');
        let isChecked = profile.querySelector('input').checked === true;
        if(!isChecked) {
            divToReveal.style.display = divToReveal.style.display === 'none' ? 'block' : 'none';
        }
     }
    
    function profileCreator(name, age, email) {
        let profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');
 
        let img = document.createElement('img');
        img.src = './iconProfile2.png';
        img.classList.add('userIcon');
 
        let lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';
        let lockInput = document.createElement('input');
        lockInput.setAttribute('type', 'radio')
        lockInput.setAttribute('name', 'userLocked')
        lockInput.setAttribute('value', 'lock');
        lockInput.checked = true;
 
        let unlockLabel = document.createElement('label');
        unlockLabel.textContent = 'Unlock';
        let unlockInput = document.createElement('input');
        unlockInput.setAttribute('type', 'radio')
        unlockInput.setAttribute('name', 'userLocked')
        unlockInput.setAttribute('value', 'unlock');
        let br = document.createElement('bg');
        unlockInput.appendChild(br);
 
        let hr = document.createElement('hr');
 
        let userNameLabel = document.createElement('label');
        userNameLabel.textContent = 'Username';
 
        let usernameField = document.createElement('input');
        usernameField.setAttribute('type', 'text');
        usernameField.setAttribute('name', 'userUsername')
        usernameField.setAttribute('value', '');
        usernameField.value = name;
        usernameField.disabled = true;
        usernameField.readOnly = true;
 
        let divForHiddenFields = document.createElement('div');
        divForHiddenFields.setAttribute('id', 'userHiddenFields');
        divForHiddenFields.style.display = 'none';
 
        let hr1 = document.createElement('hr');
 
        let emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:'
        let emailField = document.createElement('input');
        emailField.setAttribute('type', 'text');
        emailField.setAttribute('name', 'userEmail')
        emailField.setAttribute('value', '');
        emailField.value = email;
        emailField.disabled = true;
        emailField.readOnly = true;
 
 
        let ageLabel = document.createElement('label');
        ageLabel.textContent = 'Age:'
        let ageField = document.createElement('input');
        ageField.setAttribute('type', 'text');
        ageField.setAttribute('name', 'userAge')
        ageField.setAttribute('value', '');
        ageField.value = age;
        ageField.disabled = true;
        ageField.readOnly = true;
 
        let showMoreButton = document.createElement('button');
        showMoreButton.textContent = 'Show More';
        showMoreButton.addEventListener('click', showMoreHandler);  
 
        profileDiv.appendChild(img);
        profileDiv.appendChild(lockLabel);
        profileDiv.appendChild(lockInput);
        profileDiv.appendChild(unlockLabel);
        profileDiv.appendChild(unlockInput);
        profileDiv.appendChild(hr);
        profileDiv.appendChild(userNameLabel);
        profileDiv.appendChild(usernameField);
 
        divForHiddenFields.appendChild(hr1);
        divForHiddenFields.appendChild(emailLabel);
        divForHiddenFields.appendChild(emailField);
        divForHiddenFields.appendChild(ageLabel);
        divForHiddenFields.appendChild(ageField);
        
 
        profileDiv.appendChild(divForHiddenFields);
        profileDiv.appendChild(showMoreButton);
        
       return profileDiv;
    }
}
*/

/*
async function lockedProfile() {
    let main=document.querySelector('#main');
    main.innerHTML='';

    //load profiles
    try {
        const url = `http://localhost:3030/jsonstore/advanced/profiles`;
        const response = await fetch(url);
        const profiles = await response.json();

        for (const item of Object.entries(profiles)) {            
            
            let html=e('div',null,'profile');
            html.innerHTML+='<img src="./iconProfile2.png" class="userIcon" />';
            html.innerHTML+='<label>Lock</label>';
            html.innerHTML+=`<input type="radio" name="user${item[0]}Locked" value="lock" checked>`;
            html.innerHTML+='<label>Unlock</label>';
            html.innerHTML+=`<input type="radio" name="user${item[0]}Locked" value="unlock"><br>`;
            html.innerHTML+='<hr>';
            html.innerHTML+='<label>Username</label>';
            html.innerHTML+=`<input type="text" name="user${item[0]}Username" value="${item[1].username}" disabled readonly />`;
            
            //hidden data
            let hiddenData=e('div',null,null);
            hiddenData.setAttribute("id", `user${item[0]}HiddenFields`);
            hiddenData.style.display='none';
            
            hiddenData.innerHTML+='<hr>';
            hiddenData.innerHTML+='<label>Email:</label>';
            hiddenData.innerHTML+=`<input type="email" name="user${item[0]}Email" value="${item[1].email}" disabled readonly />`;
            hiddenData.innerHTML+='<label>Age:</label>';
            hiddenData.innerHTML+=`<input type="email" name="user${item[0]}Age" value="${item[1].age}" disabled readonly />`;
            
            html.appendChild(hiddenData);
            html.innerHTML+='<button>Show more</button>';                    
            main.appendChild(html);
            
        }

    } catch (error) {
        console.log('Error with fetch');
    }

    //show hide functions 05DOM Manipulation and Events - Exercise
    let btnShowHide=Array
        .from(document.getElementsByTagName('button'))
        .forEach(btn=>btn.addEventListener('click', onClickShowHide));
    
    
    function onClickShowHide(event) {
        let parentDiv=event.target.parentNode;
        let hiddedField=parentDiv.getElementsByTagName('div')[0];        
        let lockedBtn=parentDiv.getElementsByTagName('input')[0]; //first input holds LOCKED status true/false

        //console.log(lockedBtn.checked);

        if (lockedBtn.checked) {
            //profile is locked, show/hide is not working
        }
        else{

            //profile is UNlocked
            if ( event.target.textContent==='Show more') {
                //get hidden field, show it, change button text            
                
                hiddedField.style.display="inline";
                event.target.textContent='Hide it';
            }else{
                //hide info and change button text                       
                hiddedField.style.display="none";
                event.target.textContent='Show more';
            }
        }         
    }

    function e(type, content, className){
        const result= document.createElement(type);
        result.textContent=content;
        if (className) {
            result.className=className;
        }
        return result;
    }
}*/