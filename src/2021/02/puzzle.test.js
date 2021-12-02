const { puzzle } = require('./puzzle');
const fs = require("fs");
const path = require("path");
const { exit } = require("process");

try {
  const INPUT_SMALL = fs.readFileSync(
    path.resolve(__dirname, "./input_small"),
    "utf8"
  );

  it("solves part_1", () => {
    expect(puzzle.part_1(INPUT_SMALL)).toEqual(150);
  });

  it("solves part_2", () => {
    expect(puzzle.part_2(INPUT_SMALL)).toEqual(900);
  });

} catch (e) {
  console.log("Error:", e.stack);
  exit;
}






