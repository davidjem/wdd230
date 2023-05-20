// WEEKDAY MESSAGE

var weekday = new Array(7)

weekday[0] = "spectacular Sunday"
weekday[1] = "marvelous Monday! 🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
weekday[2] = "terrific Tuesday"
weekday[3] = "wonderful Wednesday"
weekday[4] = "totally cool Thursday"
weekday[5] = "fantastic Friday"
weekday[6] = "sweet Saturday"

var currentDate = new Date()
weekdayValue = currentDate.getDay()

document.getElementById('weektext').innerHTML = (
  '<p>Have a ' + weekday[weekdayValue] + '!</p>'
) 
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

document.querySelector("#current-date").innerHTML = display;


