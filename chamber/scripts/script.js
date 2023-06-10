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




// var weekday = new Array(7)

// weekday[0] = "Welcome to the chamber of commerce website"
// weekday[1] = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
// weekday[2] = "Welcome to the chamber of commerce website"
// weekday[3] = "Welcome to the chamber of commerce website"
// weekday[4] = "Welcome to the chamber of commerce website"
// weekday[5] = "Welcome to the chamber of commerce website"
// weekday[6] = "Welcome to the chamber of commerce website"

// var currentDate = new Date()
// weekdayValue = currentDate.getDay()

// document.getElementById('weektext').innerHTML = (
//     " " + weekday[weekdayValue] + '!</p>'
// ) 

// -------------------------------------------------------------

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

document.getElementById('timeStamp').value= display ; 
console.log('display');

document.querySelector("#current-date").innerHTML = display;






