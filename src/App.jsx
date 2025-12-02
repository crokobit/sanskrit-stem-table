import React, { useState, useEffect } from 'react';
import { DATA, COL_NAMES, CASE_NAMES } from './data/sanskritData';
import { parseCellData, findMatchingForms, findSameCaseNumberForms, formatOccurrences, extractGenderData } from './utils/sanskritUtils';
import Table from './components/Table';
import Legend from './components/Legend';
import Modal from './components/Modal';

const App = () => {
    const [currentTableId, setCurrentTableId] = useState("a_masc");
    const [currentVariant, setCurrentVariant] = useState(null);
    const [currentGender, setCurrentGender] = useState("M");

    const [selectedCell, setSelectedCell] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Effect to set default variant when table changes
    useEffect(() => {
        const table = DATA[currentTableId];
        if (table.isGroup) {
            setCurrentVariant(table.defaultVariant);
            setCurrentGender("ALL");
        } else {
            setCurrentVariant(null);
        }
    }, [currentTableId]);

    // Derive current table data
    const rawTable = DATA[currentTableId];
    let currentTable = rawTable;

    // Determine effective variant and gender to avoid race conditions during render
    let effectiveVariant = currentVariant;
    let effectiveGender = currentGender;

    if (rawTable.isGroup) {
        if (!effectiveVariant) {
            effectiveVariant = rawTable.defaultVariant;
        }
        if (!effectiveGender) {
            effectiveGender = "ALL";
        }
    }

    if (rawTable.isGroup && effectiveVariant) {
        const variantData = rawTable.data[effectiveVariant];
        // Construct a flat table for rendering
        const mappedRows = variantData.rows.map(row =>
            row.map(cell => extractGenderData(cell, effectiveGender))
        );

        currentTable = {
            ...variantData,
            id: rawTable.id,
            variant: effectiveVariant,
            gender: effectiveGender === "M" ? "陽" : (effectiveGender === "N" ? "中" : "陰"), // Map key to label
            data: mappedRows
        };
    }

    const handleCellClick = (cellData, rowIdx, colIdx, clickedGender = null) => {
        // We need the base from the ACTUAL current table (variant)
        const effectiveTable = currentTable;

        const { parsedForms } = parseCellData(cellData, effectiveTable.base);

        let allMatches = [];
        let displaySuffixes = [];

        parsedForms.forEach(part => {
            const matches = findMatchingForms(part.suffix, currentTableId);
            if (matches.length > 0) {
                allMatches = [...allMatches, ...matches];
                displaySuffixes.push(part.suffix);
            }
        });

        const uniqueMatches = allMatches.filter((v, i, a) => a.findIndex(t => (t.tableId === v.tableId && t.word === v.word && t.variantName === v.variantName && t.genderKey === v.genderKey)) === i);

        // Prepare info for current cell
        // If clickedGender is provided (from multi-gender cell), use it.
        // Otherwise use currentGender (unless it is ALL, then we might need to be careful, but usually single cell click implies specific gender if not passed)
        // Actually, if currentGender is ALL, and we clicked a specific sub-cell, clickedGender will be set.
        // If currentGender is ALL and we clicked a simple cell (unlikely in group view), clickedGender might be null.

        const targetGender = clickedGender || (currentGender === "ALL" ? null : currentGender);

        const currentTableMatches = uniqueMatches.filter(m =>
            m.isCurrent &&
            m.word === (typeof cellData === 'object' ? cellData.t : cellData) &&
            (!m.variantName || m.variantName === currentVariant) &&
            (!targetGender || m.genderKey === targetGender)
        );
        const otherMatches = uniqueMatches.filter(m =>
            !m.isCurrent ||
            (m.variantName && m.variantName !== currentVariant) ||
            (targetGender && m.genderKey && m.genderKey !== targetGender)
        );
        const currentInfoStr = currentTableMatches.length > 0 ? currentTableMatches[0].infoStr : formatOccurrences([{ r: rowIdx, c: colIdx }]);

        const sameCaseNumberMatches = findSameCaseNumberForms(rowIdx, colIdx, currentTableId);

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
        setCurrentTableId(tableId);
        if (variant) setCurrentVariant(variant);
        if (gender) setCurrentGender(gender);
        setIsModalOpen(false);
    };

    return (
        <div className="app-container">

            {/* Header */}
            <header className="app-header">
                <div className="header-content">
                    <h1 className="header-title">梵语速查手册 (Stem Viewer)</h1>

                    {/* Table Selector */}
                    <div className="table-select-wrapper">
                        <select
                            value={currentTableId}
                            onChange={(e) => setCurrentTableId(e.target.value)}
                            className="table-select"
                        >
                            {Object.values(DATA).map(t => (
                                <option key={t.id} value={t.id}>
                                    {t.stem} — {t.example}
                                </option>
                            ))}
                        </select>
                        <div className="table-select-icon">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">

                {/* Variant Selectors for Groups */}
                {rawTable.isGroup && (
                    <div className="controls-container">
                        {/* Variant Tabs */}
                        <div className="variant-tabs">
                            {rawTable.variants.map(v => (
                                <button
                                    key={v}
                                    onClick={() => setCurrentVariant(v)}
                                    className={`variant-tab ${currentVariant === v
                                        ? 'variant-tab-active'
                                        : 'variant-tab-inactive'
                                        }`}
                                >
                                    {v}
                                </button>
                            ))}
                        </div>

                        {/* Gender Tabs for Pronouns */}
                        <div className="gender-tabs">
                            {["ALL", "M", "N", "F"].map(g => (
                                <button
                                    key={g}
                                    onClick={() => setCurrentGender(g)}
                                    className={`gender-tab ${currentGender === g
                                        ? 'gender-tab-active'
                                        : 'gender-tab-inactive'
                                        }`}
                                >
                                    {g === "ALL" ? "All Genders" : (g === "M" ? "Masculine" : (g === "N" ? "Neuter" : "Feminine"))}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Legend for r-stem if needed */}
                {currentTable.hasStrength && <Legend />}

                {/* Table Card */}
                <Table currentTable={currentTable} handleCellClick={handleCellClick} />

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
                                    const parts = parseCellData(w, DATA[currentTableId].base).parsedForms[0];
                                    return (
                                        <span key={i} className="modal-word-part">
                                            <span className="text-stone-800">{parts.base}</span>
                                            <span className="text-red-600">{parts.suffix}</span>
                                            {i < selectedCell.rawWord.split("/").length - 1 && <span className="text-stone-300 mx-2">/</span>}
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
                                            <span className="match-stem-badge">{match.shortStem}</span>
                                            <span className="text-indigo-800 text-sm">
                                                {match.gender}{match.infoStr}
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
                                                {match.gender}
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
