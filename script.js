const container = document.querySelector('.container');

  function makeGrid(size) {
    container.innerHTML = ''; // clear old grid
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
      const divBox = document.createElement('div');
      divBox.className = 'content';
      divBox.innerHTML ="1";
      divBox.style.width = `${squareSize}px`;
      divBox.style.height = `${squareSize}px`;
      container.appendChild(divBox);
    }
  }

  function clickButton() {
    let x = parseInt(prompt('Enter grid size (max 100):'), 10);
    if (isNaN(x) || x < 1) return;
    if (x > 100) x = 100;
    makeGrid(x);
  }

    //initial grid
    makeGrid(16);