function generateSquares()
{
    const grid = document.querySelector(".grid");

    let newSquare = document.createElement("div");
    newSquare.setAttribute('style', 'height: 100px; width: 100px; background: #4C3D3D;');
    newSquare.classList.add('square');

    for (i = 0; i < 16; i++)
    {
        grid.appendChild(newSquare);
    }
}

generateSquares()