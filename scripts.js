function generateSquares(squareAmount)
{
    const grid = document.querySelector(".grid");

    for (i = 0; i < squareAmount; i++)
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
    while (squareAmount > 100 || squareAmount < 1)
    {
        squareAmount = prompt("Sorry, please choose a number between 1 and 100.")
    }
    generateSquares(squareAmount)
}