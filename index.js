const cellDiv = document.createElement("div");
cellDiv.classList.add("cell");
const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const cellClone = cellDiv.cloneNode(true);
  container.appendChild(cellClone);
}
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "black";
  });
});
