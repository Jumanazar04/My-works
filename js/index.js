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
    {img: './images/dice-game.png', name: 'Dice-game', github: 'https://github.com/Jumanazar04/dice-game.git', netlify:'https://jdeliver-dice-game.netlify.app/'},
    {img: './images/find-a-number.png', name: 'Find a number', github: 'https://github.com/Jumanazar04/find-a-number.git', netlify:'https://find-number-jd.netlify.app/'},
    {img: './images/dino-game.png', name: 'Dino Game', github: 'https://github.com/Jumanazar04/dino-game.git', netlify:'https://dino-game-jd.netlify.app/'},
    {img: './images/weather.png', name: 'Weather', github: 'https://github.com/Jumanazar04/weather.git', netlify:'https://jdeliver-weather.netlify.app/'},
    {img: './images/todo-list.png', name: 'Crud todo list', github: 'https://github.com/Jumanazar04/crud-todo-list.git', netlify:'https://jdeliver-crud-todo-list.netlify.app/'},
    {img: './images/determination.png', name: 'Distance Determination', github: 'https://github.com/Jumanazar04/Distance.git', netlify:'https://jdleiver-distance-determination.netlify.app/'},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
    // {img: '', name: '', github: '', netlify:''},
]

user.forEach((users)=> {
    const card = document.createElement('div');
    card.classList.add('card');
    block.appendChild(card);   
    
    const img = document.createElement('img');
    img.classList.add('img');
    card.appendChild(img);
    img.srcset = users.img;
    img.alt = 'image';

    const text = document.createElement('p');
    text.classList.add('text');
    card.appendChild(text);
    text.textContent = users.name;

    const link = document.createElement('div');
    link.classList.add('link');
    card.appendChild(link);


    const aLink = document.createElement('a');
    link.appendChild(aLink);
    aLink.target = '_blank';
    aLink.href = users.netlify;
    aLink.textContent = 'GAME';
    const aLinkGithub = document.createElement('a');
    link.appendChild(aLinkGithub);
    aLinkGithub.target = '_blank';
    aLinkGithub.href = users.github;
    aLinkGithub.textContent = 'GITHUB';

    // return `
    // <div class="card">
    //     <img src="${users.img}" alt="mario">
    //     <p class="name">${users.name}</p>
    //     <div class="link">
    //         <a target="_blank" href="https://mario-jd.netlify.app/">GAME</a>
    //         <a target="_blank" href="https://github.com/Jumanazar04/mario.git">GIT HUB</a>
    //     </div>
    // </div>
    // `
})