// let currentDate = new Date();
// let lastM = new Date(document.lastModified);
// document.querySelector("#year").innerHTML = currentDate.getFullYear();

let d = new Date()
let oLastModif = new Date(document.lastModified);
/* document.getElementById("year").textContent = d.getFullYear() */
document.querySelector("#year").innerHTML = d.getFullYear()
document.querySelector(".updated").textContent = oLastModif.toLocaleString()