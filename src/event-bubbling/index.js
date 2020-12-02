const testGrid = document.querySelector('.test-grid');

testGrid.addEventListener('click', (event) => {
    let cellTestGrid = event.target;

    if (!cellTestGrid) 
        throw new Error('element not found');

    if (cellTestGrid.classList.contains('test-grid--cell') === true) {
        alert(cellTestGrid.innerText);
    }
}, true);