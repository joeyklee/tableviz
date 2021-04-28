window.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  const $app = document.querySelector("#app");

  const tableWidth = 400;
  const tableHeight = 400;

  const squareWidth = 10;
  const columns = tableWidth / squareWidth;
  const rows = tableHeight / squareWidth;

  const $tableBody = document.querySelector("#tableBody");

  const centerRow = Math.floor(rows/2)-1;
  const centerColumn = Math.floor(columns/2)-1;

  // use polar coordinates to calculate which row and column
  // the satellite should be in orbit
  const satelliteLocations = [];
  [...new Array(10).fill(null)].forEach( (item, idx, arr) => {
    const radius = 8;
    const rowX = Math.round(centerRow + radius * Math.cos(scale(idx, 0, arr.length-1, 0, 2*Math.PI))); 
    const rowY = Math.round(centerColumn + radius * Math.sin(scale(idx, 0, arr.length-1, 0, 2*Math.PI))); 
    satelliteLocations.push(
      {
      rowX: rowX, 
      rowY: rowY }
    )
  });

  console.log(satelliteLocations)

  for (let x = 0; x < rows; x += 1) {
    const row = document.createElement("tr");
    for (let y = 0; y < columns; y += 1) {
      const square = document.createElement("td");
      square.style.width = `${squareWidth}px`;
      square.style.height = `${squareWidth}px`;
      square.style.backgroundColor = '#000000';
      

      if(x === centerRow && y === centerColumn ){
        square.style.fontSize =`${squareWidth*2}px`
        square.textContent = '🌎';
      } else {
        square.style.fontSize =`${squareWidth}px`
        satelliteLocations.forEach(item => {
          if(x === item.rowX && y === item.rowY){
              square.textContent = '🛰';
          }
        })
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