//Variables
const container = document.querySelector('#container');
const refresh = document.querySelector('#btn');
const choose = document.querySelector('#chooze');
refresh.addEventListener('click', (refreshGrid));
let div; 
makeGridDiv(16)
//Creates 256 individual divs for 16x16 etch sketch grid
function makeGridDiv(rowCol) {
    for (i = 0; i < rowCol * rowCol; i++) {
        divs = document.createElement('divs');
        divs.setAttribute('style','width: 30px; height: 30px; background: orange');    
        divs.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'white';
        });
        container.appendChild(divs)
}}

//Button that refreshes grid when clicked
function refreshGrid(){
    document
    .querySelectorAll('divs')
    .forEach((e) => e.parentNode.removeChild(e));
    rowCol = prompt('How many squares would you like to use?')
    for (i = 0; i < rowCol * rowCol; i++) {
        if(rowCol <= 100) {
         div = document.createElement('div');
         div.setAttribute('style','width: 30px; height: 30px; background: orange');    
         div.addEventListener('mouseover', function(e) {
         e.target.style.backgroundColor = 'white';
     })}else {
         alert('Please choose a number less than (or equal to) 100');
         break;
     }
     container.appendChild(div)
    }}