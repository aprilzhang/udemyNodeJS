const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const encodedLocation = encodeURIComponent(argv.a);

console.log(encodedLocation);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedLocation}`,
    json: true
}, (error, response, body) => {
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Lng: ${body.results[0].geometry.location.lng}`);
});