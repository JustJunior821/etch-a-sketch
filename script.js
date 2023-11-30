
let defaultSquares = 16;
let container = document.querySelector('#container');
let reset = document.querySelector(`#reset`);


function createGrid(numSquares) {
    let squareDimension = (750 / numSquares)-2;
    for (let i = 0; i < numSquares; i++)
    {
        for (let j = 0; j < numSquares; j++)
        {
            let square = document.createElement('div');
            square.classList.toggle("square");
            square.style.width = `${squareDimension}px`;
            square.style.height = `${squareDimension}px`;
            container.appendChild(square);

        }
    }
    let squareList = document.querySelectorAll(`.square`);
    colorSquares(squareList);
}

function colorSquares(list) {
    for (let i = 0, len = list.length; i < len; i++)
    {
        list[i].addEventListener("mouseover", () => {
            list[i].style.backgroundColor = "red";
        })
    }
}

function destroyGrid(list) {
    for (let i = 0, len = list.length; i < len; i++)
    {
        container.removeChild(list[i]);             
    }
}

reset.addEventListener("click", () => {
    let numSquares = prompt("Please enter a number of squares between 1 and 100 for your sketchpad!");
    if (numSquares < 1 || numSquares > 100)
        console.log("Error! Please enter a valid number of squares!");
    else
    {
        let squareList = document.querySelectorAll(`.square`);
        destroyGrid(squareList);
        createGrid(numSquares);
    }
})

createGrid(defaultSquares);

