const { puzzle } = require('./puzzle')

const INPUT = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
].join("\n");

it ('solves part_1', () => expect(puzzle.part_1(INPUT)).toEqual(198))

it ('solves part_2', () => expect(puzzle.part_2(INPUT)).toEqual(230))
