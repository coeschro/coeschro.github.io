const apiforecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=596e321d521be0b09a65c8161f4130e4";

fetch(apiforecastURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const weatherTemp = jsObject.list.filter(dt => dt.dt_text.includes('18:00:00'));


    for (let i = 0; i <= 4 ; i++) {
        let x = new Date(weatherTemp[i].dt_text);
        document.getElementById(`dayofweek${i+1}`).textContent = day[x.getDay()];
        document.getElementById(`forecast${i+1}`).textContent = Math.round(weahterTemp[i].main.temp, 0);

        let alt = weatherTemp[i].weahter[0].description;
        let src = "https://openweathermap.org/img/w" + weatherTemp[i].weather[0].icon + ".png";
        document.getElementById(`icon${x+1}`).setAttribute("src", src);
        document.getElementById(`icon${x+1}`).setAttribute("alt", alt);
    }
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