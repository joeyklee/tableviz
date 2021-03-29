window.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  const $app = document.querySelector("#app");

  const tableWidth = 400;
  const tableHeight = 400;

  const squareWidth = 20;
  const columns = tableWidth / squareWidth;
  const rows = tableHeight / squareWidth;

  const $tableBody = document.querySelector("#tableBody");

  for (let x = 0; x < rows; x += 1) {
    const row = document.createElement("tr");
    for (let y = 0; y < columns; y += 1) {
      const square = document.createElement("td");
      square.style.width = `${squareWidth}px`;
      square.style.height = `${squareWidth}px`;
      square.style.font = `400 ${squareWidth}px/${squareWidth}px sans-serif`;

      // border rules
      const outcome = Math.random();
      if (outcome > 0.65) {
        square.textContent = "╱";
      } else {
        square.textContent = "╲";
      }

      row.appendChild(square);
    }
    $tableBody.appendChild(row);
  }
});
