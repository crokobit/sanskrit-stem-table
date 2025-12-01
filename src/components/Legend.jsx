import React from 'react';

const Legend = () => (
    <div className="legend-box">
        <h4 className="legend-title">Stem Strength (ṛ-stems)</h4>
        <div className="legend-grid">
            <div className="legend-item-strong">
                <span className="font-bold">Strong</span> (強)
                <div className="text-[10px] text-stone-400 opacity-80">Nom/Acc Sg-Pl</div>
            </div>
            <div className="legend-item-middle">
                <span className="font-bold">Middle</span> (中)
                <div className="text-[10px] text-stone-500">Before consonants</div>
            </div>
            <div className="legend-item-weak">
                <span className="font-bold">Weak</span> (弱)
                <div className="text-[10px] text-stone-500">Before vowels</div>
            </div>
        </div>
    </div>
);

export default Legend;
