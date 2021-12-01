const windowSlice = (array, windowSize) => {
    let windowedArray = [];
    for (let idx = 0; (idx + windowSize) <= array.length; idx++) {
        let windowedElement = [];
        for (let jdx = 0; jdx < windowSize && jdx+idx < array.length; jdx++) {
            windowedElement.push(array[jdx+idx]);
        }
        if(windowedElement.length){
            windowedArray.push(windowedElement);
        }
    }
    return windowedArray;
}

const P = {
    
    prep: T => T.split('\n').map(T => parseInt(T)),
    
    part_1: T => {
        const INPUT = P.prep(T);
        let sums = [];
        windowSlice(INPUT, 1).map((item) => {
          sums.push(item.reduce((prev, current) => prev + current));
        });
        const increments = sums.filter((value, idx) => {
          if (idx == 0) return false;
          return value > sums[idx - 1];
        });

        return increments.length;
    },
    
    part_2: T => {
        const INPUT = P.prep(T);
        let sums = [];
        windowSlice(INPUT,3).map((item => {
            sums.push(item.reduce((prev,current) => prev + current));
        }));
        const increments = sums.filter((value, idx) => {
            if (idx == 0) return false;
            return value > sums[idx-1];
        });
        
        return increments.length;
    }
    
}

exports.puzzlev2 = P