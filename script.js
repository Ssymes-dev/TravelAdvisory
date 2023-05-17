const API_URL = 'https://www.travel-advisory.info/api';

fetch(API_URL)
.then((response) => response.json())
.then((result) => {
    console.log(result.data.AO);
});

// generated by github copilot, shows full api in browser
fetch(API_URL)

// takes response from URL and turns it into a .json file
.then(response => response.json())
// response.json file is named result
.then(result => {
    for (const list in result.data) {
        const countryName = result.data[list].name;
        const code = result.data[list].iso_alpha2;
        const countryScore = result.data[list].advisory.score;
        const countryMessage = result.data[list].advisory.message;
        const lastUpdated = result.data[list].advisory.updated;
        const source = result.data[list].advisory.sources_active;

        const countryList = document.createElement('p');
    
        countryList.innerHTML = 
            `<li>${countryName}:
                ${code} <br>
                ${countryMessage}<br>
                ${countryScore}<br>
                ${"Updated" + " " + lastUpdated}<br>
                ${"From "+ source+" sources"} </li><br>`;

        document.getElementById('country-list').append(countryList);
    }
});

// TODO: display list of counrty codes in drop down menu
fetch(API_URL)
.then(response => response.json())
.then(result => {
    for (const list in result.data) {
        const countryName = result.data[list].name;
// display drop down list of countries
        const dropList = document.createElement('optgroup');
    
        dropList.innerHTML = 
            `${countryName}`;

        document.getElementById('dropdown').append(dropList);
    }
});

// //pop countries?

// // create drop down list of countries
// // create a function that will take the country name and return the score and message
// // create a function that will take the score and message and return a color