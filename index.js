const body = document.querySelector('body');
const clearBtn = document.querySelector('#clear');

const container = document.createElement('div');
container.className = 'container';
body.appendChild(container);
const grids = container.childNodes;
let numOfGrids;
let grid;



for(let i = 0;i < 16*16; i++ ){
    grid = document.createElement('div');
    grid.className = 'grid';
    container.appendChild(grid);
};


function fill(){
    this.classList.add('fill-in');
}
function clear(){
    grids.forEach(grid => grid.classList.remove('fill-in'))
}

grids.forEach(grid => grid.addEventListener('mouseenter',fill));
clearBtn.addEventListener('click', clear);





