
import { mergeTableData, cell } from './src/utils/sanskritUtils.js';

// Mock tables
const table1 = {
    id: 't1',
    base: 'base1',
    gender: 'M',
    data: [
        [cell('a'), cell('b'), cell('c')],
        [cell('d'), cell('e'), cell('f')]
    ]
};

const table2 = {
    id: 't2',
    base: 'base2',
    gender: 'N',
    data: [
        [cell('a'), cell('x'), cell('c')], // 'a' and 'c' match
        [cell('y'), cell('e'), cell('z')]  // 'e' matches
    ]
};

const merged = mergeTableData(table1, table2);

console.log("Merged Data Structure:");
merged.data.forEach((row, rIdx) => {
    console.log(`Row ${rIdx}:`);
    row.forEach((cell, cIdx) => {
        console.log(`  Cell ${cIdx}: Text='${cell.t}', Origin='${cell.origin}', ColSpan=${cell.colSpan || 1}`);
    });
});

// Assertions
const r0 = merged.data[0];
// Cell 0: 'a' == 'a' -> merged
if (r0[0].origin === 'merged' && r0[0].colSpan === 2 && r0[0].t === 'a') {
    console.log("PASS: Row 0, Col 0 merged correctly.");
} else {
    console.error("FAIL: Row 0, Col 0 failed.", r0[0]);
}

// Cell 1: 'b' != 'x' -> separate
// r0[1] is left, r0[2] is right
if (r0[1].origin === 'left' && r0[1].t === 'b' && r0[2].origin === 'right' && r0[2].t === 'x') {
    console.log("PASS: Row 0, Col 1 separated correctly.");
} else {
    console.error("FAIL: Row 0, Col 1 failed.", r0[1], r0[2]);
}

// Cell 2: 'c' == 'c' -> merged
// This should be the next cell in the array.
// r0 has: [merged(a), left(b), right(x), merged(c)]
if (r0[3].origin === 'merged' && r0[3].colSpan === 2 && r0[3].t === 'c') {
    console.log("PASS: Row 0, Col 2 merged correctly.");
} else {
    console.error("FAIL: Row 0, Col 2 failed.", r0[3]);
}
