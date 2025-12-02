import { DATA, COL_NAMES, CASE_NAMES } from '../data/sanskritData';

export const STRONG = "strong";
export const MIDDLE = "middle";
export const WEAK = "weak";

// Helper for constructing split forms
// t: full text, s: strength/style, d: isDifferent (for pronoun comparison)
export const cell = (text, strength = null, isDiff = false) => {
    if (typeof text === 'string') return { t: text, s: strength, d: isDiff };
    return { ...text, d: isDiff }; // preserve existing obj
};

export function parseCellData(cellData, tableBase) {
    let text = "";
    let strength = null;

    if (typeof cellData === 'object' && cellData !== null) {
        text = cellData.t;
        strength = cellData.s;
    } else {
        text = cellData;
    }

    const forms = text.split("/").map(w => w.trim());

    const parsedForms = forms.map(f => {
        if (f.startsWith(tableBase)) {
            return {
                full: f,
                base: tableBase,
                suffix: f.substring(tableBase.length),
                strength: strength
            };
        }
        return {
            full: f,
            base: "",
            suffix: f,
            strength: strength
        };
    });

    return { parsedForms, strength, rawWord: text };
}

// Helper to extract specific gender data from a 3-gender cell
// Helper to extract specific gender data from a 3-gender cell
export function extractGenderData(cellData, genderKey) {
    if (!cellData) return "";
    if (typeof cellData !== 'object' || cellData.t || Array.isArray(cellData)) return cellData;
    if (genderKey === "ALL") return cellData; // Return full object for combined view
    if (cellData[genderKey]) return cellData[genderKey];
    return "";
}

// Helper to format occurrences into "雙三四五"
export function formatOccurrences(occurrences) {
    occurrences.sort((a, b) => {
        if (a.c !== b.c) return a.c - b.c;
        return a.r - b.r;
    });

    const byCol = {};
    occurrences.forEach(o => {
        if (!byCol[o.c]) byCol[o.c] = [];
        byCol[o.c].push(o.r);
    });

    let parts = [];
    Object.keys(byCol).sort().forEach(cIdx => {
        const colName = COL_NAMES[cIdx];
        const rows = byCol[cIdx].sort((a, b) => a - b);
        const rowNames = rows.map(r => CASE_NAMES[r]).join("");
        parts.push(`${colName}${rowNames}`);
    });

    return parts.join(" ");
}

// Circular dependency if we import DATA here, but we just need constants or we can pass them.
// Actually CASE_NAMES and COL_NAMES are in sanskritData.js.
// Let's avoid circular dependency. We can just pass headers or use fixed ones if they are standard.
// But wait, sanskritData imports cell/STRONG etc from here.
// So we cannot import CASE_NAMES/COL_NAMES from sanskritData.js into sanskritUtils.js.
// We should move constants to a separate file or just duplicate/hardcode if they are simple, or pass them as args.
// For now, let's assume we don't need them inside mergeTableData if we construct headers dynamically or passed in.

// Re-export constants if needed or just define them here if they were moved?
// The original file imported cell, STRONG... from here.
// Let's check where CASE_NAMES are defined. They are in sanskritData.js.
// We should probably move CASE_NAMES/COL_NAMES to utils or a constants file to avoid circular dep if we need them here.
// However, mergeTableData might not need them if we just merge the data arrays.
// The headers generation might happen in App or Table.
// Let's look at the plan: "It will generate a new table object with... headers".
// If we want to generate headers like "Singular (Table1)", we might need COL_NAMES.
// Let's see if we can move constants to utils or a new file.
// For now, let's just implement mergeTableData without importing constants, and pass necessary info or handle headers in App/Table.

export const mergeTableData = (table1, table2) => {
    // table1 and table2 are the "currentTable" objects (already processed for variant/gender)
    // They have .data which is 8 rows x 3 cols (usually).
    // If "All Genders" complex view, .data might be different?
    // The currentTable.data for "All Genders" is 8 rows x 3 cols, but each cell is {M, N, F}.
    // If we merge two "All Genders" tables, we probably want to flatten them?
    // The plan said: "If 'All Genders' is selected for both, it will result in 6 columns per number".
    // Actually, standard table is 3 columns (Sing, Dual, Plural).
    // If we merge, we want: Sing(T1), Sing(T2), Dual(T1), Dual(T2), Plural(T1), Plural(T2).
    // So 6 columns total.

    // If one is "All Genders" (complex cell) and other is "M" (simple string), it's tricky.
    // Let's assume for Merged View, we treat "All Genders" as just another value?
    // Or maybe we force the user to select specific gender for merge?
    // The plan said: "The 'Merged View' will interleave columns based on the active gender selection".
    // If "All Genders" is active, we might have 3 sub-columns per number.
    // That would be 3 * 3 = 9 columns per table. 18 columns total. Too wide.
    // Let's restrict Merged View to specific genders OR simplified "All" (maybe just show one representative?).
    // But the user wants to compare.
    // Let's stick to the plan: Interleave columns.

    const rows1 = table1.data;
    const rows2 = table2.data;

    const mergedRows = rows1.map((row1, rowIdx) => {
        const row2 = rows2[rowIdx] || [];
        // Interleave: [Col1_T1, Col1_T2, Col2_T1, Col2_T2, Col3_T1, Col3_T2]
        const newRow = [];
        for (let i = 0; i < 3; i++) {
            newRow.push({ ...wrapCell(row1[i]), origin: 'left', base: table1.base });
            newRow.push({ ...wrapCell(row2[i]), origin: 'right', base: table2.base });
        }
        return newRow;
    });

    return {
        id: `merged_${table1.id}_${table2.id}`,
        isMerged: true,
        base: `${table1.base} / ${table2.base}`,
        gender: `${table1.gender} | ${table2.gender}`,
        data: mergedRows,
        table1Label: table1.gender, // or some other label
        table2Label: table2.gender
    };
};

