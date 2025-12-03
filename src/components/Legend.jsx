import React from 'react';

const Legend = ({ stemStrength }) => (
    <div className="legend-box">
        <h4 className="legend-title">Stem Strength</h4>
        <div className="legend-grid">
            {stemStrength?.strong && (
                <div className="legend-item-strong">
                    <span className="font-bold">Strong</span> (強)
                    <div className="text-sm font-serif sanskrit-text mt-1">{stemStrength.strong}</div>
                </div>
            )}
            {stemStrength?.middle && (
                <div className="legend-item-middle">
                    <span className="font-bold">Middle</span> (中)
                    <div className="text-sm font-serif sanskrit-text mt-1">{stemStrength.middle}</div>
                </div>
            )}
            {stemStrength?.weak && (
                <div className="legend-item-weak">
                    <span className="font-bold">Weak</span> (弱)
                    <div className="text-sm font-serif sanskrit-text mt-1">{stemStrength.weak}</div>
                </div>
            )}
        </div>
    </div>
);

export default Legend;
