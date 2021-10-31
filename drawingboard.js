const container = document.querySelector('.wrapper');



function createGrid(size) {
    let gridSize = size * size;
    let grid = document.getElementById('cont')
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i <= gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        //div.style.gridTemplateColumns = `${size}, 1fr`;
        //div.style.gridTemplateRows = `${size}, 1fr`;
       
        
        document.body.appendChild(div);
    }


}




function changeColor() {
    switch(color) {
        case 'black':

    }
}