import React from 'react';
import WordCell from './WordCell';
import { DERIVATION_RULES } from '../data/derivationRules';
import { CASE_NAMES, COL_NAMES } from '../data/sanskritData';

const Table = ({ currentTable, handleCellClick, rowLabels = CASE_NAMES, colLabels = COL_NAMES, data, onTableSwitch }) => {
    const [showDerivation, setShowDerivation] = React.useState(false);

    // Reset derivation view when table changes
    React.useEffect(() => {
        setShowDerivation(false);
    }, [currentTable.id]);

    const isMerged = currentTable.isMerged;
    const isAllGenders = !isMerged && (currentTable.gender === "ALL" || (currentTable.data.length > 0 && currentTable.data[0].some(cell => typeof cell === 'object' && !cell.t && (cell.M || cell.N || cell.F))));

    const derivationRules = DERIVATION_RULES[currentTable.id];

    // Helper to compare cell data for equality
    const areCellsEqual = (c1, c2) => {
        if (!c1 || !c2) return false;
        const t1 = typeof c1 === 'object' ? c1.t : c1;
        const t2 = typeof c2 === 'object' ? c2.t : c2;
        return t1 === t2;
    };

    // Helper to get source table data
    const getSourceTableData = () => {
        if (!derivationRules || !data) return null;
        // In verb mode, data is passed as prop (VERB_DATA)
        // We need to access the source table from it
        return data[derivationRules.sourceId];
    };

    const sourceTable = showDerivation ? getSourceTableData() : null;

    return (
        <div className="table-wrapper">
            {/* Header with Toggle */}


            {/* Description */}
            <p className="table-description">{currentTable.description}</p>

            <div className="paradigm-table">
                <div className="table-scroll-container">
                    <table className={`data-table ${isAllGenders ? 'complex-table' : ''}`}>
                        <thead>
                            {isMerged ? (
                                <>
                                    <tr className="table-head-row">
                                        <th className="th-case" rowSpan={2}></th>
                                        {colLabels.map((label, idx) => (
                                            <th key={idx} className="th-number" colSpan={2}>{label}</th>
                                        ))}
                                    </tr>
                                    <tr className="table-head-row-sub">
                                        {colLabels.map((_, idx) => (
                                            <React.Fragment key={idx}>
                                                <th className="th-gender">{currentTable.table1Label}</th><th className="th-gender th-gender-sub-highlight">{currentTable.table2Label}</th>
                                            </React.Fragment>
                                        ))}
                                    </tr>
                                </>
                            ) : isAllGenders ? (
                                <>
                                    <tr className="table-head-row">
                                        <th className="th-case" rowSpan={2}></th>
                                        {colLabels.map((label, idx) => (
                                            <th key={idx} className="th-number" colSpan={3}>{label}</th>
                                        ))}
                                    </tr>
                                    <tr className="table-head-row-sub">
                                        {colLabels.map((_, idx) => (
                                            <React.Fragment key={idx}>
                                                <th className="th-gender">陽</th><th className="th-gender">中</th><th className="th-gender">陰</th>
                                            </React.Fragment>
                                        ))}
                                    </tr>
                                </>
                            ) : (
                                <tr className="table-head-row">
                                    <th className="th-case"></th>
                                    {colLabels.map((label, idx) => (
                                        <th key={idx} className="th-number">{label}</th>
                                    ))}
                                </tr>
                            )}
                        </thead>
                        <tbody>
                            {currentTable.data.map((row, rowIdx) => (
                                <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'tr-even' : 'tr-odd'}>
                                    {/* Case Label */}
                                    <td className="td-case-label">
                                        {rowLabels[rowIdx]}
                                    </td>

                                    {/* Cells */}
                                    {row.map((cellData, colIdx) => {
                                        // Inject segments if derivation is active
                                        let displayData = cellData;
                                        let sourceCellData = null;

                                        if (showDerivation && derivationRules) {
                                            const rule = derivationRules.rows[rowIdx][colIdx];
                                            const segments = rule.segments;
                                            const intermediate = rule.intermediate;

                                            if (typeof cellData === 'object') {
                                                displayData = { ...cellData, segments, intermediate };
                                            } else {
                                                displayData = { t: cellData, segments, intermediate };
                                            }

                                            // Get source cell data
                                            if (sourceTable && sourceTable.data[rowIdx] && sourceTable.data[rowIdx][colIdx]) {
                                                sourceCellData = sourceTable.data[rowIdx][colIdx];
                                            }
                                        }

                                        if (isAllGenders) {
                                            // Complex render for ALL genders
                                            // cellData is {M, N, F}
                                            const m = cellData.M;
                                            const n = cellData.N;
                                            const f = cellData.F;

                                            const eqMN = areCellsEqual(m, n);
                                            const eqNF = areCellsEqual(n, f);
                                            const eqMF = areCellsEqual(m, f); // Less common to merge M+F skipping N, but possible if N is diff

                                            // Render logic based on equality
                                            // Priority: All 3 equal -> 1 cell colspan 3
                                            // M=N -> 1 cell colspan 2, F separate
                                            // N=F -> M separate, 1 cell colspan 2
                                            // Else -> 3 separate cells

                                            if (eqMN && eqNF) {
                                                // All equal
                                                return (
                                                    <td key={`${colIdx}-all`} colSpan={3} className="td-cell">
                                                        <WordCell
                                                            cellData={m}
                                                            base={currentTable.base}
                                                            onClick={(w) => handleCellClick(w, rowIdx, colIdx, "ALL")}
                                                        />
                                                    </td>
                                                );
                                            } else if (eqMN) {
                                                // M == N != F
                                                return (
                                                    <React.Fragment key={colIdx}>
                                                        <td colSpan={2} className="td-cell">
                                                            <WordCell
                                                                cellData={m}
                                                                base={currentTable.base}
                                                                onClick={(w) => handleCellClick(w, rowIdx, colIdx, "M")} // or M/N?
                                                            />
                                                        </td>
                                                        <td className="td-cell">
                                                            <WordCell
                                                                cellData={f}
                                                                base={currentTable.base}
                                                                onClick={(w) => handleCellClick(w, rowIdx, colIdx, "F")}
                                                            />
                                                        </td>
                                                    </React.Fragment>
                                                );
                                            } else if (eqNF) {
                                                // M != N == F
                                                return (
                                                    <React.Fragment key={colIdx}>
                                                        <td className="td-cell">
                                                            <WordCell
                                                                cellData={m}
                                                                base={currentTable.base}
                                                                onClick={(w) => handleCellClick(w, rowIdx, colIdx, "M")}
                                                            />
                                                        </td>
                                                        <td colSpan={2} className="td-cell">
                                                            <WordCell
                                                                cellData={n}
                                                                base={currentTable.base}
                                                                onClick={(w) => handleCellClick(w, rowIdx, colIdx, "N")}
                                                            />
                                                        </td>
                                                    </React.Fragment>
                                                );
                                            } else {
                                                // All different (or M=F != N, treat as separate for visual clarity usually)
                                                return (
                                                    <React.Fragment key={colIdx}>
                                                        <td className="td-cell">
                                                            <WordCell
                                                                cellData={m}
                                                                base={currentTable.base}
                                                                onClick={(w) => handleCellClick(w, rowIdx, colIdx, "M")}
                                                            />
                                                        </td>
                                                        <td className="td-cell">
                                                            <WordCell
                                                                cellData={n}
                                                                base={currentTable.base}
                                                                onClick={(w) => handleCellClick(w, rowIdx, colIdx, "N")}
                                                            />
                                                        </td>
                                                        <td className="td-cell">
                                                            <WordCell
                                                                cellData={f}
                                                                base={currentTable.base}
                                                                onClick={(w) => handleCellClick(w, rowIdx, colIdx, "F")}
                                                            />
                                                        </td>
                                                    </React.Fragment>
                                                );
                                            }

                                        } else if (isMerged) {
                                            // Merged View Render
                                            // cellData has .origin ('left', 'right', or 'merged')
                                            const isRight = cellData.origin === 'right';
                                            const isMergedCell = cellData.origin === 'merged';

                                            return (
                                                <td
                                                    key={colIdx}
                                                    className={`td-cell ${isRight ? 'td-highlight' : ''} ${isMergedCell ? 'td-merged-highlight' : ''}`}
                                                    colSpan={cellData.colSpan || 1}
                                                >
                                                    <WordCell
                                                        cellData={cellData}
                                                        base={cellData.base || currentTable.base} // Use specific base for merged cells
                                                        // WordCell passes cellData to onClick.
                                                        // App.jsx handles parsing using effectiveTable.base.
                                                        onClick={(clickedWord, clickedGender) => handleCellClick(clickedWord, rowIdx, colIdx, clickedGender)}
                                                    />
                                                </td>
                                            );
                                        } else {
                                            // Standard render
                                            return (
                                                <td key={colIdx} className="td-cell">
                                                    <WordCell
                                                        cellData={displayData}
                                                        base={currentTable.base}
                                                        sourceData={sourceCellData}
                                                        onClick={(clickedWord, clickedGender) => handleCellClick(clickedWord, rowIdx, colIdx, clickedGender)}
                                                    />
                                                </td>
                                            );
                                        }
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Header with Toggle */}
            <div className="table-header-container" style={{ justifyContent: 'flex-start', display: 'flex', gap: '8px', alignItems: 'center' }}>
                {derivationRules && (
                    <button
                        onClick={() => setShowDerivation(!showDerivation)}
                        className={`derivation-toggle-btn ${showDerivation
                            ? 'derivation-toggle-btn-active'
                            : 'derivation-toggle-btn-inactive'
                            }`}
                    >
                        {showDerivation ? 'Show Table' : 'Show Process'}
                    </button>
                )}
                {currentTable.relatedTables && currentTable.relatedTables.map(related => (
                    <button
                        key={related.id}
                        onClick={() => onTableSwitch && onTableSwitch(related.id)}
                        className="derivation-toggle-btn derivation-toggle-btn-inactive"
                    >
                        {related.label}
                    </button>
                ))}
            </div>

            {/* Note */}
            {currentTable.note && (
                <div className="table-note-box">
                    {currentTable.note}
                </div>
            )}

            {currentTable.memorizeNote && (
                <div className="table-note-memorize">
                    Memorize: {currentTable.memorizeNote}
                </div>
            )}
        </div>
    );
};

export default Table;
