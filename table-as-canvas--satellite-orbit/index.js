window.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  const $app = document.querySelector("#app");

  const tableWidth = 400;
  const tableHeight = 400;

  const squareWidth = 10;
  const columns = tableWidth / squareWidth;
  const rows = tableHeight / squareWidth;

  const $tableBody = document.querySelector("#tableBody");

  for (let x = 0; x < rows; x += 1) {
    const row = document.createElement("tr");
    for (let y = 0; y < columns; y += 1) {
      const isPinkOrYellow = Math.random() > 0.7 ? "#FFA3D7" : "#FFD700";
      const square = document.createElement("td");
      square.style.width = `${squareWidth}px`;
      square.style.height = `${squareWidth}px`;
      square.style.backgroundColor = isPinkOrYellow;
      row.appendChild(square);
    }
    $tableBody.appendChild(row);
  }
});
