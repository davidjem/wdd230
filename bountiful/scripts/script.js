console.log('I LOVE HANNAH');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = "c90096a1e286746263656598c3e2baac";
const city = "carlsbad";
const units = "imperial";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;





async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);  
    }
  }
 
  
  apiFetch();

  

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    document.querySelector('#humidity').innerHTML = weatherData.main.humidity;
    document.querySelector('#feels-like').innerHTML = weatherData.main.feels_like.toFixed(0);
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    globalThis.temp = weatherData.main.temp;

    
    
    



  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    
    
  }


  









// WEEKDAY MESSAGE




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


document.getElementById("timeStamp").innerHTML = display;

//////////////////////////////////////////////////////////////////////////////////



 // This function increases the count
 function clickButtonFunction() {

  console.log('run');

  //Check to see if the localstorage variable exists. If it does not, this is the first time coming to the page, and we need to initalize it to 0
  if (localStorage.getItem("clickCounter") === null) {
    // Store
    localStorage.setItem("clickCounter", "0");
  }

  // Get the value from local storage
  var value = parseInt(localStorage.getItem("clickCounter"));

  // Incrememtnt the count by 1
  var newValue = value + 1

  //Write the value back to local storage
  localStorage.setItem("clickCounter", newValue);


  // Write the value to the div
  document.getElementById("clickCounter").innerHTML = newValue

  document.getElementById("submittedDrinks").innerHTML = value

}

// Reset local storage to 0
