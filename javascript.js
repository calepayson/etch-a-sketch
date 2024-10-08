'use strict';

const MAX_GRID_SIZE = 100;
const STARTING_GRID_SIZE = 16;

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
 * Prompts the user for a new grid size, handles the inputted value and either 
 * alerts with an error or sets the grid to the desired size.
 */
let getNewSize = () => {
    let newSize = prompt("Please enter a new size", "16");
    let parsedSize = parseInt(newSize);

    if (Number.isNaN(parsedSize)) {
        alert(`ERROR: ${newSize} is not a positive integer`);
    } else if (parsedSize > MAX_GRID_SIZE) {
        alert(`ERROR: ${parsedSize} is greater than ${MAX_GRID_SIZE}.`);
    } else {
        createGrid(parsedSize);
    }
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
    createGrid(STARTING_GRID_SIZE);
    addAllListeners();
}

// Run the app.
main();
