
const url2 = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const fruitdata = getBusinessData();




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

  // console.log(data);

  var selectElement = document.getElementById('mySelect');

  data.map(item => mySelect1.appendChild(new Option(item.name, item.name)).cloneNode(true));

  data.map(item => mySelect2.appendChild(new Option(item.name, item.name)).cloneNode(true));

  data.map(item => mySelect3.appendChild(new Option(item.name, item.name)).cloneNode(true));

  


}


getBusinessData();




function getOption(id, text) {
  selectElement = document.querySelector(id);
  output = selectElement.options[selectElement.selectedIndex].value;
  document.querySelector(text).textContent = output;
  console.log(output);
  
}

function search(nameKey, myArray){
  for (let i=0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
          return myArray[i];
      }
  }
}

function add(a, b, c){
  const total = a + b + c;
  return total;
 }

function surveyResult (){
  const firstSelection = document.querySelector('.output1').innerText;
  const secondSelection = document.querySelector('.output2').innerText;
  const thirdSelection = document.querySelector('.output3').innerText;
  // const timestamp = Date.now();

  console.log(firstSelection)
  console.log(secondSelection)
  console.log(thirdSelection)
  async function findArray() {
    const response = await fetch(url2);
    const data = await response.json();
    // console.log(data); 
    const resultObject1 = search(firstSelection, data);
    const resultObject2 = search(secondSelection, data);
    const resultObject3 = search(thirdSelection, data);

  const totalCalories = add(resultObject1.nutritions.calories,resultObject2.nutritions.calories,resultObject3.nutritions.calories)
  const totalCarbs = add(resultObject1.nutritions.carbohydrates,resultObject2.nutritions.carbohydrates,resultObject3.nutritions.carbohydrates)
  const totalFat = add (resultObject1.nutritions.fat,resultObject2.nutritions.fat,resultObject3.nutritions.fat)
  const totalProtein = add(resultObject1.nutritions.protein,resultObject2.nutritions.protein,resultObject3.nutritions.protein)
  const totalSugar = add(resultObject1.nutritions.sugar,resultObject2.nutritions.sugar,resultObject3.nutritions.sugar)
  

    console.log(resultObject1);
    console.log(resultObject2);
    console.log(resultObject3);


    console.log(totalCalories);
    console.log(totalCarbs);
    console.log(Math.round(totalFat * 100) / 100);
    console.log(Math.round(totalProtein * 100 ) / 100);
    console.log(Math.round(totalSugar * 100 ) / 100 );

    function displayOrder (){
      let section = document.getElementById('orderPlaced');
      let name = document.createElement('h2');
      let email = document.createElement('h2');
      let phone = document.createElement('h2');
      let fruits = document.createElement('h2');
      let instructions = document.createElement('h2');
      let date = document.createElement('h2');
      let calories = document.createElement('h2');
      let carbs = document.createElement('h2');
      let fat = document.createElement('h2');
      let protein = document.createElement('h2');
      let sugar = document.createElement('h2');

      name.textContent = `Name: ${document.getElementById('userName').value}`;
      email.textContent = `Email: ${document.getElementById('email').value}`;
      phone.textContent = `Phone: ${document.getElementById('phone').value}`;
      fruits.textContent = `Selected Fruits: ${firstSelection}, ${secondSelection} ,and${thirdSelection}`;
      instructions.textContent = `Additional Instructions: ${document.getElementById('instructions').value}`;

      date.textContent = `Date of the order: ${document.getElementById('userName')}`;

      calories.textContent = `Total Calories: ${totalCalories}`;
      carbs.textContent = `Total Carbohydrates: ${totalCarbs}`;
      fat.textContent = `Total Fat: ${Math.round(totalFat * 100) / 100}`;
      protein.textContent = `Total Protein: ${Math.round(totalProtein * 100 ) / 100}`;
      sugar.textContent  = `Total Sugar: ${Math.round(totalSugar * 100) / 100}`;


      section.appendChild(name);
      section.appendChild(email);
      section.appendChild(phone);
      section.appendChild(fruits);
      section.appendChild(instructions);
      section.appendChild(date);
      section.appendChild(calories);
      section.appendChild(carbs);
      section.appendChild(fat);
      section.appendChild(protein);
      section.appendChild(sugar);












    }
    displayOrder()
    // console.log(timestamp);
  }
  
  findArray();
}


