import React from 'react';
import WordCell from './WordCell';
import { CASE_NAMES, COL_NAMES } from '../data/sanskritData';

const Table = ({ currentTable, handleCellClick }) => {
    const isAllGenders = currentTable.gender === "ALL" || (currentTable.data.length > 0 && currentTable.data[0].some(cell => typeof cell === 'object' && !cell.t && (cell.M || cell.N || cell.F)));

    // Helper to compare cell data for equality
    const areCellsEqual = (c1, c2) => {
        if (!c1 || !c2) return false;
        const t1 = typeof c1 === 'object' ? c1.t : c1;
        const t2 = typeof c2 === 'object' ? c2.t : c2;
        return t1 === t2;
    };

    return (
        <div className="paradigm-table">
            <div className="table-header-bar">
                <span className="table-header-title">Paradigm</span>
                <div className="table-base-info">
                    Base: <span className="font-bold">{currentTable.base}</span> + <span className="text-red-600 font-bold">Suffix</span>
                </div>
            </div>

            <div className="table-scroll-container">
                <table className={`data-table ${isAllGenders ? 'complex-table' : ''}`}>
                    <thead>
                        {isAllGenders ? (
                            <>
                                <tr className="table-head-row">
                                    <th className="th-case" rowSpan={2}>格</th>
                                    <th className="th-number" colSpan={3}>單 (1)</th>
                                    <th className="th-number" colSpan={3}>雙 (2)</th>
                                    <th className="th-number" colSpan={3}>複 (3+)</th>
                                </tr>
                                <tr className="table-head-row-sub">
                                    {/* Singular */}
                                    <th className="th-gender">陽</th><th className="th-gender">中</th><th className="th-gender">陰</th>
                                    {/* Dual */}
                                    <th className="th-gender">陽</th><th className="th-gender">中</th><th className="th-gender">陰</th>
                                    {/* Plural */}
                                    <th className="th-gender">陽</th><th className="th-gender">中</th><th className="th-gender">陰</th>
                                </tr>
                            </>
                        ) : (
                            <tr className="table-head-row">
                                <th className="th-case">格</th>
                                <th className="th-number">單 (1)</th>
                                <th className="th-number">雙 (2)</th>
                                <th className="th-number">複 (3+)</th>
                            </tr>
                        )}
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                        {currentTable.data.map((row, rowIdx) => (
                            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'tr-even' : 'tr-odd'}>
                                {/* Case Label */}
                                <td className="td-case-label">
                                    {CASE_NAMES[rowIdx]}
                                </td>

                                {/* Cells */}
                                {row.map((cellData, colIdx) => {
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
                                                <td key={`${colIdx}-all`} colSpan={3} className="td-cell text-center">
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
                                                    <td colSpan={2} className="td-cell text-center border-r border-stone-200">
                                                        <WordCell
                                                            cellData={m}
                                                            base={currentTable.base}
                                                            onClick={(w) => handleCellClick(w, rowIdx, colIdx, "M")} // or M/N?
                                                        />
                                                    </td>
                                                    <td className="td-cell text-center">
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
                                                    <td className="td-cell text-center border-r border-stone-200">
                                                        <WordCell
                                                            cellData={m}
                                                            base={currentTable.base}
                                                            onClick={(w) => handleCellClick(w, rowIdx, colIdx, "M")}
                                                        />
                                                    </td>
                                                    <td colSpan={2} className="td-cell text-center">
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
                                                    <td className="td-cell text-center border-r border-stone-200">
                                                        <WordCell
                                                            cellData={m}
                                                            base={currentTable.base}
                                                            onClick={(w) => handleCellClick(w, rowIdx, colIdx, "M")}
                                                        />
                                                    </td>
                                                    <td className="td-cell text-center border-r border-stone-200">
                                                        <WordCell
                                                            cellData={n}
                                                            base={currentTable.base}
                                                            onClick={(w) => handleCellClick(w, rowIdx, colIdx, "N")}
                                                        />
                                                    </td>
                                                    <td className="td-cell text-center">
                                                        <WordCell
                                                            cellData={f}
                                                            base={currentTable.base}
                                                            onClick={(w) => handleCellClick(w, rowIdx, colIdx, "F")}
                                                        />
                                                    </td>
                                                </React.Fragment>
                                            );
                                        }

                                    } else {
                                        // Standard render
                                        return (
                                            <td key={colIdx} className="td-cell">
                                                <WordCell
                                                    cellData={cellData}
                                                    base={currentTable.base}
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
    );
};

export default Table;
