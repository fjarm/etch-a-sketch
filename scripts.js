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
    let button = document.getElementById("mainButton")
    if (button.className === "startButton")
    {
        button.className = "resetButton";
        button.textContent = "Reset";
        start();
    }
    else
    {
        reset();
    }
}

function start()
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

function reset()
{
    let resetConfirmation = confirm("Are you sure you want to reset?")
    if (resetConfirmation === true)
    {
        document.getElementById("mainButton").className = "startButton";
        document.querySelector(".grid").replaceChildren();
        startButton();
    }
    else
    {

    }
}