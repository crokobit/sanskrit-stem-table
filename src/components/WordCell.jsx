import React from 'react';
import { parseCellData, STRONG, MIDDLE } from '../utils/sanskritUtils';

const WordCell = ({ cellData, base, onClick }) => {
    // Standard Single Cell Rendering
    const { parsedForms, strength } = parseCellData(cellData, base);

    let bgClass = "word-cell-default";
    let textBaseClass = "text-stone-800";
    let textSuffixClass = "text-red-600";
    let slashClass = "text-stone-300";

    if (strength === STRONG) {
        bgClass = "word-cell-strong";
        textBaseClass = "text-stone-200";
        textSuffixClass = "text-red-400 font-bold";
        slashClass = "text-stone-600";
    } else if (strength === MIDDLE) {
        bgClass = "word-cell-middle";
        textBaseClass = "text-stone-700";
        textSuffixClass = "text-red-700 font-bold";
        slashClass = "text-stone-400";
    }

    if (typeof cellData === 'object' && cellData.userMarked) {
        bgClass = `${bgClass} word-cell-marked`;
    }

    return (
        <button
            onClick={() => onClick(cellData)}
            className={`word-cell-btn ${bgClass}`}
        >
            {parsedForms.map((part, idx) => (
                <span key={idx} className="word-text-wrapper">
                    <span className={textBaseClass}>{part.base}</span>
                    <span className={`${textSuffixClass} font-medium`}>{part.suffix}</span>
                    {idx < parsedForms.length - 1 && <span className={`mx-1 ${slashClass}`}>/</span>}
                </span>
            ))}
        </button>
    );
};

export default WordCell;
