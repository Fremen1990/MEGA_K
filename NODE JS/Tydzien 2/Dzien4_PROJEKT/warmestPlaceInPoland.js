const fetch = require('node-fetch');
// const {appendFile} = require('fs').promises;
const chalk = require('chalk');

const processWeatherData = async data => {
   const sorted =  [...data].sort((a, b) => {

       return b.temperatura - a.temperatura;

        // if (b.temperatura > a.temperatura) {
        //     return 1;
        // }
        // if (a.temperatura > b.temperatura) {
        //     return -1;
        // }
        // return 0;
    });

   const {
       stacja: station,
       temperatura: temperature,
   } = sorted[0];

   console.log(temperature, station);
   // console.log(sorted)
}

const findWarmestPlaceInPoland = async () => {
    try {
        const result = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
        const data = await result.json();
        await processWeatherData(data);
    } catch (error) {
        console.log('Error fetching weather data', error);
    }
}

findWarmestPlaceInPoland();

// fetch('https://danepubliczne.imgw.pl/api/data/synop')
//     .then(response => response.json())
//     .then(processWeatherData)
//     .catch(error=>console.log("There is an error with code: ", error));
//

