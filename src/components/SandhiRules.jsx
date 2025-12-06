import React, { useState, useEffect } from 'react';
import { SANDHI_DATA } from '../data/sandhiData';

const SandhiRules = () => {
    const [selectedSectionId, setSelectedSectionId] = useState(SANDHI_DATA[0]?.id);

    const currentSection = SANDHI_DATA.find(s => s.id === selectedSectionId);

    // If data changes (e.g. hot reload), ensure selection is valid
    useEffect(() => {
        if (!currentSection && SANDHI_DATA.length > 0) {
            setSelectedSectionId(SANDHI_DATA[0].id);
        }
    }, [currentSection]);

    return (
        <div className="sandhi-container">
            <div className="sandhi-controls">
                <select
                    className="sandhi-select"
                    value={selectedSectionId}
                    onChange={(e) => setSelectedSectionId(e.target.value)}
                >
                    {SANDHI_DATA.map(section => (
                        <option key={section.id} value={section.id}>
                            {section.title}
                        </option>
                    ))}
                </select>
            </div>

            {currentSection && currentSection.rules.map((item, index) => (
                <div key={index} className="sandhi-rule-block">
                    <div className="sandhi-rule-text">{item.rule}</div>
                    {item.examples.length > 0 && (
                        <ul className="sandhi-examples-list">
                            {item.examples.map((ex, i) => (
                                <li key={i} className="sandhi-example-item">
                                    <span
                                        className="sanskrit-text"
                                        dangerouslySetInnerHTML={{ __html: ex }}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SandhiRules;
