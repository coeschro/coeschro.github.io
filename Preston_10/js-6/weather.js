
const apiURL ="https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=596e321d521be0b09a65c8161f4130e4";
const apiforecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=596e321d521be0b09a65c8161f4130e4`


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

fetch(apiforecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        let day = 0;

        

        const fiveDayForecast = jsObject.list.filter((forecaster) => forecast.dt_txt.includes('18:00:00'));
        console.log(fiveDayForecast);

        for (let x = 0; x < fiveDayForecast.length; x++) {
            let forecast = fiveDayForecast[x];
            let temp = "temp" + x;
            let icon = "icon" + x;
            let day = "day" + x;
            let date = new Date(forecast.dt_txt);
            let foreDay = days[date.getDay()];

            const description = forecast.weather[0].description;
            const src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
            document.getElementById("dayofweek1").textContent = day;
            document.getElementById("forecast1").textContent = temp;
        }});
