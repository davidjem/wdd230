const url = 'https://davidjem.github.io/wdd230/chamber/data/data.json';

// const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businesses);  // note that we reference the array of the data object given the structure of the json file
    displayBusinesses(data.businesses);


  }
  
  
  
  getBusinessData();     

  const displayBusinesses = (businesses) => {
    const directoryCards = document.querySelector('div.directoryCards'); // select the output container element
  
    businesses.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p = document.createElement('a');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the full name 
      
      h2.textContent = `${business.name}`;
      p.textContent = `${business.website}`;
      p2.textContent = `Phone number: ${business.phone}`;
      p3.textContent = `${business.address}`;
    
      


      
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', business.imageurl);
      portrait.setAttribute('alt', `Portait of ${business.name} ${business.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(p2);
      card.appendChild(p3);


      card.appendChild(p);
      card.appendChild(portrait);
  
      directoryCards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression




  // GRID OR LIST BUTTON

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("directoryCards");
	display.classList.remove("listCards");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("listCards");
	display.classList.remove("directoryCards");
}




