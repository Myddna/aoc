const _ = require('lodash')

const P = {

    prep: T => T.split('\n').map(L => L.split(' ')),

    part_1: T => {
        let solution = {pos: 0, depth: 0};
        const INPUT = P.prep(T)
        for (const item of INPUT) {
            const val = parseInt(item[1]);
            switch (item[0]) {
                case 'forward':
                    solution.pos += val;
                    break;
                case 'down':
                    solution.depth += val;
                    break;
                case 'up':
                    solution.depth -= val;            
                default:
                    break;
            }
        }
        return solution.pos * solution.depth;
    },

    part_2: T => {
        let solution = { pos: 0, depth: 0, aim: 0 };
        const INPUT = P.prep(T);
        for (const item of INPUT) {
          const val = parseInt(item[1]);
          switch (item[0]) {
            case "forward":
              solution.pos += val;
              solution.depth += solution.aim * val;
              break;
            case "down":
              solution.aim += val;
              break;
            case "up":
              solution.aim -= val;
            default:
              break;
          }
        }
        return solution.pos * solution.depth;
    }

}

exports.puzzle = P