const { puzzle } = require('./puzzle')

const INPUT = [
    '.#.',
    '..#',
    '###',
].join('\n')

it ('solves part_1', () => {
    expect(puzzle.part_1(INPUT)).toEqual(112)
})

it ('solves part_2', () => {
    expect(puzzle.part_2(INPUT)).toEqual(848)
})
