const fetch = require('node-fetch');
const {appendFile} = require('fs').promises;
const {normalize, resolve} = require('path');
const chalk = require('chalk');

const cityName = process.argv[2];

function safeJoin(base, target) {
    const targetPath = '.' + normalize('/' + target)
    return resolve(base, targetPath)
}

const getDataFileName = city => safeJoin('./data/', `${city}.txt`)




const processWeatherData = async (data, cityName) => {

    const foundData = data.find(stationData => stationData.stacja === cityName);

    if (!foundData) {
       throw new Error("There is no such City in the API :(");
    }

    const {
        cisnienie: pressure,
        wilgotnosc_wzgledna: humidity,
        temperatura: temperature
    } = foundData;

    const weatherInfoLog = `${chalk.blue(`In ${cityName} there is:`)} \n 
                         ${chalk.green(`${temperature}°C,`)} \n  
                         ${chalk.yellow(`${humidity}% of humidity,`)}  \n  
                         ${chalk.cyan(`${pressure}hPa of pressure.`)} \n`;


    const weatherInfo = `In ${cityName} there is: ${temperature}°C, ${humidity}% of humidity,${pressure}hPa of pressure.\n`;

    console.log(weatherInfo);

    const dateTimeString = new Date().toLocaleString();

    await appendFile(getDataFileName(cityName), `${dateTimeString} \n ${weatherInfo} \n`);

}

const checkCityWeather = async cityName =>{
    try{
        const result = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
        const data = await result.json();
        await processWeatherData(data, cityName);
    }
    catch(error){
        console.log('Error fetching weather data',error);
    }
}


checkCityWeather(process.argv[2]);

// fetch('https://danepubliczne.imgw.pl/api/data/synop')
//     .then(response => response.json())
//     .then(processWeatherData)
//     .catch(error=>console.log("There is an error with code: ", error));
//

