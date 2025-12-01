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
export function extractGenderData(cellData, genderKey) {
    if (!cellData) return "";
    if (typeof cellData !== 'object' || cellData.t || Array.isArray(cellData)) return cellData;
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
            genderKey: group.genderKey
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
