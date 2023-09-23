const month = document.getElementById('Months').textContent;
const days = document.getElementById("Days").textContent;
const hours = document.getElementById("Hours").textContent;
const minuts = document.getElementById("Minuts").textContent;
const seconds = document.getElementById("Seconds").textContent;

seconds = 60;
hours = 24;
month = 3;
minuts = 60;
days = 100;
const timer = setInterval(updateTime, 1000);




 function Time() {
     seconds--
    if( seconds === 0){
        minuts--
    } 
     if(minuts === 0){
        hours--
    } 
     if(hours ===0){
        days--
    } 
     if(days ===0){
        month--
    } 
    if(month === 0){
        alert='HAPY NEW YEAR'
        clearInterval(timer); 
    }

}



