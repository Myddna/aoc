const { puzzle } = require('./puzzle')
const { puzzlev2 } = require("./puzzlev2");
const fs = require("fs");
const path = require("path");
const { exit } = require('process');

try {
  const INPUT_SMALL = fs.readFileSync(
    path.resolve(__dirname, "./input_small"),
    "utf8"
  );

  it("solves part_1", () => {
    expect(puzzle.part_1(INPUT_SMALL)).toEqual(7);
  });

    it("solves part_1 (second version)", () => {
      expect(puzzlev2.part_1(INPUT_SMALL)).toEqual(7);
    });

  it("solves part_2", () => {
    expect(puzzle.part_2(INPUT_SMALL)).toEqual(5)
  });

  it("solves part_2 (second version)", () => {
    expect(puzzlev2.part_2(INPUT_SMALL)).toEqual(5);
  });
} catch (e) {
  console.log("Error:", e.stack);
  exit;
}


