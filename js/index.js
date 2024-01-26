const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const block = document.querySelector('.block');


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
function getTimeOne (){
    const now = new Date()

    const hours = now.getHours() < 10 ? '0' +  (now.getHours() ) : now.getHours();
    const minutes = now.getMinutes() < 10 ? '0' +  (now.getMinutes() ) : now.getMinutes(); 
    const seconds = now.getSeconds() < 10 ? '0' +  (now.getSeconds() ) : now.getSeconds();

    hour.textContent = hours
    minute.textContent = minutes
    second.textContent = seconds
    return `${hour}:${minute}`
}

setInterval(() => {
    getTimeOne()
}, 1000)


const user = [
    {img: './images/mario.png', name: 'Mario', github: 'https://github.com/Jumanazar04/mario.git', netlify:'https://mario-jd.netlify.app/'},
    {img: './images/calculator.png', name: 'Calculator', github: 'https://github.com/Jumanazar04/Calculator.git', netlify:'https://simplecalculator119.netlify.app/'},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
]

user.forEach((users)=> {
    
    return `
    <div class="card">
        <img src="${users.img}" alt="mario">
        <p class="name">${users.name}</p>
        <div class="link">
            <a target="_blank" href="https://mario-jd.netlify.app/">GAME</a>
            <a target="_blank" href="https://github.com/Jumanazar04/mario.git">GIT HUB</a>
        </div>
    </div>
    `
})