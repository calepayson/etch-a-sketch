const height = 16;
const width = 16;

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

createGrid(height, width);
