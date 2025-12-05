import React from 'react';
import { parseCellData, STRONG, MIDDLE } from '../utils/sanskritUtils';

const WordCell = ({ cellData, base, onClick, sourceData }) => {
    // Standard Single Cell Rendering
    const { parsedForms, strength } = parseCellData(cellData, base);

    let bgClass = "word-cell-default";
    let textBaseClass = "word-cell-text-base";
    let textSuffixClass = "word-cell-text-suffix";
    let slashClass = "word-cell-slash";

    if (strength === STRONG) {
        bgClass = "word-cell-strong";
        textBaseClass = "word-cell-text-base-strong";
        textSuffixClass = "word-cell-text-suffix-strong";
        slashClass = "word-cell-slash-strong";
    } else if (strength === MIDDLE) {
        bgClass = "word-cell-middle";
        textBaseClass = "word-cell-text-base-middle";
        textSuffixClass = "word-cell-text-suffix-middle";
        slashClass = "word-cell-slash-middle";
    }

    if (typeof cellData === 'object' && cellData.userMarked) {
        bgClass = `${bgClass} word-cell-marked`;
    }

    // Custom Rules
    if (typeof cellData === 'object' && cellData.rule) {
        if (cellData.rule === 'long_a_before_v_or_m') {
            bgClass = `${bgClass} word-cell-border-black`;
        } else if (cellData.rule === 'del_previous_a') {
            bgClass = `${bgClass} word-cell-border-red`;
        }
    }

    return (
        <button
            onClick={() => onClick(cellData)}
            className={`word-cell-btn ${bgClass}`}
        >
            {cellData.segments ? (
                // Derivation View: Source -> Target
                <div className="word-cell-derivation-container">
                    {/* Source */}
                    {sourceData && (
                        <div className="derivation-source">
                            {typeof sourceData === 'object' ? sourceData.t : sourceData}
                        </div>
                    )}

                    {/* Arrow 1 */}
                    {sourceData && (
                        <div className="derivation-arrow">↓</div>
                    )}

                    {/* Intermediate Step */}
                    {cellData.intermediate && (
                        <>
                            <div className="derivation-intermediate">
                                {cellData.intermediate}
                            </div>
                            <div className="derivation-arrow">↓</div>
                        </>
                    )}

                    {/* Target Segments */}
                    <div className="word-cell-segments-container">
                        {cellData.segments.map((seg, idx) => {
                            let segClass = "word-cell-text-base";
                            if (seg.type === "added") segClass = "derivation-segment-added";
                            if (seg.type === "modified") segClass = "derivation-segment-modified";

                            return (
                                <span key={idx} className={segClass}>
                                    {seg.text}
                                </span>
                            );
                        })}
                    </div>
                </div>
            ) : (
                // Standard Rendering
                parsedForms.map((part, idx) => {
                    // If base is empty (e.g. verbs currently), treat suffix as base color (black)
                    const effectiveSuffixClass = part.base ? textSuffixClass : textBaseClass;

                    return (
                        <span key={idx} className="word-text-wrapper">
                            <span className={textBaseClass}>{part.base}</span>
                            <span className={`${effectiveSuffixClass} font-medium`}>{part.suffix}</span>
                            {idx < parsedForms.length - 1 && <span className={`mx-1 ${slashClass}`}>/</span>}
                        </span>
                    );
                })
            )}
        </button>
    );
};

export default WordCell;
