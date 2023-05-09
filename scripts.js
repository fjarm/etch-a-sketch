function generateSquares()
{
    const grid = document.querySelector(".grid");

    for (i = 0; i < 16; i++)
    {
        let newSquare = document.createElement("div");
        newSquare.classList.add('square');
        grid.appendChild(newSquare);
        newSquare.addEventListener("mouseenter", () => { squareHover(newSquare); });
    }
}

generateSquares()

function squareHover(square)
{
    square.style.background = "pink";
}

function startButton()
{
    let squareAmount = prompt("How many squares would you like in your canvas? (Max 100)")
}