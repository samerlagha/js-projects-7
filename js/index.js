//get all elements 
const btnEl=document.querySelector('.btn');
let divEl=document.querySelector('.mydiv');

const setBg = () => {
   const randomColor = Math.floor(Math.random()*16777215).toString(16);
   divEl.style.backgroundColor = "#" + randomColor;
 }

btnEl.addEventListener('click',setBg)


