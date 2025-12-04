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
        <div className="table-control p-4 bg-white rounded-lg shadow-sm border border-stone-100 mb-4">
            {/* Table Selector */}
            <div className="table-select-wrapper mb-4">
                {mode === 'verb' ? (
                    <div className="flex flex-wrap gap-2">
                        {Object.values(data).map(t => (
                            <button
                                key={t.id}
                                onClick={() => onTableChange(t.id)}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${tableId === t.id
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
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
                            {Object.values(data).map(t => (
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
