//here we select the div from our HTML file
const container = document.querySelector('.container');

let color = 'black';

//creating our grid takes in a size and creates SIZE amount of divs in the container class we called 
function createGrid(size) {
    const gridSize = size * size;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < gridSize; i++) {
        //creates divs
        const div = document.createElement('div');
        //adds them to css class called 'cell'
        div.classList.add('cell');
        //add an eventListenter that listens for a mouse enter on event it changes the background color to black 
        div.addEventListener('mouseenter', function( event ) {
            event.target.style.backgroundColor = color;
        })
        container.appendChild(div);
    }
};

createGrid(16);

//function to prompt the user to change grid size and go through node list and remove elements
function changeGridSize() {
    const message = Number(prompt('Enter a number for your grid!'));
    if (message > 100) {
        return alert('Please enter number less than 100!');
    } else if (message !== null) {
        const nodeList = document.querySelectorAll('.cell');
        nodeList.forEach(element => element.remove());
        const size = message;
        createGrid(size);
    };
};
//function for color change runs through HTML onclick
function changeColor(newColor) {
    color = newColor; 
};

function getColor() {
    const colorPicker = document.getElementById('color_picker');
    const color = colorPicker.value;
    changeColor(color);
};
