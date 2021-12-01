const _ = require('lodash')

const P = {
    
    prep: T => T.split('\n').map(T => parseInt(T)),
    
    part_1: T => {
        const INPUT = P.prep(T)
        let increased = 0;
        for (let idx = 1; idx < INPUT.length; idx++) {
            const element = INPUT[idx];
            const previousElement = INPUT[idx - 1];
            
            if (element > previousElement) {
                increased++;
            }
        }
        
        return increased;
    },
    
    part_2: T => {
        const INPUT = P.prep(T);
        let increased = 0;
        // El primero lo saltamos
        for (let idx = 1; idx + 2 < INPUT.length; idx++) {
            const sum = INPUT[idx] + INPUT[idx + 1] + INPUT[idx + 2];
            const previousSum = INPUT[idx - 1] + INPUT[idx] + INPUT[idx + 1];
            
            if (sum > previousSum) {
              increased++;
            }            
        }
        
        return increased;
    }
    
}

exports.puzzle = P