// const url2 = "https://davidjem.github.io/wdd230/chamber/data/data.json";

const url2 = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getBusinessData() {
  const response = await fetch(url2);
  const data = await response.json();
  const wrapElement = document.getElementById('fruit');

  // var item1 = data[Math.floor(Math.random()*data.length)];
  // var item2 = data[Math.floor(Math.random()*data.length)];
  // var item3 = data[Math.floor(Math.random()*data.length)];

  // const mix = [
  //   item1.name, item2.name, item3.name

  // ]
 
  console.log(data);  

  var selectElement = document.getElementById('mySelect');

  data.map(item => mySelect.appendChild(new Option(item.name)).cloneNode(true));









  // for ( var a  in mix){
  //   console.log(a);
  //   let checkbox = document.createElement('input')
  //   let label = document.createElement('label')
  //   let line = document.createElement('br')
  //   label.appendChild(document.createTextNode(mix[a]))
  //   checkbox.type = 'radio';
  //   checkbox.name = "myradio";
  //   wrapElement.appendChild(checkbox);
  //   wrapElement.appendChild(label)
  //   wrapElement.appendChild(line);  
    
  // }


  











    
}




getBusinessData();


// src="https://cdn.jsdelivr.net/gh/habibmhamadi/multi-select-tag/dist/js/multi-select-tag.js";
// new MultiSelectTag('mySelect');  