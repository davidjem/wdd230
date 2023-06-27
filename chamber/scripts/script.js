// WEATHER API

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = "c90096a1e286746263656598c3e2baac"
const city = "Provo";
const units = "imperial";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);  
    }
  }
 
  
  apiFetch();

  
// function displayResults(weatherData) {

//     currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
// }
function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    globalThis.temp = weatherData.main.temp;
    globalThis.speed = weatherData.wind.speed;

    let windchill = 0;
  
    if ((speed > 3) && (temp < 50)){
        windchillresult = 35.74 + 0.6215*temp - 35.75 * speed**0.16 + 0.4275 * temp * speed**0.16;
    
        windchill = Math.round(windchillresult);
    }
    else{
        windchill = ('N/A');
    }
    console.log(Math.round(windchill));
    
    
    document.querySelector('#windspeed').textContent =` ${speed}`;
    document.querySelector('#windchill').textContent = windchill;



  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    
    
  }


  // console.log(temp);
  // console.log(speed);


  // let temp = 13;
  // let speed = 20;

  









// WEEKDAY MESSAGE

var today = new Date();
if(today.getDay() == 2){
  document.getElementById('weektext').innerHTML = ('🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.')
  console.log('Tuesday!');
  
} 
else{
  console.log('Not tuesday :(')
  document.getElementById('weektext').innerHTML = ('Welcome to the chamber of commerce website')
}


// toggle menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");
    // console.log("It worked!");
}

const x = document.getElementById('hamburguerBtn')
x.onclick = toggleMenu;

// footer date


let d = new Date()
let oLastModif = new Date(document.lastModified);
/* document.getElementById("year").textContent = d.getFullYear() */
document.querySelector("#year").innerHTML = d.getFullYear()
document.querySelector(".updated").textContent = oLastModif.toLocaleString()


let date = new Date();


let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let display = `${month}-${day}-${year}`;



document.getElementById('timeStamp').value = display; 
console.log('display');


document.querySelector("#current-date").innerHTML = display;



