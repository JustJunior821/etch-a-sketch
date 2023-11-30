
let defaultSquares = 16;
let container = document.querySelector('#container');
function createGrid(numSquares) {
    let squareDimension = (750 / numSquares)-2;
    console.log(squareDimension);
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
}

function colorSquares(list) {
    for (let i = 0, len = list.length; i < len; i++)
    {
        list[i].addEventListener("mouseover", () => {
            list[i].style.backgroundColor = "red";
        })
    }
}


createGrid(defaultSquares);
let squareList = document.querySelectorAll(`.square`);
colorSquares(squareList);
