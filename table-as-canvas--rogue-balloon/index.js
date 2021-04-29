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
   * for each row, there's 1 selected cloud type & 
   * under special circumstances include a bird or plane
   * one of the rows will contain the rogue balloon
   * first we define which row the rogue balloon will go
   * TODO: 
   * eventually I want to add in different altitudes that the
   * balloon will fly at. 
   * sometimes it may fly close enough to the ground that trees and flowers
   * are in view and other times there may even be buildings.
   * The altitude therefore will influence what sky or land elements are 
   * rendered to the scene.
   */
  const rogueBallonRow = Math.floor(Math.random()*rows);
  const rogueBallonColumn = Math.floor(Math.random()*columns);

  const clouds = ['☁', '☁️', '❄️'];
  const skyElements = ['🦅', '🕊', '🐝', '🛩',];
  const rogueBallon = '🎈';
  for (let x = 0; x < rows; x += 1) {
    const row = document.createElement("tr");
    const cloudOrSkyElement = Math.floor(Math.random() * columns);
    for (let y = 0; y < columns; y += 1) {
      const square = document.createElement("td");
      square.style.width = `${squareWidth}px`;
      square.style.height = `${squareWidth}px`;
      
      square.style.color = `#FFFFFF`;
      square.style.backgroundColor = `hsl(238, 100%, ${scale(x, 0, rows, 50, 100 )}%)`;

      // add the rogue ballon if this is the row 
      if(x === rogueBallonRow && y === rogueBallonColumn){
        square.style.fontSize = `10px`;
        square.textContent = rogueBallon;
      } else if(y === cloudOrSkyElement) {
        square.style.fontSize = `${Math.random()*30}px`;
        const probabilityGreaterThan95 = Math.floor(Math.random() * 100) > 95;

        if(probabilityGreaterThan95){
          square.textContent = skyElements[Math.floor(Math.random() * skyElements.length)];
        } else {
          square.textContent = clouds[Math.floor(Math.random() * clouds.length)];
        }
      }

      row.appendChild(square);
    }
    $tableBody.appendChild(row);
  }
});

// http://stackoverflow.com/questions/10756313/ddg#23202637
function scale (num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}