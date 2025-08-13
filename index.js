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
    cell.style.backgroundColor = "purple";
  });
});

const containerButton = document.querySelector("#changeContainer");
const popupOption = document.querySelector("#popupOption");
containerButton.addEventListener("click", () => {
  popupOption.classList.toggle("popup-hidden");
});

const rgbRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

option1.addEventListener("click", () => {
  container.innerHTML = "";
  //   container.style.gridTemplateColumns = "repeat(16, 1fr)";
  //   container.style.gridTemplateRows = "repeat(16, 1fr)";
  for (let i = 0; i < 256; i++) {
    const cellClone = cellDiv.cloneNode(true);

    container.appendChild(cellClone);
  }
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = rgbRandomColor();
    });
  });
  popupOption.classList.toggle("popup-hidden");
});

option2.addEventListener("click", () => {
  container.innerHTML = "";

  for (let i = 0; i < 1024; i++) {
    const cellClone = cellDiv.cloneNode(true);
    cellClone.style.flex = "1 1 10px";
    container.appendChild(cellClone);
  }
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = rgbRandomColor();
    });
  });
  popupOption.classList.toggle("popup-hidden");
});

option3.addEventListener("click", () => {
  container.innerHTML = "";

  for (let i = 0; i < 4096; i++) {
    const cellClone = cellDiv.cloneNode(true);
    cellClone.style.flex = "1 1 5px";
    container.appendChild(cellClone);
  }
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = rgbRandomColor();
    });
  });
  popupOption.classList.toggle("popup-hidden");
});

option4.addEventListener("click", () => {
  container.innerHTML = "";

  for (let i = 0; i < 10000; i++) {
    const cellClone = cellDiv.cloneNode(true);
    cellClone.style.flex = "1 1 3.2px";
    container.appendChild(cellClone);
  }
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = rgbRandomColor();
    });
  });
  popupOption.classList.toggle("popup-hidden");
});
