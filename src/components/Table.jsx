import React from 'react';
import WordCell from './WordCell';
import { CASE_NAMES, COL_NAMES } from '../data/sanskritData';

const Table = ({ currentTable, handleCellClick }) => {
    return (
        <div className="paradigm-table">
            <div className="table-header-bar">
                <span className="table-header-title">Paradigm</span>
                <div className="table-base-info">
                    Base: <span className="font-bold">{currentTable.base}</span> + <span className="text-red-600 font-bold">Suffix</span>
                </div>
            </div>

            <div className="table-scroll-container">
                <table className="data-table">
                    <thead>
                        <tr className="table-head-row">
                            <th className="th-case">格</th>
                            <th className="th-number">單 (1)</th>
                            <th className="th-number">雙 (2)</th>
                            <th className="th-number">複 (3+)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                        {currentTable.data.map((row, rowIdx) => (
                            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'tr-even' : 'tr-odd'}>
                                {/* Case Label */}
                                <td className="td-case-label">
                                    {CASE_NAMES[rowIdx]}
                                </td>

                                {/* Cells */}
                                {row.map((cellData, colIdx) => (
                                    <td key={colIdx} className="td-cell">
                                        <WordCell
                                            cellData={cellData}
                                            base={currentTable.base}
                                            onClick={() => handleCellClick(cellData, rowIdx, colIdx)}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
