import React from 'react';
import { DATA } from '../data/sanskritData';
import { formatStemLabel } from '../utils/sanskritUtils';

const TableControl = ({
    tableId,
    variant,
    gender,
    onTableChange,
    onVariantChange,
    onGenderChange,
    data = DATA, // Default to noun data for backward compatibility if needed
    mode = 'noun'
}) => {
    const rawTable = data[tableId];

    return (
        <div className="table-control-container">
            {/* Table Selector */}
            <div className="table-select-wrapper">
                {mode === 'verb' ? (
                    <div className="table-control-group">
                        {Object.values(data).map(t => (
                            <button
                                key={t.id}
                                onClick={() => onTableChange(t.id)}
                                className={`table-selector-btn ${tableId === t.id
                                    ? 'table-selector-btn-active'
                                    : 'table-selector-btn-inactive'
                                    }`}
                            >
                                {t.name ? t.name.substring(0, 2) : t.id}
                            </button>
                        ))}
                    </div>
                ) : (
                    <>
                        <select
                            value={tableId}
                            onChange={(e) => onTableChange(e.target.value)}
                            className="table-select w-full"
                        >
                            {Object.values(data).filter(t => !t.excludeFromDropdown || t.id === tableId).map(t => (
                                <option key={t.id} value={t.id}>
                                    {t.name ? t.name : `${formatStemLabel(t)} — ${t.example ? (t.shortStem === '-ṛ' ? t.example : t.example.replace(/\s*\(.*?\)\s*/g, '')) : ''}`}
                                </option>
                            ))}
                        </select>
                        <div className="table-select-icon">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </>
                )}
            </div>

            {/* Variant Selectors for Groups */}
            {rawTable.isGroup && (
                <div className="controls-container table-control-row">
                    {/* Variant Tabs */}
                    <div className="variant-tabs table-control-tabs">
                        {rawTable.variants.map(v => (
                            <button
                                key={v}
                                onClick={() => onVariantChange(v)}
                                className={`variant-tab-btn ${variant === v
                                    ? 'variant-tab-btn-active'
                                    : 'variant-tab-btn-inactive'
                                    }`}
                            >
                                {v}
                            </button>
                        ))}
                    </div>

                    {/* Gender Tabs for Pronouns */}
                    <div className="gender-tabs table-control-tabs">
                        {["ALL", "M", "N", "F"].map(g => (
                            <button
                                key={g}
                                onClick={() => onGenderChange(g)}
                                className={`gender-tab-btn ${gender === g
                                    ? 'gender-tab-btn-active'
                                    : 'gender-tab-btn-inactive'
                                    }`}
                            >
                                {g === "ALL" ? "All Genders" : (g === "M" ? "Masculine" : (g === "N" ? "Neuter" : "Feminine"))}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TableControl;
