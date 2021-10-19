function solve() {
    //get the DOM elements
    const infoSpan = document.querySelector('#info > span[class=info]');
    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');
    // the first destination of the bus is the depot. 
    // Should probably be passed as argument when calling the solve function istead of being hardcoded.
    let nextStopId = 'depot'; 
    let currentStopName = '';

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
        .then((response) => response.json())
        .then((data) => {
            currentStopName = data.name;
            nextStopId = data.next;

            infoSpan.textContent = `Next stop ${currentStopName}`;
            departButton.disabled = true;
            arriveButton.disabled = false;
        })
        .catch(() => {
            infoSpan.textContent = 'Error';
            departButton.disabled = true;
            arriveButton.disabled = true;
        })
    }

    function arrive() {
        infoSpan.textContent = `Arriving at ${currentStopName}`;
        departButton.disabled = false;
        arriveButton.disabled = true; //Should probaly have a private swap buttons function to avoid repetition.
    }

    return {
        depart,
        arrive
    };
}

let result = solve();

/*
function solve() {
 
    function depart() {
        let nextStopId = 'depot';
        let stopInfoSpan = document.querySelector('#info .info');
        let departButton = document.getElementById('depart');
        let arriveButton = document.getElementById('arrive');
 
        console.log(stopInfoSpan.getAttribute('data-next-stop-id'))
        if(stopInfoSpan.getAttribute('data-next-stop-id') !== null) {
            nextStopId = stopInfoSpan.getAttribute('data-next-stop-id');
        }
 
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
            .then(body => body.json())
            .then(stopInfo => {
                console.log(stopInfo);
                stopInfoSpan.setAttribute('data-stop-name', stopInfo.name);
                stopInfoSpan.setAttribute('data-next-stop-id', stopInfo.next);
                stopInfoSpan.textContent = `Next stop ${stopInfo.name}`;
                departButton.disabled = true;
                arriveButton.disabled = false;
            })
            .catch(err => {
                stopInfoSpan.textContent = `Error`;
                departButton.disabled = true;
                arriveButton.disabled = true;
            })
    }
 
    function arrive() {
        let stopInfoSpan = document.querySelector('#info .info');
        let departButton = document.getElementById('depart');
        let arriveButton = document.getElementById('arrive');
        let stopName = stopInfoSpan.getAttribute('data-stop-name');
        stopInfoSpan.textContent = `Arriving at ${stopName}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }
 
    return {
        depart,
        arrive
    };
}
 
let result = solve();*/