const url = 'https://davidjem.github.io/wdd230/chamber/data/data.json';

// const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businesses);  // note that we reference the prophet array of the data object given the structure of the json file
    
    
    // displayProphets(data.prophets);


  }
  
  
  getProphetData();



