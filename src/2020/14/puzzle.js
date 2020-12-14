const _ = require('lodash')

const B = BigInt

const P = {

    prep: T => T.split('\n').map(L => L.split(/ = /)),

    value: (v, m) => (B(v) |
        B('0b' + m.replace(/X/g, '0'))) &
        B('0b' + m.replace(/X/g, '1')),

    addresses: (v, m) => m.split('')
        .reduce((adr, c, i) => adr = c === 'X'
            ? adr = (s => adr.flatMap(a => [a | s, a & ~s]))(B(1) << B(35 - i))
            : adr,
            [B(v) | B('0b' + m.replace(/X/g, '0'))]
        )
        .map(a => a.toString(2)),

    run: (T, f) => _.reduce(
        P.prep(T).reduce((a, l) =>
            l[0] === 'mask'
                ? [a[0], l[1]]
                : (() => {
                    f(a[0], a[1], l[0].split(/[\[\]]/g)[1], l[1])
                    return a
                })(),
            [{}, 0]
        )[0], (a, v) => a + B(v), B(0)).toString() * 1,

    part_1: T => P.run(T, (mem, mask, adr, val) => mem[adr] = P.value(val, mask)),

    part_2: T => P.run(T, (mem, mask, adr, val) => P.addresses(adr, mask).forEach(a => mem[a] = B(val)))

}

exports.puzzle = P