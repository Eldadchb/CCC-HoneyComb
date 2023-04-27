const fs = require("fs");

function countHexagonalCells(input) {
  let hexagonalCellCount = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "O") {
      hexagonalCellCount++;
    }
  }

  return hexagonalCellCount;
}
const inputFileName = "level1_5.in";
const outputFileName = "level1_5.out";

fs.readFile(inputFileName, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  const cellCount = countHexagonalCells(data);

  fs.writeFile(outputFileName, cellCount.toString(), (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`Cell count has been written to ${outputFileName}`);
  });
});
