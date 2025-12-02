import React from 'react';
import { DATA } from '../data/sanskritData';

const TableControl = ({
    tableId,
    variant,
    gender,
    onTableChange,
    onVariantChange,
    onGenderChange
}) => {
    const rawTable = DATA[tableId];

    return (
        <div className="table-control p-4 bg-white rounded-lg shadow-sm border border-stone-100 mb-4">
            {/* Table Selector */}
            <div className="table-select-wrapper mb-4">
                <select
                    value={tableId}
                    onChange={(e) => onTableChange(e.target.value)}
                    className="table-select w-full"
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

            {/* Variant Selectors for Groups */}
            {rawTable.isGroup && (
                <div className="controls-container flex flex-col gap-3">
                    {/* Variant Tabs */}
                    <div className="variant-tabs flex flex-wrap gap-2">
                        {rawTable.variants.map(v => (
                            <button
                                key={v}
                                onClick={() => onVariantChange(v)}
                                className={`variant-tab px-3 py-1 rounded-full text-sm font-medium transition-colors ${variant === v
                                    ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                                    : 'bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200'
                                    }`}
                            >
                                {v}
                            </button>
                        ))}
                    </div>

                    {/* Gender Tabs for Pronouns */}
                    <div className="gender-tabs flex flex-wrap gap-2">
                        {["ALL", "M", "N", "F"].map(g => (
                            <button
                                key={g}
                                onClick={() => onGenderChange(g)}
                                className={`gender-tab px-3 py-1 rounded-full text-sm font-medium transition-colors ${gender === g
                                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                    : 'bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200'
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
