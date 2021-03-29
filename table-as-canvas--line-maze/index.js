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
      const square = document.createElement("td");
      square.style.width = `${squareWidth}px`;
      square.style.height = `${squareWidth}px`;

      // border rules
      const outcome = Math.random();
      if (outcome < 0.35) {
        square.style.borderTop = "1px solid black";
      } else if (outcome >= 0.35 && outcome < 0.75) {
        square.style.borderRight = "1px solid black";
      } else if (outcome >= 0.75 && outcome < 0.85) {
        square.style.borderBottom = "1px solid black";
      } else {
        square.style.borderLeft = "1px solid black";
      }

      row.appendChild(square);
    }
    $tableBody.appendChild(row);
  }
});
