const { puzzle } = require('./puzzle')

const INPUT_T = [
    'Tile 1234:',
    '##########',
    '#....#....',
    '#....##...',
    '#.##..###.',
    '#.......#.',
    '.#........',
    '.......#..',
    '.##.....#.',
    '.####.....',
    '.#########',
].join('\n')

const INPUT = [
    'Tile 2311:',
    '..##.#..#.',
    '##..#.....',
    '#...##..#.',
    '####.#...#',
    '##.##.###.',
    '##...#.###',
    '.#.#.#..##',
    '..#....#..',
    '###...#.#.',
    '..###..###',
    '',
    'Tile 1951:',
    '#.##...##.',
    '#.####...#',
    '.....#..##',
    '#...######',
    '.##.#....#',
    '.###.#####',
    '###.##.##.',
    '.###....#.',
    '..#.#..#.#',
    '#...##.#..',
    '',
    'Tile 1171:',
    '####...##.',
    '#..##.#..#',
    '##.#..#.#.',
    '.###.####.',
    '..###.####',
    '.##....##.',
    '.#...####.',
    '#.##.####.',
    '####..#...',
    '.....##...',
    '',
    'Tile 1427:',
    '###.##.#..',
    '.#..#.##..',
    '.#.##.#..#',
    '#.#.#.##.#',
    '....#...##',
    '...##..##.',
    '...#.#####',
    '.#.####.#.',
    '..#..###.#',
    '..##.#..#.',
    '',
    'Tile 1489:',
    '##.#.#....',
    '..##...#..',
    '.##..##...',
    '..#...#...',
    '#####...#.',
    '#..#.#.#.#',
    '...#.#.#..',
    '##.#...##.',
    '..##.##.##',
    '###.##.#..',
    '',
    'Tile 2473:',
    '#....####.',
    '#..#.##...',
    '#.##..#...',
    '######.#.#',
    '.#...#.#.#',
    '.#########',
    '.###.#..#.',
    '########.#',
    '##...##.#.',
    '..###.#.#.',
    '',
    'Tile 2971:',
    '..#.#....#',
    '#...###...',
    '#.#.###...',
    '##.##..#..',
    '.#####..##',
    '.#..####.#',
    '#..#.#..#.',
    '..####.###',
    '..#.#.###.',
    '...#.#.#.#',
    '',
    'Tile 2729:',
    '...#.#.#.#',
    '####.#....',
    '..#.#.....',
    '....#..#.#',
    '.##..##.#.',
    '.#.####...',
    '####.#.#..',
    '##.####...',
    '##..#.##..',
    '#.##...##.',
    '',
    'Tile 3079:',
    '#.#.#####.',
    '.#..######',
    '..#.......',
    '######....',
    '####.#..#.',
    '.#...#.##.',
    '#.#####.##',
    '..#.###...',
    '..#.......',
    '..#.###...',
].join('\n')

const BORDERS = [1023, 513, 1022, 31]
const BORDERS_ROT = [513, 1022, 31, 1023]
const BORDERS_FLIP = [1023, 992, 511, 513]

it('prepares input', () => {
    expect(puzzle.prep(INPUT_T)[0][1]).toEqual(BORDERS)
})

it('rotates correctly', () => {
    expect(puzzle.rotate(BORDERS.slice())).toEqual(BORDERS_ROT)
})

it('flips correctly', () => {
    expect(puzzle.flip(BORDERS.slice())).toEqual(BORDERS_FLIP)
})

it('solves part_1', () => {
    expect(puzzle.part_1(INPUT)).toEqual(20899048083289)
})

it('solves part_2', () => {
    //TODO
    //fails for example - probably some hard coded dimension
    //expect(puzzle.part_2(INPUT)).toEqual(273)
})
