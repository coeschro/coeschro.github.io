
const apiURL ="https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=596e321d521be0b09a65c8161f4130e4";



fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const current1 = document.querySelector('#current1');
        current1.textContent = jsObject.weather[0].description;
        const current = document.querySelector('#current');
        current.textContent = jsObject.main.temp.toFixed(0);
        const high = document.querySelector('#high');
        high.textContent = jsObject.main.temp_max.toFixed(0);
        const chill = document.querySelector('#chill');
        chill.textContent = jsObject.wind.deg.toFixed(0);
        const humid = document.querySelector('#humid');
        humid.textContent = jsObject.main.humidity.toFixed(0);
        const speed = document.querySelector('#speed');
        speed.textContent = jsObject.wind.speed.toFixed(0);



});