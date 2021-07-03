const apiforecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=596e321d521be0b09a65c8161f4130e4`;

fetch(apiforecastURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    const filter = "18:00:00";
    const weatherTemp = jsObject.list.filter((specificTime) => specificTime.dt_text.includes(filter));

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