const container = document.querySelector('#container')

function makeDiv() {
    for (i = 0; i < 256; i++) {
        let div = document.createElement('div');
        div.setAttribute('style', 'color: blue; width: 25px; height: 25px; background: orange');    
        div.addEventListener('mouseenter', function(e) {
            e.target.style.backgroundColor = 'white';
        });
        container.appendChild(div)
}}
makeDiv()
