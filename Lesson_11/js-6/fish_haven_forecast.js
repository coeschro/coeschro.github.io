const apiforecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=596e321d521be0b09a65c8161f4130e4";

fetch(apiforecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const time = "18:00:00";
        const weatherTemp = jsObject.list.filter((timeOfDay) => timeOfDay.dt_text.includes(time));

        let day = 1;

        weatherTemp.forEach(weatherTemp => {
            domcument.getElementById('degrees' + (day)).textContent = Math.round(weatherTemp.main.temp) + '\u00B0 F';
            document.getElementById('forecast' + (day)).src = "https://openweathermap.org/img/wn/" + weatherTemp.weather[0].icon + "@2x.png";
            document.getElementById('forecast' + (day)).alt = weatherTemp.weather[0].description;  



            let dayofweek = "";
            switch(new Date(weatherTemp.dt_text).getDay()) {
                case 0:
                    dayofweek = "Sun";
                    break;
                case 1:
                    dayofweek = "Mon";
                    break;
                case 2: 
                    dayofweek = "Tue";
                    break;
                case 3:
                    dayofweek = "Wed";
                    break;
                case 4: 
                    dayofweek = "Thu";
                    break;
                case 5:
                    dayofweek = "Fri";
                    break;
                case 6:
                    dayofweek = "Sat";
                    break;
                default:
                    dayofweek = "Error";
                    break;
            }

            document.getElementById('dayofweek' + (day)).textContent = dayofweek;
                day++;
        })

});

let byuiURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(byuiURL)
    .then(function (response) {
        return response.json()
    })
    .then(function (jsObject) {

        const city = jsObject.towns.filter((specificTown) => specificTown.name.includes("Fish Haven"));
        const events = city[0].events;
        const upcomings = document.createElement("section");
        const div = document.createElement("div");

        events.forEach(event => {
            let upcomingEvent = document.createElement("p");
            upcomingEvent.textContent = event;
            div.appendChild(upcomingEvent);
            upcomings.appendChild(div);
        })

        document.querySelector("div.events").appendChild(upcomings);
    })