// const url2 = "https://davidjem.github.io/wdd230/chamber/data/data.json";

const url2 = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getBusinessData() {
  const response = await fetch(url2);
  const data = await response.json();
  const wrapElement = document.getElementById('fruit');

  var item1 = data[Math.floor(Math.random()*data.length)];
  var item2 = data[Math.floor(Math.random()*data.length)];
  var item3 = data[Math.floor(Math.random()*data.length)];

  const mix = [
    item1.name, item2.name, item3.name

  ]
 
  console.log(mix);  
//   for (const element in mix) {
//     console.log(element)
// }

  for ( var a  in mix){
    console.log(a);
    let checkbox = document.createElement('input')
    let label = document.createElement('label')
    label.appendChild(document.createTextNode(mix[a]))
    checkbox.type = 'radio';
    checkbox.name = "myradio";
    wrapElement.appendChild(checkbox);
    wrapElement.appendChild(label)  
  }


  
  // for (each in mix) {

  //   var choiceSelection = document.createElement('input');
  //   choiceSelection.setAttribute('type', 'radio');
  //   choiceSelection.setAttribute('name', 'choice');

  //   wrapElement.appendChild(choiceSelection);
  //   document.wrapElement.appendChild(wrapElement);

  // }










    
}




getBusinessData();