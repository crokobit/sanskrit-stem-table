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

    // Custom Rules from verb.json
    if (typeof cellData === 'object' && cellData.rule) {
        if (cellData.rule === 'long_a_before_v_or_m') {
            bgClass = `${bgClass} border-2 border-black`;
        } else if (cellData.rule === 'del_previous_a') {
            bgClass = `${bgClass} border-2 border-red-500`;
        }
    }

    return (
        <button
            onClick={() => onClick(cellData)}
            className={`word-cell-btn ${bgClass}`}
        >
            {parsedForms.map((part, idx) => {
                // If base is empty (e.g. verbs currently), treat suffix as base color (black)
                const effectiveSuffixClass = part.base ? textSuffixClass : textBaseClass;

                return (
                    <span key={idx} className="word-text-wrapper">
                        <span className={textBaseClass}>{part.base}</span>
                        <span className={`${effectiveSuffixClass} font-medium`}>{part.suffix}</span>
                        {idx < parsedForms.length - 1 && <span className={`mx-1 ${slashClass}`}>/</span>}
                    </span>
                );
            })}
        </button>
    );
};

export default WordCell;
