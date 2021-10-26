const body = document.querySelector('body');

const container = document.createElement('div');
container.className = 'container';
body.appendChild(container);

for(let i = 0;i < 16*16; i++ ){
    const grid = document.createElement('div');
    grid.className = 'grid';
    container.appendChild(grid);
};
console.log(container.childElementCount);



