const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

let time =new Date();
console.log(time);
let days = time.getDate();


const data = 
    ['Monday', 
    'Theusday', 
    'Wendesday', 
    'Thursday', 
    'Friday', 
    'Saturday', 
    'Sunday'];
console.log(data[days - 1]);


const months = 
    ['January',
     'February',
     'March',
     'April', 
     'May', 
     'June', 
     'July', 
     'August', 
     'September', 
     'Oktober', 
     'November', 
     'December'];


let oy = time.getMonth();
month.textContent = months[oy];
console.log(oy);

let years = time.getFullYear();
year.textContent = years;

if(days < 10){
    day.textContent = '0' + days;
}else{
    day.textContent = days;
}