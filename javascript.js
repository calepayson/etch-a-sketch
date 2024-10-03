'use strict';

/**
 * Creates a grid of cells inside the container element.
 * @param {number} gridSize - Number of columns and rows in the grid.
 */
let createGrid = (gridSize) => {
    const container = document.querySelector(".container");
    if (!container) {
        console.error('Container element not found.');
        return;
    }

    container.innerHTML = '';

    // Create rows and cells
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
};

/**
 * Adds event listeners to each cell that change the color upon mouse-over.
 */
let addCellHoverListener = () => {
    const container = document.querySelector('.container');
    if (!container) {
        console.error('Container element not found.');
        return;
    }

    // Use event delegation for better performance.
    container.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('cell')) {
            event.target.classList.add('active');
        }
    });
}

/**
 * Initialize all event listeners and add them to their respective elements.
 */
let addAllListeners = () => {
    addCellHoverListener();
}

/**
 * Initializes the grid and event listeners.
 */
let main = () => {
    let gridSize = 16;
    createGrid(gridSize);
    addAllListeners();
}

// Run the app.
main();
