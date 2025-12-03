import React from 'react';

const Legend = ({ stemStrength }) => (
    <div className="legend-box">
        <div className="legend-grid">
            {stemStrength?.strong && (
                <div className="legend-item-strong">
                    <div className="text-sm font-serif sanskrit-text mt-1">{stemStrength.strong}</div>
                </div>
            )}
            {stemStrength?.middle && (
                <div className="legend-item-middle">
                    <div className="text-sm font-serif sanskrit-text mt-1">{stemStrength.middle}</div>
                </div>
            )}
            {stemStrength?.weak && (
                <div className="legend-item-weak">
                    <div className="text-sm font-serif sanskrit-text mt-1">{stemStrength.weak}</div>
                </div>
            )}
        </div>
    </div>
);

export default Legend;
