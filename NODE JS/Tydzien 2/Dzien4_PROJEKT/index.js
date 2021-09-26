const fetch = require('node-fetch');
const chalk = require('chalk');

const cityName = process.argv[2];

const processWeatherData = data => {
    const foundData = data.find(stationData => stationData.stacja === cityName);
    if (!foundData) {
        console.log("There is no such City in the API :(");
        return;
    }

    const {
        cisnienie: pressure,
        wilgotnosc_wzgledna: humidity,
        temperatura: temperature
    } = foundData;

    const weatherInfo = `${chalk.blue(`In ${cityName} there is:`)} \n 
                         ${chalk.green(`${temperature}°C,`)} \n  
                         ${chalk.yellow(`${humidity}% of humidity,`)}  \n  
                         ${chalk.cyan(`${pressure}hPa of pressure.`)} \n`;

    console.log(weatherInfo);
}

fetch('https://danepubliczne.imgw.pl/api/data/synop')
    .then(response => response.json())
    .then(processWeatherData);


