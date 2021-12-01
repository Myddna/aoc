const { puzzle } = require('./puzzle')
const { puzzlev2 } = require("./puzzlev2");
const fs = require("fs");
const path = require("path");
const { exit } = require('process');

try {
  const INPUT = fs.readFileSync(path.resolve(__dirname, "./input"), "utf8");
  const INPUT_SMALL = fs.readFileSync(
    path.resolve(__dirname, "./input_small"),
    "utf8"
  );

  it("solves part_1", () => {
    expect(puzzle.part_1(INPUT_SMALL)).toEqual(7);
    expect(puzzle.part_1(INPUT)).toEqual(1448);
  });

    it("solves part_1 (second version)", () => {
      expect(puzzlev2.part_1(INPUT_SMALL)).toEqual(7);
      expect(puzzlev2.part_1(INPUT)).toEqual(1448);
    });

  it("solves part_2", () => {
    expect(puzzle.part_2(INPUT_SMALL)).toEqual(5)
    expect(puzzle.part_2(INPUT)).toEqual(1471);
  });

  it("solves part_2 (second version)", () => {
    expect(puzzlev2.part_2(INPUT_SMALL)).toEqual(5);
    expect(puzzlev2.part_2(INPUT)).toEqual(1471);
  });
} catch (e) {
  console.log("Error:", e.stack);
  exit;
}


