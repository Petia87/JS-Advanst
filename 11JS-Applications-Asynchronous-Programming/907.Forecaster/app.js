function attachEvents() {
    const btnGet = document.querySelector('#submit');
    const locationName = document.querySelector('#location');
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    btnGet.addEventListener('click', onGetForecast);

    const symbolItems = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;',
    }

    async function onGetForecast(event) {
        if (locationName.value == '' || locationName.value == undefined) {
            return;
        }
        //always will be valid, exept if problem with server
        try {
            const response = await fetch(url);
            const data = await response.json();

            let target = data.find(e => e.name == locationName.value);
            if (target) {
                //code is found, 2 more requests (target.code)

                //current forecase
                try {
                    const resCurrent = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${target.code}`);
                    const dataItem = await resCurrent.json();
                    clearDivForDataEntry();
                    let divCurrent = document.querySelector('#current');

                    let divForecasts = e('div', null, 'forecasts');
                    let spanConditionSymbol = e('span', null, 'condition');
                    let spanConditions = e('span', null, 'condition');
                    let span1 = e('span', dataItem.name, 'forecast-data');
                    let span2 = e('span', dataItem.forecast.low + '°/' + dataItem.forecast.high + '°', 'forecast-data');
                    let span3 = e('span', dataItem.forecast.condition, 'forecast-data');

                    spanConditions.appendChild(span1);
                    spanConditions.appendChild(span2);
                    spanConditions.appendChild(span3);

                    spanConditionSymbol.classList.add('symbol');
                    spanConditionSymbol.innerHTML = symbolItems[dataItem.forecast.condition];

                    divForecasts.appendChild(spanConditionSymbol);
                    divForecasts.appendChild(spanConditions);

                    divCurrent.appendChild(divForecasts);

                } catch (error) {
                    postErrorToDom();
                }

                //3day forecast
                try {
                    const res3day = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${target.code}`);
                    const threeDay = await res3day.json();
                    console.log(threeDay);
                    let divUpcoming = document.querySelector('#upcoming');
                    let divForecastInfo = e('div', null, 'forecast-info');
                    divUpcoming.appendChild(divForecastInfo);

                    threeDay.forecast.forEach(element => {
                        let mainSpan = e('span', null, 'upcoming');
                        let span1 = e('span', null, 'symbol');
                        span1.innerHTML = symbolItems[element.condition];

                        mainSpan.appendChild(span1);
                        mainSpan.appendChild(e('span', element.low + '°/' + element.high + '°', 'forecast-data'));
                        mainSpan.appendChild(e('span', element.condition, 'forecast-data'));

                        divForecastInfo.appendChild(mainSpan);
                    });

                } catch (error) {
                    postErrorToDom();
                }



            } else {
                postErrorToDom();
            }
        } catch (error) {
            postErrorToDom();
        }
    }

    function postErrorToDom() {
        document.querySelector('#forecast').style.display = 'block';
        document.querySelector('#forecast').innerHTML = 'ERROR';
    }
    function clearDivForDataEntry() {
        document.querySelector('#forecast').style.display = 'block';
        document.querySelector('#forecast').innerHTML = '<div id="current"><div class="label">Current conditions</div></div><div id="upcoming"><div class="label">Three-day forecast</div></div>';
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

attachEvents();
/*
function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeather);
}
 
attachEvents();
 
async function getWeather() {
    document.getElementById('forecast').style.display = 'block';
    const updateLable = document.getElementsByClassName('label');
    const divtoappendCurrent = document.getElementById('current');
    const input = document.getElementById('location');
    //div forecast Current
    const divCurrentConditions = document.createElement('div');
    divCurrentConditions.setAttribute('class', 'forecasts');
 
    //DIV to append in divForecast3Comming
    const createDIVForecast = document.createElement('div');
    createDIVForecast.setAttribute('class', 'forecast-info');
 
//TODO - check how to clear the conditions, when making new request!
    try {
        
        const cityName = input.value;
 
        const code = await getCode(cityName);
 
        const [current, upcoming] = await Promise.all([
            getCurrentWeather(code),
            getUpcommingWeather(code)
        ]);
 
        updateLable[0].textContent = 'Current conditions';
        updateLable[1].textContent = 'Three-day forecast';
        
 
        //spanx2
        const divCurrentConditions1 = document.createElement('span');
        divCurrentConditions1.setAttribute('class', 'conditions symbol');
        divCurrentConditions1.textContent = getIcon(current)
        const divCurrentConditions2 = document.createElement('span');
        divCurrentConditions2.setAttribute('class', 'condition');
 
        //span forecast data x4
        const divCurrentConditions3 = document.createElement('span');
        divCurrentConditions3.setAttribute('class', 'forecast-data');
        divCurrentConditions3.textContent = current.name;
 
        const divCurrentConditions4 = document.createElement('span');
        divCurrentConditions4.setAttribute('class', 'forecast-data');
        divCurrentConditions4.textContent = `${current.forecast.low}°/${current.forecast.high}°`;
 
        const divCurrentConditions5 = document.createElement('span');
        divCurrentConditions5.setAttribute('class', 'forecast-data');
        divCurrentConditions5.textContent = current.forecast.condition;
 
        //append all
        divCurrentConditions2.appendChild(divCurrentConditions3);
        divCurrentConditions2.appendChild(divCurrentConditions4);
        divCurrentConditions2.appendChild(divCurrentConditions5);
        divCurrentConditions.appendChild(divCurrentConditions1);
        divCurrentConditions.appendChild(divCurrentConditions2);
        divtoappendCurrent.appendChild(divCurrentConditions);
 
        //div Forecast 3 days
        const divForecast3Comming = document.getElementById('upcoming');
 
        //span1
        const span1 = document.createElement('span');
        span1.setAttribute('class', 'upcoming');
 
        const span2 = document.createElement('span');
        span2.setAttribute('class', 'symbol');
        const todo = Object.values(upcoming.forecast)
        span2.textContent = getIconUp(todo[0].condition);
 
        const span3 = document.createElement('span');
        span3.setAttribute('class', 'forecast-data');
        span3.textContent = `${todo[0].low}°/${todo[0].high}°`;
 
        const span4 = document.createElement('span');
        span4.setAttribute('class', 'forecast-data');
        span4.textContent = todo[0].condition;
 
        //span2
        const span21 = document.createElement('span');
        span21.setAttribute('class', 'upcoming');
 
        const span22 = document.createElement('span');
        span22.setAttribute('class', 'symbol');
        span22.textContent = getIconUp(todo[1].condition);
 
        const span23 = document.createElement('span');
        span23.setAttribute('class', 'forecast-data');
        span23.textContent = `${todo[1].low}°/${todo[1].high}°`;
 
        const span24 = document.createElement('span');
        span24.setAttribute('class', 'forecast-data');
        span24.textContent = todo[1].condition;
 
        //span 3
        const span31 = document.createElement('span');
        span31.setAttribute('class', 'upcoming');
 
        const span32 = document.createElement('span');
        span32.setAttribute('class', 'symbol');
        span32.textContent = getIconUp(todo[2].condition);
 
        const span33 = document.createElement('span');
        span33.setAttribute('class', 'forecast-data');
        span33.textContent = `${todo[2].low}°/${todo[2].high}°`;
 
        const span34 = document.createElement('span');
        span34.setAttribute('class', 'forecast-data');
        span34.textContent = todo[2].condition;
 
        //append
        divForecast3Comming.appendChild(createDIVForecast);
        createDIVForecast.appendChild(span1);
        span1.appendChild(span2);
        span1.appendChild(span3);
        span1.appendChild(span4);
 
        //append2
        createDIVForecast.appendChild(span21);
        span21.appendChild(span22);
        span21.appendChild(span23);
        span21.appendChild(span24);
 
        //append3
        createDIVForecast.appendChild(span31);
        span31.appendChild(span32);
        span31.appendChild(span33);
        span31.appendChild(span34);
 
    } catch (error) {
 
        updateLable[0].textContent = 'Error';
        updateLable[1].textContent = 'Error';
    }
    input.value = '';
}
 
async function getCode(cityName) {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const response = await fetch(url);
    const data = await response.json();
 
    return data.find(c => c.name.toLowerCase() == cityName.toLowerCase()).code;
}
 
async function getCurrentWeather(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
    const response = await fetch(url);
    const data = await response.json();
 
    return data;
}
 
async function getUpcommingWeather(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;
    const response = await fetch(url);
    const data = await response.json();
 
    return data;
}
 
function getIcon(option) {
    let wheathersymbol = ''
    switch (option.forecast.condition) {
        case 'Sunny':
            wheathersymbol = "\u2600";
            break;
        case 'Partly sunny':
            wheathersymbol = "\u26C5";
            break;
        case 'Overcast':
            wheathersymbol = "\u2601";
            break;
        case 'Rain':
            wheathersymbol = '\u2614';
            break;
    }
    return wheathersymbol
}
 
function getIconUp(option) {
    let wheathersymbol = ''
    switch (option) {
        case 'Sunny':
            wheathersymbol = "\u2600";
            break;
        case 'Partly sunny':
            wheathersymbol = "\u26C5";
            break;
        case 'Overcast':
            wheathersymbol = "\u2601";
            break;
        case 'Rain':
            wheathersymbol = '\u2614';
            break;
    }
    return wheathersymbol
}
 */

/*
function attachEvents() {
    let getWeatherButton = document.getElementById('submit');
    getWeatherButton.addEventListener('click', getWeatherHandler);
    let locationInput = document.getElementById('location');
 
    let conditions = {
        Sunny: () => '☀',
        "Partly sunny": () => '⛅',
        Overcast: () => '☁',
        Rain: () => '☂'
    }
 
 
    function getWeatherHandler() {
        let forecastContainer = document.getElementById('forecast');
 
        let currentForecastContainer = document.querySelector('#current');
        Array.from(currentForecastContainer.querySelectorAll('div')).forEach((el, i) => {
            i !== 0 ? el.remove() : el;
        })
        let upcomingForecastContainer = document.querySelector('#upcoming');
        Array.from(upcomingForecastContainer.querySelectorAll('div')).forEach((el, i) => {
            i !== 0 ? el.remove() : el;
        })
        
        fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then(body => body.json())
            .then(locations => {
                let locationName = locationInput.value;
                let location = locations.find(x => x.name === locationName);
                console.log(location);
                let curPromise = fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`)
                    .then(body => body.json())
                    .then(currentWeatherReport => ({ code: location.code, currentWeatherReport }))
                    .then(({ code, currentWeatherReport }) => {
                        console.log(currentWeatherReport);
                        let htmlReport = createCurrentWeatherElement(currentWeatherReport);
 
                        currentForecastContainer.appendChild(htmlReport);
                    });
 
                let upcPromise = fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`)
                    .then(x => x.json())
                    .then(upcommingWeatherReport => {
                        console.log(upcommingWeatherReport);
                        let upcomingForecast = createUpcomingWeatherElement(upcommingWeatherReport);
                        upcomingForecastContainer.appendChild(upcomingForecast);
                    });
 
                Promise.all([curPromise, upcPromise]).then(x => {
                    forecastContainer.style.display = 'block';
                });
            })
            .catch(err => {
                let errorDiv = document.createElement('div');
                errorDiv.classList.add('label');
                errorDiv.textContent = 'Error';
                currentForecastContainer.appendChild(errorDiv);
            });
 
        function createUpcomingWeatherElement(weatherReport) {
            let forecastInfoDiv = document.createElement('div');
            forecastInfoDiv.classList.add('forecast-info');
 
            let day1html = createDayReport(weatherReport.forecast[0]);
            let day2html = createDayReport(weatherReport.forecast[1]);
            let day3html = createDayReport(weatherReport.forecast[2]);
 
            forecastInfoDiv.appendChild(day1html);
            forecastInfoDiv.appendChild(day2html);
            forecastInfoDiv.appendChild(day3html);
            return forecastInfoDiv;
        }
 
        function createDayReport(forecast) {
            let upcomingSpan = document.createElement('span');
            upcomingSpan.classList.add('upcoming');
 
            let symbolSpan = document.createElement('span');
            symbolSpan.classList.add('symbol');
            symbolSpan.textContent = conditions[forecast.condition]();
 
            let tempSpan = document.createElement('span');
            tempSpan.classList.add('forecast-data');
            tempSpan.textContent = `${forecast.low}°/${forecast.high}°`;
 
            let weatherSpan = document.createElement('span');
            weatherSpan.classList.add('forecast-data');
            weatherSpan.textContent = forecast.condition;
 
            upcomingSpan.appendChild(symbolSpan);
            upcomingSpan.appendChild(tempSpan);
            upcomingSpan.appendChild(weatherSpan);
            return upcomingSpan;
        }
 
        function createCurrentWeatherElement(weatherReport) {
            let forecastsDiv = document.createElement('div');
            forecastsDiv.classList.add('forecasts');
 
            let conditionSymbolSpan = document.createElement('span');
            conditionSymbolSpan.classList.add('condition', 'symbol');
            conditionSymbolSpan.textContent = conditions[weatherReport.forecast.condition]();
 
            let conditionSpan = document.createElement('span');
            conditionSpan.classList.add('condition');
 
            let nameSpan = document.createElement('span');
            nameSpan.classList.add('forecast-data');
            nameSpan.textContent = weatherReport.name;
 
            let tempSpan = document.createElement('span');
            tempSpan.classList.add('forecast-data');
            tempSpan.textContent = `${weatherReport.forecast.low}°/${weatherReport.forecast.high}°`;
 
            let weatherSpan = document.createElement('span');
            weatherSpan.classList.add('forecast-data');
            weatherSpan.textContent = weatherReport.forecast.condition;
 
            conditionSpan.appendChild(nameSpan);
            conditionSpan.appendChild(tempSpan);
            conditionSpan.appendChild(weatherSpan);
 
            forecastsDiv.appendChild(conditionSymbolSpan);
            forecastsDiv.appendChild(conditionSpan);
            return forecastsDiv;
        }
    }
}
 
attachEvents();*/