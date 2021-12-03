const P = {
    prep: T => T.split('\n'),
    
    getGammaEpsilon: (p) => {
        const numElements = p.length;
        const positionSum = [];
        const result = { gammaRate: "", epsilonRate: "" };
        
        for (let binaryPos = 0; binaryPos < p[0].length; binaryPos++) {
            p.forEach((element) => {
                if (positionSum[binaryPos] == undefined) {
                    positionSum[binaryPos] = 0;
                }
                positionSum[binaryPos] += parseInt(element[binaryPos]);
            });
        }
        
        positionSum.forEach((element) => {
            if (element >= numElements / 2) {
                result.gammaRate += "1";
                result.epsilonRate += "0";
            } else {
                result.gammaRate += "0";
                result.epsilonRate += "1";
            }
        });
        
        return result;
    },
    
    part_1: (T, returnGammaEpsilon = false) => {
        const p = P.prep(T);
        
        result = P.getGammaEpsilon(p);
        
        if (returnGammaEpsilon){
            return result;
        } else {
            return (parseInt(result.gammaRate, 2) * parseInt(result.epsilonRate, 2));
        }
    },
        
    part_2: T => {
        const p = P.prep(T);
        
        const result = { ogr: "", co2sr: "" };
        
        // Oxigen Generator Rating:
        // gammaRate nos dice por qué bit hay que filtrar en cada posición para encontrar los numeros que queremos
        // CO2 Scrubber Rating:
        // epsilonRate nos dice por qué bit hay que filtrar en cada posición para encontrar los números que queremos
        // En cada llamada recursiva tenemos que recalcular gammaEpsilon con los elementos restantes
        const gammaEpsilon = P.getGammaEpsilon(p);
        
        // Antes de llamar a la función que saca los cáculos, nos aseguramos de que las entradas serán válidas para el
        // procesamiento recursivo.
        if (p.length == 1) {
            return p[0];
        } else if (
            p.length == 0 ||
            gammaEpsilon.gammaRate.length == 0 ||
            gammaEpsilon.epsilonRate.length == 0
            ) {
                // Si la longitud de la lista es cero o la del patrón es cero, no hemos encontrado elemento que case con el patrón
                return null;
        } else {
            result.ogr = P.searchByPattern(p, gammaEpsilon, 0, "gammaRate");
            result.co2sr = P.searchByPattern(p, gammaEpsilon, 0, "epsilonRate");
            return parseInt(result.ogr, 2) * parseInt(result.co2sr, 2);
        }
    },
        
    searchByPattern: (list, pattern, patternPos = 0, rateType = null) => {
        // Obtenemos el dígito a comprobar en esta ejecución
        const currentPattern = pattern[rateType][patternPos];
        const filtered = list.filter((item) => {
            return item[patternPos] == currentPattern;
        });
        
        // Comprobamos condiciones de fin, y si no se cumplen, avanzamos
        if (filtered.length == 1) {
            return filtered[0];
        } else if (filtered.length == 0) {
            return null;
        } else {
            const newPattern = P.getGammaEpsilon(filtered);
            // Antes de seguir, comprobamos que la longitud del patrón de de sí para
            // la siguiente fase, si no, terminamos
            if(newPattern.length <= patternPos + 1){
                return null;
            }
            
            // Continuamos
            return P.searchByPattern(
                filtered,
                newPattern,
                patternPos + 1,
                rateType
                );
        }
    }
        
};
            
exports.puzzle = P