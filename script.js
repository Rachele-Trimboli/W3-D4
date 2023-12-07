const createCells = function (number) {
  for (let i = 0; i < 76; i++) {
    const cells = document.createElement("div");
    cells.classList.add("celle");
    const cellsValue = document.createElement("h2");
    cellsValue.innerText = i + 1;
    cells.appendChild(cellsValue);
    const numberSection = document.getElementById("numberSection");
    numberSection.appendChild(cells);
  }
};
createCells();

const extracted = document.getElementById("extracted");
const extraction = document.getElementById("extraction");
extraction.addEventListener("click", function () {
  const extractedNumber = Math.floor(Math.random() * 77) + 1;
  extracted.innerText = extractedNumber;
  const celle = document.getElementsByClassName("celle");
  for (let i = 0; i < celle.length; i++)
    if (parseInt(celle[i].innerText) === extractedNumber) {
      celle[i].classList.add("extractedCell");
    }
});
