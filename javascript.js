'use strict';

// Grid dimensions
const GRID_HEIGHT = 16;
const GRID_WIDTH = 16;

let createGrid = (height, width) => {
    const container = document.querySelector(".container");

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
