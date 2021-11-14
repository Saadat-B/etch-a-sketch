const body = document.querySelector("body");
const clearBtn = document.querySelector("#clear");
const megac = document.querySelector(".megac");
const container = document.createElement("div");
const colorPicker = document.querySelector("#color");

container.className = "container";
megac.appendChild(container);
const grids = container.childNodes;
let numOfGrids;
let grid;
let color = "black";

function createGrid() {
  // console.log(container)
  let numOfChildren = container.childElementCount;
  if (numOfChildren > 0) {
    for (let j = 0; j < numOfChildren; j++) {
      container.removeChild(container.lastChild);
    }
  }

  numOfGrids = prompt();
  for (let i = 0; i < numOfGrids * numOfGrids; i++) {
    grid = document.createElement("div");
    grid.className = "grid";
    container.appendChild(grid);
  }
  container.style.gridTemplateColumns = `repeat(${numOfGrids},0fr)`;
  container.style.gridTemplateRows = `repeat(${numOfGrids},0fr)`;
  grids.forEach((grid) => grid.addEventListener("mouseenter", fill));
  let gridHeight = 400 / numOfGrids;
  let gridWidth = 400 / numOfGrids;
  grids.forEach((grid) => {
    grid.style.height = `${gridHeight}px`;
    // grid.style.height = `100px`;
    grid.style.width = `${gridWidth}px`;
    // grid.style.width = `100px`;
  });
}

function fill() {
  this.classList.add("fill-in");
}
function clear() {
  grids.forEach((grid) => grid.classList.remove("fill-in"));
  createGrid();
}

function colorChange(e) {
  color = e.target.value;
  console.log(color);
  document.documentElement.style.setProperty("--bg-color", color);
}

createGrid();

clearBtn.addEventListener("click", clear);

colorPicker.addEventListener("change", colorChange);
