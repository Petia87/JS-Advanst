function attachEvents() {
    let btnLoad = document.getElementById('btnLoad');
    let btnCreate = document.getElementById('btnCreate');
    let ul = document.getElementById('phonebook');


    let url = `https://phonebook-nakov.firebaseio.com/phonebook`


    btnLoad.addEventListener(`click`, () => {
        fetch(url)
            .then((responsive) => responsive.json())
            .then((data) => {
                Object.keys(data).forEach((key) => {
                    let li = document.createElement('li');
                    li.textContent = `${data[key].person}:${data[key].phone}`;
                    let delBtn = document.createElement('button')
                    let delUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`
                    delBtn.textContent = `Delete`;
                    delBtn.addEventListener(`click`, () => {
                        fetch(delUrl, { method: `DELETE` })
                    })
                    li.appendChild(delBtn);
                    ul.appendChild(li);
                })
            })
    })

    btnCreate.addEventListener(`click`, () => {
        let person = document.getElementById('person')
        let phone = document.getElementById('phone')

        fetch(url, {
            method: `POST`,
            body: JSON.stringify({
                person: person, phone: phone
            })
        })
    })
}



attachEvents();