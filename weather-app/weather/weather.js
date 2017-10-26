const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    const weatherURL = `https://api.darksky.net/forecast/d8018107de0be407f5966fa8e88fb53d/${latitude},${longitude}`;
    console.log(weatherURL);
    request({
        url: weatherURL,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        } 
    });
}

module.exports = {
    getWeather
}