function generateSquares(axisAmount)
{
    const grid = document.querySelector(".grid");

    for (i = 0; i < (axisAmount * axisAmount); i++)
    {
        let newSquare = document.createElement("div");
        newSquare.classList.add('square');
        grid.appendChild(newSquare);
        newSquare.addEventListener("mouseenter", () => { squareHover(newSquare); });
    }
}

function squareHover(square)
{
    square.style.background = "black";
}

function startButton()
{
    let axisAmount = prompt("How many squares would you like per side? (Max 100)")
    while (axisAmount > 100 || axisAmount < 1)
    {
        axisAmount = prompt("Sorry, please choose a number between 1 and 100.")
    }

    updateCSSVariable(axisAmount);
    generateSquares(axisAmount);
}

function updateCSSVariable(axisAmount)
{
    let root = document.documentElement;

    root.style.setProperty("--axisAmount", axisAmount);
}