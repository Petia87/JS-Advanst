async function getInfo() {
    const busId = Number(document.querySelector('#stopId').value);
    const stopName = document.querySelector('#stopName');
    stopName.textContent = '';
    document.querySelector('#buses').innerHTML = '';

    let url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;
    const validIds = [1287, 1308, 1327, 2334];

    //check id
    if (!validIds.includes(busId) || isNaN(busId) || busId == '') {
        stopName.textContent = 'Error';
        console.log('Invalid ID');
    } else {
        console.log('valid ID');
        try {
            const response = await fetch(url);

            if (response.status !== 200) {
                stopName.textContent = 'Error';
                console.log('Valid ID but Invalid response');
                console.log(response.status);
            } else {
                data = await response.json();
                stopName.textContent = data.name;
                console.log(data.buses);
                for (const [key, value] of Object.entries(data.buses)) {
                    document.querySelector('#buses').appendChild(e('li', `Bus ${key} arrives in ${value} minutes`));
                }
            }
        }
        catch (err) {
            console.log(err);
            //not successful fetch
            stopName.textContent = 'Error';
        }
    }

   function e(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className;
        }
        return result;
    }
}
 
function getInfo() {
    //Get dom elements
    let stopID = document.querySelector('#stopId')
    let stopNameDiv = document.querySelector('#stopName');
    let busesUl = document.querySelector('#buses');
    let resultDiv = document.querySelector('#result');
    //Clear data before request is made as per the requirements
    stopNameDiv.textContent = '';
    //busesUl.innerHTML = ''; //easiest way to clear the UL from all list items  
    //Since using innerHTML is frowned upon next best way is to remove the element and create new one
    busesUl.remove();
    let newBusesUl = createElement('ul', undefined, undefined, resultDiv);
    newBusesUl.id = 'buses' //Would be better to fill it with list items first and then append it, but we need it cleared beforehand.

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopID.value}`)
    .then(response => response.json())
    .then(stopInfo => {
        stopNameDiv.textContent = stopInfo.name;
        for (const busId of Object.keys(stopInfo.buses)) {
            let listItem = document.createElement('li');
            listItem.textContent = `Bus ${busId} arrives in ${stopInfo.buses[busId]} minutes`;
            newBusesUl.appendChild(listItem);
            //Would've been better if newBusesUl wasn't already added to the DOM
        }
    })
    .catch((err) => stopNameDiv.textContent = 'Error');
    
    stopID.value = '';
}