// see: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
const getCanvasImageData = () => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "./world-400x400.png";
    const canvas = document.getElementById("world");
    const ctx = canvas.getContext("2d");
    img.onload = function () {
      // Flip the image around because of the way that
      // the image data comes back
      // https://stackoverflow.com/questions/23346166/rotate-image-by-90-degrees-on-html5-canvas
      ctx.translate(canvas.width / 2, canvas.height / 2);

      ctx.rotate(Math.PI / 2);
      ctx.scale(1, -1);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);

      // ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      canvas.style.display = "none";
      resolve(imageData);
    };
  });
};

window.addEventListener("DOMContentLoaded", async () => {
  console.log("hello");
  const $app = document.querySelector("#app");

  const tableWidth = 400;
  const tableHeight = 400;

  const squareWidth = 4;
  const columns = tableWidth / squareWidth;
  const rows = tableHeight / squareWidth;

  const $tableBody = document.querySelector("#tableBody");

  const imageData = await getCanvasImageData();

  for (let x = 0; x < rows; x += 1) {
    const row = document.createElement("tr");

    for (let y = 0; y < columns; y += 1) {
      const imageDataIdx = (x + y * tableWidth) * 4 * squareWidth;
      // const isPinkOrYellow = Math.random() > 0.7 ? "#FFA3D7" : "#FFD700";
      const square = document.createElement("td");
      square.style.width = `${squareWidth}px`;
      square.style.height = `${squareWidth}px`;

      const r = imageData.data[imageDataIdx];
      const g = imageData.data[imageDataIdx + 1];
      const b = imageData.data[imageDataIdx + 2];
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      row.appendChild(square);
    }
    $tableBody.appendChild(row);
  }
});