const wrapCell = (cellData) => {
    // Ensure cellData is an object so we can add origin
    if (typeof cellData === 'string') return { t: cellData };
    if (typeof cellData === 'object' && cellData !== null) return cellData; // Already object (maybe {t, s} or {M,N,F})
    return { t: "-" };
};

// 1. Find matches for same Red Suffix
export function findMatchingForms(targetSuffix, currentTableId) {
    if (!targetSuffix) return [];

    const rawMatches = [];

    Object.values(DATA).forEach(entry => {
        const processTable = (table, tableId, variantName = null, genderKey = null) => {
            const rows = table.data || table.rows;
            if (!rows) return;

            rows.forEach((row, rowIndex) => {
                row.forEach((cell, colIndex) => {
                    let actualCell = cell;
                    if (genderKey) {
                        actualCell = extractGenderData(cell, genderKey);
                    }

                    const { parsedForms } = parseCellData(actualCell, table.base);

                    if (parsedForms.some(p => p.suffix === targetSuffix)) {
                        rawMatches.push({
                            tableId: tableId,
                            table: table,
                            variantName: variantName,
                            genderKey: genderKey,
                            rowIdx: rowIndex,
                            colIdx: colIndex,
                            word: typeof actualCell === 'object' ? actualCell.t : actualCell,
                            suffix: targetSuffix
                        });
                    }
                });
            });
        };

        if (entry.isGroup) {
            Object.entries(entry.data).forEach(([vKey, vData]) => {
                ["M", "N", "F"].forEach(gKey => {
                    processTable(vData, entry.id, vKey, gKey);
                });
            });
        } else {
            processTable(entry, entry.id);
        }
    });

    const grouped = {};

    rawMatches.forEach(m => {
        const key = `${m.tableId}_${m.variantName || ''}_${m.genderKey || ''}_${m.word}`;
        if (!grouped[key]) {
            grouped[key] = {
                tableId: m.tableId,
                table: m.table,
                variantName: m.variantName,
                genderKey: m.genderKey,
                word: m.word,
                suffix: m.suffix,
                occurrences: []
            };
        }
        grouped[key].occurrences.push({ r: m.rowIdx, c: m.colIdx });
    });

    return Object.values(grouped).map(group => {
        const infoStr = formatOccurrences(group.occurrences);
        let tableName = group.table.stem;
        if (group.variantName) {
            tableName = `${group.variantName} (${group.genderKey})`;
        }

        return {
            tableId: group.tableId,
            tableName: tableName,
            shortStem: group.table.shortStem || group.table.stem,
            gender: group.genderKey ? group.genderKey : group.table.gender,
            word: group.word,
            suffix: group.suffix,
            infoStr: infoStr,
            isCurrent: group.tableId === currentTableId,
            variantName: group.variantName,
            genderKey: group.genderKey,
            table: group.table
        };
    });
}

// 2. New Function: Find matches for Same Case & Number
export function findSameCaseNumberForms(rowIdx, colIdx, currentTableId) {
    const matches = [];

    Object.values(DATA).forEach(entry => {
        // We don't skip current table here because we might want to see other variants/genders of the same group

        const processTable = (table, tableId, variantName = null, genderKey = null) => {
            const rows = table.data || table.rows;
            if (!rows) return;

            const cellData = rows[rowIdx][colIdx];
            let actualCell = cellData;
            if (genderKey) {
                actualCell = extractGenderData(cellData, genderKey);
            }

            const word = typeof actualCell === 'object' ? actualCell.t : actualCell;

            matches.push({
                tableId: tableId,
                shortStem: table.shortStem || table.stem,
                gender: genderKey || table.gender,
                word: word,
                variantName: variantName,
                genderKey: genderKey
            });
        };

        if (entry.isGroup) {
            Object.entries(entry.data).forEach(([vKey, vData]) => {
                ["M", "N", "F"].forEach(gKey => {
                    processTable(vData, entry.id, vKey, gKey);
                });
            });
        } else {
            if (entry.id !== currentTableId) { // Only skip simple tables if they are the current one
                processTable(entry, entry.id);
            }
        }
    });

    return matches;
}

// Helper to format stem label for UI (e.g. "陰 -ī (多音節)")
export function formatStemLabel(table) {
    if (!table) return "";

    const genderMap = { "M": "陽", "N": "中", "F": "陰", "m": "陽", "n": "中", "f": "陰" };
    // Handle "三性" or other custom gender strings if present in data, otherwise map standard codes
    // The data uses "陽", "中", "陰" directly in .gender prop usually, but let's be safe.
    // Actually DATA entries have .gender as "陽", "中", "陰" already.
    // But for variants in groups, we might construct it.

    let gender = table.gender;
    if (genderMap[gender]) gender = genderMap[gender];

    const stemSuffix = table.shortStem || table.stem;

    let extra = "";
    if (table.stem && table.stem.toLowerCase().includes("monosyllabic")) {
        extra = " (單音節)";
    } else if (table.stem && table.stem.toLowerCase().includes("polysyllabic")) {
        extra = " (多音節)";
    }

    return `${stemSuffix} ${gender}${extra}`;
}
