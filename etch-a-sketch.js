//Variables
const container = document.querySelector('#container');
const refresh = document.querySelector('#btn');
let div; 
makeGridDiv(256)
//Creates 256 individual divs for 16x16 etch sketch grid
function makeGridDiv(rowCol) {
    for (i = 0; i < rowCol; i++) {
        div = document.createElement('div');
        div.setAttribute('style','width: 30px; height: 30px; background: orange');    
        div.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'white';
        });
        container.appendChild(div)
}}

//Button that refreshes grid when clicked
function refreshGrid(rowCol){

   rowCol = prompt('How many squares would you like to use?')
   document
   .querySelectorAll('div')
   .forEach((div) => div.parentNode.removeChild(div));
   for (i = 0; i < rowCol * rowCol; i++) {
       if(rowCol < 100) {
        div = document.createElement('div');
        div.setAttribute('style','width: 30px; height: 30px; background: orange');    
        div.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'white';
        container.appendChild(div)
    })}else {
        alert('Please choose a number less than 100');
        break;
    }
}}
refresh.addEventListener('click', (refreshGrid));

