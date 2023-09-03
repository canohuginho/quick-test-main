const drawContainer = (containerSize, childSize, numberOfChildren) => {
    const sqrtChildren = parseInt(Math.sqrt(numberOfChildren));
    let startDate = null, endDate = null;

    const divMainSquare = document.getElementById("mainSquare");
    let table = document.createElement('table');
    table.id = "table";
    divMainSquare.appendChild(table);

    if ((sqrtChildren * sqrtChildren) !== numberOfChildren) {
        alert(`${sqrtChildren * sqrtChildren} children rendered in the container`);
    }

    for (let i = 0; i < sqrtChildren; i++) {
        let row = document.createElement('tr');
        row.id = `row${i + 1}`;
        row.width = containerSize;
        row.height = childSize;
        table.appendChild(row);

        for (let j = 0; j < sqrtChildren; j++) {
            let column = document.createElement('td');
            column.id = `column${j + 1}`;
            column.width = childSize;
            column.height = childSize;
            column.style.backgroundColor = getRandomColor();
            column.addEventListener("mouseover", (event) => {
                column.style.backgroundColor = getRandomColor();
            });
            column.addEventListener("mouseenter", (event) => {
                startDate = new Date();
                endDate = null;
            });
            column.addEventListener("mouseleave", (event) => {
                endDate = new Date();
                if ((endDate - startDate) >= 2000) {
                    column.parentNode.removeChild(column);
                    startDate = null;
                    endDate = null;
                }
            });
            row.appendChild(column);
        }
    }
};

const getRandomColor = () => {
    const symbols = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    return color;
}

drawContainer(200, 50, 17);
