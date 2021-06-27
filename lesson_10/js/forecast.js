const cityid ="5604473";
const APPID="";


const apiURL =`https://api.openweathermap.org/data/2.5/forecast?id=${cityid}$APPID=${APPID}$units=imperial` ;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let day = 0;
        const dayofweek = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];

        const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes(`18:00:00`));
        console.log(fiveDayForecast);

        fiveDayForecast.forEach(x => {
            let d = new Date(x,dt_txt);

            document.getElementById(`dayofweek${day+1}`).textContent = dayofweek[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
            day++
        });
       

    });