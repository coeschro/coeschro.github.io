 const townlistURL = "https://byui-cit230.github.io/weather/data/towndata.json";
 fetch(townlistURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (IDtowns) {
        const towns = IDtowns['towns'];

            let idaho_towns = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = towns[0].name;

            let motto = document.createElement('h3')
            motto.textContent = towns[0].motto;

            let year = document.createElement('p');
            year.innerHTML = `<span class="title">Year Founded: </span> ${towns[0].yearFounded}`;
                
            let population = document.createElement('p');
            population.innerHTML = `<span class="title">Population: </span> ${towns[0].currentPopulation}`;

            let rain = document.createElement('p');
            rain.innerHTML = `<span class="title">Annual Rain Fall: </span> ${towns[0].averageRainfall}`;

            let pic = document.createElement('img');
            pic.setAttribute('src', "images/soda_springs.jpg");
            pic.setAttribute('alt', "Image of a Soda Springs barn");


            idaho_towns.appendChild(h2);
            idaho_towns.appendChild(motto)
            idaho_towns.appendChild(year);
            idaho_towns.appendChild(population);
            idaho_towns.appendChild(rain);
            idaho_towns.appendChild(pic);

            document.querySelector('div.SC_towns').appendChild(idaho_towns);


            idaho_towns = document.createElement('section');
            h2 = document.createElement('h2');
            h2.textContent = towns[2].name;

            motto = document.createElement('h3')
            motto.textContent = towns[2].motto;

            year = document.createElement('p');
            year.innerHTML = `<span class="title">Year Founded: </span> ${towns[2].yearFounded}`;
                
            population = document.createElement('p');
            population.innerHTML = `<span class="title">Population: </span> ${towns[2].currentPopulation}`;

            rain = document.createElement('p');
            rain.innerHTML = `<span class="title">Annual Rain Fall: </span> ${towns[2].averageRainfall}`;

            pic = document.createElement('img');
            pic.setAttribute('src', "images/fish_haven.jpg");
            pic.setAttribute('alt', "Image of a Fish Haven barn");


            idaho_towns.appendChild(h2);
            idaho_towns.appendChild(motto)
            idaho_towns.appendChild(year);
            idaho_towns.appendChild(population);
            idaho_towns.appendChild(rain);
            idaho_towns.appendChild(pic);
                

            document.querySelector('div.SC_towns').appendChild(idaho_towns);


            idaho_towns = document.createElement('section');
            h2 = document.createElement('h2');
            h2.textContent = towns[6].name;

            motto = document.createElement('h3')
            motto.textContent = towns[6].motto;

            year = document.createElement('p');
            year.innerHTML = `<span class="title">Year Founded: </span> ${towns[6].yearFounded}`;
                
            population = document.createElement('p');
            population.innerHTML = `<span class="title">Population: </span> ${towns[6].currentPopulation}`;

            rain = document.createElement('p');
            rain.innerHTML = `<span class="title">Annual Rain Fall: </span> ${towns[6].averageRainfall}`;

            pic = document.createElement('img');
            pic.setAttribute('src', "images/preston.jpg");
            pic.setAttribute('alt', "Image of a Preston barn");


            idaho_towns.appendChild(h2);
            idaho_towns.appendChild(motto)
            idaho_towns.appendChild(year);
            idaho_towns.appendChild(population);
            idaho_towns.appendChild(rain);
            idaho_towns.appendChild(pic);

            document.querySelector('div.SC_towns').appendChild(idaho_towns);
                }
);