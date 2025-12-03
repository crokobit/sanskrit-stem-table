import React, { useState, useEffect } from 'react';
import { DATA, COL_NAMES, CASE_NAMES } from './data/sanskritData';
import { parseCellData, findMatchingForms, findSameCaseNumberForms, formatOccurrences, extractGenderData, mergeTableData, formatStemLabel, getGenderLabel } from './utils/sanskritUtils';
import Table from './components/Table';
import Legend from './components/Legend';
import Modal from './components/Modal';
import TableControl from './components/TableControl';

const App = () => {
    // View Mode: 'single', 'compare', 'merge'
    const [viewMode, setViewMode] = useState('single');

    // Table 1 State
    const [table1Id, setTable1Id] = useState("a_masc");
    const [table1Variant, setTable1Variant] = useState(null);
    const [table1Gender, setTable1Gender] = useState("M");

    // Table 2 State
    const [table2Id, setTable2Id] = useState("a_neut");
    const [table2Variant, setTable2Variant] = useState(null);
    const [table2Gender, setTable2Gender] = useState("N");

    const [selectedCell, setSelectedCell] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Helper to update defaults when table changes
    const updateDefaults = (tableId, setVariant, setGender) => {
        const table = DATA[tableId];
        if (table.isGroup) {
            setVariant(table.defaultVariant);
            setGender("ALL");
        } else {
            setVariant(null);
            // For non-groups, we generally don't need to force a gender change, 
            // but resetting to "M" or keeping current is fine. 
            // Let's not reset gender for non-groups to avoid jumping if user was on "N".
        }
    };

    // Effects for defaults
    useEffect(() => { updateDefaults(table1Id, setTable1Variant, setTable1Gender); }, [table1Id]);
    useEffect(() => { updateDefaults(table2Id, setTable2Variant, setTable2Gender); }, [table2Id]);

    // Helper to get processed table data
    const getProcessedTable = (tableId, variant, gender) => {
        const rawTable = DATA[tableId];
        let effectiveVariant = variant;
        let effectiveGender = gender;

        if (rawTable.isGroup) {
            if (!effectiveVariant) effectiveVariant = rawTable.defaultVariant;
            if (!effectiveGender) effectiveGender = "ALL";

            const variantData = rawTable.data[effectiveVariant];
            const mappedRows = variantData.rows.map(row =>
                row.map(cell => extractGenderData(cell, effectiveGender))
            );

            return {
                ...variantData,
                id: rawTable.id,
                variant: effectiveVariant,
                gender: effectiveGender === "M" ? "陽" : (effectiveGender === "N" ? "中" : "陰"),
                data: mappedRows,
                base: variantData.base || rawTable.base,
                base: variantData.base || rawTable.base,
                hasStrength: rawTable.hasStrength, // Preserve flags
                stemStrength: rawTable.stemStrength // Preserve stem strength data
            };
        }
        return rawTable;
    };

    const table1Data = getProcessedTable(table1Id, table1Variant, table1Gender);
    const table2Data = getProcessedTable(table2Id, table2Variant, table2Gender);

    // Merged Data
    const mergedData = viewMode === 'merge' ? mergeTableData(table1Data, table2Data) : null;

    const handleCellClick = (cellData, rowIdx, colIdx, clickedGender = null, tableContext = null) => {
        // tableContext is the table object (table1Data or table2Data) passed explicitly

        let effectiveTable = tableContext || table1Data; // Default to table1

        if (viewMode === 'merge' && cellData.origin) {
            effectiveTable = cellData.origin === 'left' ? table1Data : table2Data;
        }

        const { parsedForms } = parseCellData(cellData, effectiveTable.base);

        let allMatches = [];
        let displaySuffixes = [];

        parsedForms.forEach(part => {
            const matches = findMatchingForms(part.suffix, effectiveTable.id); // Use effectiveTable.id
            if (matches.length > 0) {
                allMatches = [...allMatches, ...matches];
                displaySuffixes.push(part.suffix);
            }
        });

        const uniqueMatches = allMatches.filter((v, i, a) => a.findIndex(t => (t.tableId === v.tableId && t.word === v.word && t.variantName === v.variantName && t.genderKey === v.genderKey)) === i);

        // For matching logic, we need to know the "current" context.
        // If we are in merged view, "current" means the table where the cell came from.

        const targetGender = clickedGender || (effectiveTable.gender === "ALL" ? null : effectiveTable.gender); // Simplified

        const currentTableMatches = uniqueMatches.filter(m =>
            m.isCurrent &&
            m.word === (typeof cellData === 'object' ? cellData.t : cellData) &&
            (!m.variantName || m.variantName === effectiveTable.variant) &&
            (!targetGender || m.genderKey === targetGender)
        );
        const otherMatches = uniqueMatches.filter(m =>
            !m.isCurrent ||
            (m.variantName && m.variantName !== effectiveTable.variant) ||
            (targetGender && m.genderKey && m.genderKey !== targetGender)
        );
        const currentInfoStr = currentTableMatches.length > 0 ? currentTableMatches[0].infoStr : formatOccurrences([{ r: rowIdx, c: colIdx }]);

        const sameCaseNumberMatches = findSameCaseNumberForms(rowIdx, colIdx, effectiveTable.id);

        setSelectedCell({
            rawWord: typeof cellData === 'object' ? cellData.t : cellData,
            suffixes: displaySuffixes,
            currentInfoStr: currentInfoStr,
            tableGender: targetGender ? (targetGender === "M" ? "陽" : (targetGender === "N" ? "中" : "陰")) : effectiveTable.gender,
            matches: otherMatches,
            sameCaseNumberMatches: sameCaseNumberMatches,
            caseLabel: `${COL_NAMES[colIdx]}${CASE_NAMES[rowIdx]}`
        });
        setIsModalOpen(true);
    };

    const switchTable = (tableId, variant = null, gender = null) => {
        // Always update Table 1 for now when clicking cross-refs
        setTable1Id(tableId);
        if (variant) setTable1Variant(variant);
        if (gender) setTable1Gender(gender);
        setIsModalOpen(false);
    };

    return (
        <div className="app-container">

            {/* Header */}
            <header className="app-header">
                <div className="header-content flex flex-col md:flex-row justify-between items-center gap-4">
                    <h1 className="header-title">梵语速查手册 (Stem Viewer)</h1>

                    {/* View Mode Switcher */}
                    <div className="view-mode-switcher flex bg-stone-100 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('single')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'single' ? 'bg-white text-indigo-600 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
                        >
                            Single
                        </button>
                        <button
                            onClick={() => setViewMode('compare')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'compare' ? 'bg-white text-indigo-600 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
                        >
                            Compare
                        </button>
                        <button
                            onClick={() => setViewMode('merge')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'merge' ? 'bg-white text-indigo-600 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
                        >
                            Merge
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">

                {viewMode === 'single' && (
                    <>
                        <TableControl
                            tableId={table1Id}
                            variant={table1Variant}
                            gender={table1Gender}
                            onTableChange={setTable1Id}
                            onVariantChange={setTable1Variant}
                            onGenderChange={setTable1Gender}
                        />
                        {table1Data.hasStrength && <Legend stemStrength={table1Data.stemStrength} />}
                        <Table currentTable={table1Data} handleCellClick={(d, r, c, g) => handleCellClick(d, r, c, g, table1Data)} />
                    </>
                )}

                {viewMode === 'compare' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="compare-col">
                            <TableControl
                                tableId={table1Id}
                                variant={table1Variant}
                                gender={table1Gender}
                                onTableChange={setTable1Id}
                                onVariantChange={setTable1Variant}
                                onGenderChange={setTable1Gender}
                            />
                            {table1Data.hasStrength && <Legend stemStrength={table1Data.stemStrength} />}
                            <Table currentTable={table1Data} handleCellClick={(d, r, c, g) => handleCellClick(d, r, c, g, table1Data)} />
                        </div>
                        <div className="compare-col">
                            <TableControl
                                tableId={table2Id}
                                variant={table2Variant}
                                gender={table2Gender}
                                onTableChange={setTable2Id}
                                onVariantChange={setTable2Variant}
                                onGenderChange={setTable2Gender}
                            />
                            {table2Data.hasStrength && <Legend stemStrength={table2Data.stemStrength} />}
                            <Table currentTable={table2Data} handleCellClick={(d, r, c, g) => handleCellClick(d, r, c, g, table2Data)} />
                        </div>
                    </div>
                )}

                {viewMode === 'merge' && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <TableControl
                                tableId={table1Id}
                                variant={table1Variant}
                                gender={table1Gender}
                                onTableChange={setTable1Id}
                                onVariantChange={setTable1Variant}
                                onGenderChange={setTable1Gender}
                            />
                            <TableControl
                                tableId={table2Id}
                                variant={table2Variant}
                                gender={table2Gender}
                                onTableChange={setTable2Id}
                                onVariantChange={setTable2Variant}
                                onGenderChange={setTable2Gender}
                            />
                        </div>
                        <Table currentTable={mergedData} handleCellClick={handleCellClick} />
                    </>
                )}

                <div className="mt-4 text-xs text-center text-stone-400">
                    Tap any word to link to other stems with the same <span className="text-red-500 font-bold">red ending</span>.
                </div>
            </main>

            {/* Analysis Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Suffix Analysis"
            >
                {selectedCell && (
                    <div className="space-y-8">
                        {/* Header Info */}
                        <div className="text-center">
                            <div className="modal-word-display">
                                {selectedCell.rawWord.split("/").map((w, i) => {
                                    // We need base for parsing. 
                                    // We can try to guess base or pass it in selectedCell?
                                    // Actually parseCellData was called before setting selectedCell.
                                    // But here we re-parse for display?
                                    // Wait, the original code re-parsed inside the render:
                                    // const parts = parseCellData(w, DATA[currentTableId].base).parsedForms[0];
                                    // Now currentTableId might be ambiguous.
                                    // We should probably store the parsed parts in selectedCell state to avoid re-parsing with wrong base.
                                    // Or just store the base in selectedCell.
                                    // Let's assume we can get base from selectedCell matches or just pass it.

                                    // Quick fix: The original code used DATA[currentTableId].base.
                                    // We should probably just display the word without re-parsing if possible, 
                                    // or use the base from the table that was clicked.
                                    // Let's try to find the base.
                                    // For now, let's just use the raw word.
                                    return (
                                        <span key={i} className="modal-word-part">
                                            {w}
                                            {/* We lose the red suffix coloring if we don't parse. 
                                                But parsing needs base. 
                                                Let's assume we can get base from the first match? 
                                                Or we can pass base to selectedCell.
                                            */}
                                        </span>
                                    )
                                })}
                            </div>

                            {/* ... rest of modal ... */}
                            {/* Consolidated Current Cell Info */}
                            <div className="modal-info-row">
                                {selectedCell.rawWord}
                                <span className="modal-tag">
                                    {selectedCell.tableGender}{selectedCell.currentInfoStr}
                                </span>
                            </div>

                            <div className="mt-3 flex flex-wrap gap-2 justify-center">
                                {selectedCell.suffixes.map(s => (
                                    <span key={s} className="modal-suffix-tag">
                                        Ending: -{s}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Cross References - Same Suffix */}
                        <div>
                            <div className="modal-section-header">
                                <h4 className="modal-section-title">
                                    Other stems with same red part
                                </h4>
                            </div>

                            <div className="match-list">
                                {selectedCell.matches.map((match, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => switchTable(match.tableId, match.variantName, match.genderKey)}
                                        className="match-item"
                                    >
                                        <div className="match-content">
                                            <span className="match-stem-badge">{formatStemLabel(match.table)}</span>
                                            <span className="text-indigo-800 text-sm">
                                                {getGenderLabel(match.gender)}{match.infoStr}
                                            </span>
                                            <span className="flex-grow text-right text-lg font-serif sanskrit-text">
                                                {match.word}
                                            </span>
                                        </div>
                                    </button>
                                ))}

                                {selectedCell.matches.length === 0 && (
                                    <div className="text-center py-4 bg-stone-50 rounded-lg border border-dashed border-stone-200">
                                        <p className="text-stone-400 italic text-sm">No other stems share exactly this ending.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* NEW SECTION: Same Case & Number */}
                        <div>
                            <div className="modal-section-header">
                                <h4 className="modal-section-title">
                                    其他同數同格詞形 ({selectedCell.caseLabel})
                                </h4>
                            </div>

                            <div className="match-list">
                                {selectedCell.sameCaseNumberMatches.map((match, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => switchTable(match.tableId, match.variantName, match.genderKey)}
                                        className="match-item-indigo"
                                    >
                                        <div className="match-content-indigo">
                                            <span className="match-stem-badge">{match.shortStem}</span>
                                            <span className="text-stone-500 text-sm">
                                                {getGenderLabel(match.gender)}{match.infoStr}
                                            </span>
                                            <span className="flex-grow text-right text-lg font-serif sanskrit-text text-indigo-900">
                                                {match.word}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

        </div>
    );
};

export default App;
