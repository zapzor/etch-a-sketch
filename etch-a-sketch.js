// Variables and buttons
const container = document.querySelector('.grid')
const refresh = document.querySelector('.refresh-button')
refresh.addEventListener('click', (refreshGrid))
makeGridDiv(16)

// Creates 256 individual divs for 16x16 etch-a-sketch grid
function makeGridDiv(rowCol) {
  container.setAttribute('style',
  'grid-template-columns: repeat(' + rowCol + ', auto',
  'grid-template-rows: repeat(' + rowCol + ', auto')

  for (i = 0; i < rowCol * rowCol; i++) {
    divs = document.createElement('div')
    divs.setAttribute('style',
    'background: orange')
    container.appendChild(divs)

    // Allows grid divs to change color on mouse passover
    divs.addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = 'black'
    })
}}

// Button that refreshes grid when clicked
function refreshGrid(){

    rowCol = prompt('How many squares would you like to use?')
    if (rowCol <= 100)
      container.setAttribute('style',
      'grid-template-columns: repeat(' + rowCol + ', auto',
      'grid-template-rows: repeat(' + rowCol + ', auto')
    else {
      alert('Please choose a number that is less than 100')
    }
}
