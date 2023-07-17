function GetInfo() {


fetch('https://api.openweathermap.org/data/2.5/forecast?q='+"carlsbad"+'&units=imperial'+'&appid=c90096a1e286746263656598c3e2baac')
.then(response => response.json())
.then(data => {

    //Getting the min and max values for each day
    for(i = 0; i<4; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min ).toFixed(1)+ "°";
       
    }

    for(i = 0; i<4; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max ).toFixed(2) + "°";
    }
    //------------------------------------------------------------

    //Getting Weather Icons
     for(i = 0; i<4; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    //------------------------------------------------------------
    console.log(data)


})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function DefaultScreen(){
    GetInfo();
}


//Getting and displaying the text for the upcoming days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

for(i = 0; i<5; i++){
    document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
}