// Insert wind speed in mph and temperature in farenheit
// -----------------------------------------------------------------------
// "Wind Chill Temperature is officially defined for temperatures
//  at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per
//   hour (3.0 mph)."


let temp = 20;
let speed = 5;
var spantemp = document.getElementById("temperature").innerText;
var spanspeed = document.getElementById("windspeed").innerText;

console.log(span_Text)

// let temp = document.getElementById("temperature");    
// let speed = document.getElementById("windspeed");

let windchill = 0;

if ((speed > 3) && (temp < 50)){
    // windchillresult = 35.74 + (0.6215*temp) - (((35.75*(speed**0.16)) + 0.4275) * (temp * (speed**0.16)));
    windchillresult = 35.74 + 0.6215*temp - 35.75 * speed**0.16 + 0.4275 * temp * speed**0.16;

    windchill = Math.round(windchillresult);
}
else{
    windchill = ('N/A');
}
// console.log(Math.round(windchill));
// console.log(spantemp);
// console.log(spanspeed);

document.querySelector('#windchill').textContent = windchill;