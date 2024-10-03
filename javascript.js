'use strict';

// Grid dimensions
const GRID_HEIGHT = 16;
const GRID_WIDTH = 16;

/**
 * Creates a grid of cells inside the container element.
 * @param {number} height - Number of rows in the grid.
 * @param {number} width - Number of columns in the grid.
 */
let createGrid = (height, width) => {
    const container = document.querySelector(".container");
    if (!container) {
        console.error('Container element not found.');
        return;
    }

    container.innerHTML = '';

    // Create rows and cells
    for (let i = 0; i < height; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < width; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

let addCellColorListener = () => {
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'darkslategray';
        });
    });
}

let addAllListeners = () => {
    addCellColorListener();
}


let main = () => {
    createGrid(height, width);
    addAllListeners();
}

main();
