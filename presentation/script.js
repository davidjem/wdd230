
// Assign constants
// ----------------------------------------------------------------------------------

// const box1 = document.querySelector('.box1')
// const box2 = document.querySelector('.box2')
// const box3 = document.querySelector('.box3')

const box1 = document.querySelector('.box1')

const box2 = document.querySelector('.box2')

const box3 = document.querySelector('.box3')



// Event listener example with click me and arrow function
// click
// ----------------------------------------------------------------------------------
// box1.addEventListener('click', ()=>{
//     box1.innerHTML = ('Clicked!')
// })

box1.addEventListener('click', ()=>{
    box1.innerHTML = ('clicked! ')
})






// Event listener example with hover and function defined separately 
// mouseover
// mouseout
// ----------------------------------------------------------------------------------

// box2.addEventListener('mouseover',mouse0ver)
// box2.addEventListener('mouseout', mouse0ut)

// function mouse0ver(){
//     box2.innerHTML = ('Wohooo!')
// }
// function mouse0ut(){
//     box2.innerHTML = ('Hover me!')
// }

box2.addEventListener('mouseover', mouse0ver)
box2.addEventListener('mouseout', mouse0ut)

function mouse0ver(){
    box2.innerHTML = ('Wohoo!')
}

function mouse0ut(){
    box2.innerHTML = ('Hover me!')
}



// Example with show alert 
// alert
// ----------------------------------------------------------------------------------

// box3.addEventListener('click', () =>{
//     alert('Thanks for clicking')
// })

box3.addEventListener('click', ()=>{
    alert('Thanks for clicking!! ')
})


