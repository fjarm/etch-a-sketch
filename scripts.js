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
        start(button);
    }
    else
    {
        reset(button);
    }
}

function start(button)
{
    let axisAmount = prompt("How many squares would you like per side? (Max 100)")
    if (axisAmount === null)
    {
        return
    }
    while (axisAmount > 100 || axisAmount < 1)
    {
        axisAmount = prompt("Sorry, please choose a number between 1 and 100.")
    }

    button.className = "resetButton";
    button.textContent = "Reset";
    updateCSSVariable(axisAmount);
    generateSquares(axisAmount);
}

function updateCSSVariable(axisAmount)
{
    let root = document.documentElement;

    root.style.setProperty("--axisAmount", axisAmount);
}

function reset(button)
{
    let resetConfirmation = confirm("Are you sure you want to reset?")
    if (resetConfirmation === true)
    {
        button.className = "startButton";
        button.textContent = "Click Me!";
        document.querySelector(".grid").replaceChildren();
    }
}