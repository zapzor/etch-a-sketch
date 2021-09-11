// Variables and buttons
const grid = document.querySelector('.grid')
const refresh = document.querySelector('.refresh-button')
refresh.addEventListener('click', (refreshGrid))
makeGridDivs(16)

// Creates individual divs for 16x16 etch-a-sketch grid
function makeGridDivs(rowCol) {
  grid.style.gridTemplateColumns = `repeat(${rowCol}, auto)`

  for (i = 0; i < rowCol * rowCol; i++) {
   const gridDivs = document.createElement('div')
    gridDivs.setAttribute('style',
    'background: orange')
    grid.appendChild(gridDivs)

    // Allows grid divs to change color on mouse passover
    gridDivs.addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = 'black'
    })
}}

// Button that clears grid and asks for user input when clicked
function refreshGrid(){
  rowCol = prompt('How many squares would you like to use?')

  if (rowCol <= 100) {
    grid.innerHTML = ""
    makeGridDivs(rowCol)
  } else {
    alert('Please choose a number that is less than 100')
  }
}
