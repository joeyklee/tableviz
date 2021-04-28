window.addEventListener("DOMContentLoaded", () => {
  console.log("hello");

  const tableWidth = 400;
  const tableHeight = 400;

  const squareWidth = 20;
  const columns = tableWidth / squareWidth;
  const rows = tableHeight / squareWidth;

  const $tableBody = document.querySelector("#tableBody");

  /**
   * The rules:
   * for each row, there's 1 selected star type & 
   * under special circumstances include a planet or moon
   * one of the rows will contain the spaceship
   */
  // first we define which row the spaceship will go
  const spaceshipRow = Math.floor(Math.random()*rows);
  const spaceshipColumn = Math.floor(Math.random()*columns);

  const stars = ['✺', '✶', '❋', '✦', '✧', '✴︎'];
  const planets = ['🪐', '🌑', '🌘', '🛰'];
  const spaceShip = '🚀';
  for (let x = 0; x < rows; x += 1) {
    const row = document.createElement("tr");
    const starOrPlanetColumn = Math.floor(Math.random() * columns);
    for (let y = 0; y < columns; y += 1) {
      const square = document.createElement("td");
      square.style.width = `${squareWidth}px`;
      square.style.height = `${squareWidth}px`;
      
      square.style.color = `#FFFFFF`;
      square.style.backgroundColor = `#131313`;

      // add the spaceship if this is the row 
      if(x === spaceshipRow && y === spaceshipColumn){
        square.style.fontSize = `16px`;
        square.textContent = spaceShip;
      } else if(y === starOrPlanetColumn) {
        square.style.fontSize = `${Math.random()*20}px`;
        const probabilityGreaterThan95 = Math.floor(Math.random() * 100) > 95;

        if(probabilityGreaterThan95){
          square.textContent = planets[Math.floor(Math.random() * planets.length)];
        } else {
          square.textContent = stars[Math.floor(Math.random() * stars.length)];
        }
      }

      row.appendChild(square);
    }
    $tableBody.appendChild(row);
  }
});
