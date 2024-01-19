const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

let time =new Date();
console.log(time);
let days = time.getDay();
console.log(days);

const data = ['Monday', 'Theusday', 'Wendesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(data[0]);