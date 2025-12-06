import React, { useState, useEffect } from 'react';
import { DATA, COL_NAMES, CASE_NAMES } from './data/sanskritData';
import { VERB_DATA, PERSON_NAMES } from './data/verbData';
import { parseCellData, findMatchingForms, findSameCaseNumberForms, formatOccurrences, extractGenderData, mergeTableData, formatStemLabel, getGenderLabel } from './utils/sanskritUtils';
import Table from './components/Table';
import Legend from './components/Legend';
import Modal from './components/Modal';
import TableControl from './components/TableControl';
import RootView from './components/RootView';
import SandhiRules from './components/SandhiRules';

const App = () => {
    // App Mode: 'noun' or 'verb'
    const [appMode, setAppMode] = useState('noun');

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

    // Determine current data source
    const currentData = appMode === 'noun' ? DATA : (appMode === 'verb' ? VERB_DATA : {});
    const currentRowLabels = appMode === 'noun' ? CASE_NAMES : PERSON_NAMES;

    // Helper to update defaults when table changes
    const updateDefaults = (tableId, setVariant, setGender) => {
        const table = currentData[tableId];
        if (!table) return; // Guard against invalid ID when switching modes

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

    // Reset tables when mode changes
    useEffect(() => {
        const firstKey = Object.keys(currentData)[0];
        const secondKey = Object.keys(currentData)[1] || firstKey;

        setTable1Id(firstKey);
        setTable2Id(secondKey);

        // Defaults will be updated by the other effects
    }, [appMode]);

    // Effects for defaults
    useEffect(() => { updateDefaults(table1Id, setTable1Variant, setTable1Gender); }, [table1Id, currentData]);
    useEffect(() => { updateDefaults(table2Id, setTable2Variant, setTable2Gender); }, [table2Id, currentData]);

    // Helper to get processed table data
    const getProcessedTable = (tableId, variant, gender) => {
        const rawTable = currentData[tableId];
        if (!rawTable) return null; // Handle transition states

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
                hasStrength: rawTable.hasStrength, // Preserve flags
                stemStrength: rawTable.stemStrength // Preserve stem strength data
            };
        }
        return rawTable;
    };

    const table1Data = getProcessedTable(table1Id, table1Variant, table1Gender);
    const table2Data = getProcessedTable(table2Id, table2Variant, table2Gender);

    // Merged Data
    const mergedData = (viewMode === 'merge' && table1Data && table2Data) ? mergeTableData(table1Data, table2Data) : null;

    const handleCellClick = (cellData, rowIdx, colIdx, clickedGender = null, tableContext = null) => {
        // tableContext is the table object (table1Data or table2Data) passed explicitly

        let effectiveTable = tableContext || table1Data; // Default to table1

        if (viewMode === 'merge' && cellData.origin) {
            effectiveTable = cellData.origin === 'left' ? table1Data : table2Data;
        }

        const tableBase = effectiveTable.base || ""; // Handle undefined base for verbs

        const { parsedForms } = parseCellData(cellData, tableBase);

        let allMatches = [];
        let displaySuffixes = [];

        parsedForms.forEach(part => {
            // Pass currentRowLabels to findMatchingForms so it can format occurrences correctly
            const matches = findMatchingForms(part.suffix, effectiveTable.id, currentData, currentRowLabels);
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
        ).filter(m => {
            // Hide all stem tables in Demonstrative/Pronouns (tad_group) except yad
            if (m.tableId === "tad_group") {
                return m.variantName === "yad";
            }
            return true;
        });

        // Pass currentRowLabels to formatOccurrences
        const currentInfoStr = currentTableMatches.length > 0 ? currentTableMatches[0].infoStr : formatOccurrences([{ r: rowIdx, c: colIdx }], currentRowLabels);

        // Pass currentRowLabels to findSameCaseNumberForms
        const sameCaseNumberMatches = findSameCaseNumberForms(rowIdx, colIdx, effectiveTable.id, currentData, currentRowLabels)
            .filter(m => {
                // Hide all stem tables in Demonstrative/Pronouns (tad_group) except yad
                if (m.tableId === "tad_group") {
                    return m.variantName === "yad";
                }
                return true;
            });

        let tableGenderLabel = effectiveTable.gender;
        if (targetGender) {
            tableGenderLabel = (targetGender === "M" ? "陽" : (targetGender === "N" ? "中" : "陰"));
        } else if (!tableGenderLabel && appMode === 'verb') {
            tableGenderLabel = ""; // No gender for verbs
        }

        setSelectedCell({
            rawWord: typeof cellData === 'object' ? cellData.t : cellData,
            suffixes: displaySuffixes,
            currentInfoStr: currentInfoStr,
            tableGender: tableGenderLabel,
            matches: otherMatches,
            sameCaseNumberMatches: sameCaseNumberMatches,
            caseLabel: `${COL_NAMES[colIdx]}${currentRowLabels[rowIdx]}`
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

    if (appMode !== 'root' && appMode !== 'sandhi' && (!table1Data || !table2Data)) return <div>Loading...</div>;

    return (
        <div className="app-container">

            {/* Header */}
            <header className="app-header">
                <div className="header-content app-header-content">

                    {/* Mode Switcher (Noun/Verb) */}
                    <div className="mode-switcher mode-switcher-container">
                        <button
                            onClick={() => setAppMode('noun')}
                            className={`app-btn ${appMode === 'noun' ? 'app-btn-mode-active' : 'app-btn-inactive'}`}
                        >
                            Noun
                        </button>
                        <button
                            onClick={() => setAppMode('verb')}
                            className={`app-btn ${appMode === 'verb' ? 'app-btn-mode-active' : 'app-btn-inactive'}`}
                        >
                            Verb
                        </button>
                        <button
                            onClick={() => setAppMode('root')}
                            className={`app-btn ${appMode === 'root' ? 'app-btn-mode-active' : 'app-btn-inactive'}`}
                        >
                            Root
                        </button>
                        <button
                            onClick={() => setAppMode('sandhi')}
                            className={`app-btn ${appMode === 'sandhi' ? 'app-btn-mode-active' : 'app-btn-inactive'}`}
                        >
                            Sandhi
                        </button>
                    </div>

                    {/* View Mode Switcher - Only show for Noun/Verb */}
                    {appMode !== 'root' && appMode !== 'sandhi' && (
                        <div className="view-mode-switcher view-mode-switcher-container">
                            <button
                                onClick={() => setViewMode('single')}
                                className={`app-btn ${viewMode === 'single' ? 'app-btn-view-active' : 'app-btn-inactive'}`}
                            >
                                Single
                            </button>
                            <button
                                onClick={() => setViewMode('compare')}
                                className={`app-btn ${viewMode === 'compare' ? 'app-btn-view-active' : 'app-btn-inactive'}`}
                            >
                                Compare
                            </button>
                            <button
                                onClick={() => setViewMode('merge')}
                                className={`app-btn ${viewMode === 'merge' ? 'app-btn-view-active' : 'app-btn-inactive'}`}
                            >
                                Merge
                            </button>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">

                {appMode === 'root' && <RootView />}
                {appMode === 'sandhi' && <SandhiRules />}

                {appMode !== 'root' && appMode !== 'sandhi' && viewMode === 'single' && (
                    <>
                        <TableControl
                            tableId={table1Id}
                            variant={table1Variant}
                            gender={table1Gender}
                            onTableChange={setTable1Id}
                            onVariantChange={setTable1Variant}
                            onGenderChange={setTable1Gender}
                            data={currentData}
                            mode={appMode}
                        />
                        {table1Data.hasStrength && <Legend stemStrength={table1Data.stemStrength} />}
                        <Table
                            currentTable={table1Data}
                            handleCellClick={(d, r, c, g) => handleCellClick(d, r, c, g, table1Data)}
                            rowLabels={currentRowLabels}
                            data={currentData}
                            onTableSwitch={(newId, variant, gender) => switchTable(newId, variant, gender)}
                        />
                    </>
                )}

                {appMode !== 'root' && appMode !== 'sandhi' && viewMode === 'compare' && (
                    <div className="app-grid-2-col">
                        <div className="compare-col">
                            <TableControl
                                tableId={table1Id}
                                variant={table1Variant}
                                gender={table1Gender}
                                onTableChange={setTable1Id}
                                onVariantChange={setTable1Variant}
                                onGenderChange={setTable1Gender}
                                data={currentData}
                                mode={appMode}
                            />
                            {table1Data.hasStrength && <Legend stemStrength={table1Data.stemStrength} />}
                            <Table
                                currentTable={table1Data}
                                handleCellClick={(d, r, c, g) => handleCellClick(d, r, c, g, table1Data)}
                                rowLabels={currentRowLabels}
                                onTableSwitch={(newId, variant, gender) => switchTable(newId, variant, gender)}
                            />
                        </div>
                        <div className="compare-col">
                            <TableControl
                                tableId={table2Id}
                                variant={table2Variant}
                                gender={table2Gender}
                                onTableChange={setTable2Id}
                                onVariantChange={setTable2Variant}
                                onGenderChange={setTable2Gender}
                                data={currentData}
                                mode={appMode}
                            />
                            {table2Data.hasStrength && <Legend stemStrength={table2Data.stemStrength} />}
                            <Table
                                currentTable={table2Data}
                                handleCellClick={(d, r, c, g) => handleCellClick(d, r, c, g, table2Data)}
                                rowLabels={currentRowLabels}
                                onTableSwitch={(newId, variant, gender) => setTable2Id(newId)} // Keep Table 2 simple for now or implement full switch if needed
                            />
                        </div>
                    </div>
                )}

                {appMode !== 'root' && appMode !== 'sandhi' && viewMode === 'merge' && (
                    <>
                        <div className="app-grid-merge">
                            <TableControl
                                tableId={table1Id}
                                variant={table1Variant}
                                gender={table1Gender}
                                onTableChange={setTable1Id}
                                onVariantChange={setTable1Variant}
                                onGenderChange={setTable1Gender}
                                data={currentData}
                                mode={appMode}
                            />
                            <TableControl
                                tableId={table2Id}
                                variant={table2Variant}
                                gender={table2Gender}
                                onTableChange={setTable2Id}
                                onVariantChange={setTable2Variant}
                                onGenderChange={setTable2Gender}
                                data={currentData}
                                mode={appMode}
                            />
                        </div>
                        <Table
                            currentTable={mergedData}
                            handleCellClick={handleCellClick}
                            rowLabels={currentRowLabels}
                        />
                    </>
                )}

                <div className="app-footer-note">
                    Tap any word to link to other stems with the same {appMode === 'verb' ? "value" : <span className="app-footer-note-highlight">red ending</span>}.
                </div>
            </main>

            {/* Analysis Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Suffix Analysis"
            >
                {selectedCell && (
                    <div className="modal-content-container">
                        {/* Header Info */}
                        <div className="modal-header-container">
                            <div className="modal-word-display">
                                {selectedCell.rawWord.split("/").map((w, i) => {
                                    return (
                                        <span key={i} className="modal-word-part">
                                            {w}
                                        </span>
                                    )
                                })}
                            </div>

                            {/* Consolidated Current Cell Info */}
                            <div className="modal-info-row">
                                {selectedCell.rawWord}
                                <span className="modal-tag">
                                    {selectedCell.tableGender}{selectedCell.currentInfoStr}
                                </span>
                            </div>

                            <div className="modal-tags-container">
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
                                    Other {appMode === 'verb' ? 'tables' : 'stems'} with same red part
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
                                            <span className="match-item-text-info">
                                                {getGenderLabel(match.gender)}{match.infoStr}
                                            </span>
                                            <span className="match-item-text-word">
                                                {match.word}
                                            </span>
                                        </div>
                                    </button>
                                ))}

                                {selectedCell.matches.length === 0 && (
                                    <div className="no-matches-container">
                                        <p className="no-matches-text">No other stems share exactly this ending.</p>
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
                                            <span className="match-stem-badge">{formatStemLabel(match.table)}</span>
                                            <span className="match-item-text-info-indigo">
                                                {getGenderLabel(match.gender)}{match.infoStr}
                                            </span>
                                            <span className="match-item-text-word-indigo">
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
