const cityid ="5604473";
const APPID="";


const apiURL =`https://api.openweathermap.org/data/2.5/weather?id=${cityid}$APPID=${APPID}$units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const temperature = document.querySelector('#temperature');
        temperature.textContent = jsObject.main.temp.toFixed(0);
        const currently = document.querySelector('#currently');
        currently.innerHTML = `<strong>${jsObject.weather[0].description.toUpperCase()}</strong>`;
        const imagesrc = `https://openweathermap.org/img/w/${jsObject.wether[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);

    });