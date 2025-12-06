import React, { useState } from 'react';
import { ROOT_DATA } from '../data/rootData';

const RootView = () => {
    const [selectedClass, setSelectedClass] = useState('1');
    const currentClassData = ROOT_DATA[selectedClass];

    return (
        <div className="root-view-container">
            {/* Class Selector */}
            <div className="root-class-selector">
                {Object.keys(ROOT_DATA).map((classNum) => (
                    <button
                        key={classNum}
                        onClick={() => setSelectedClass(classNum)}
                        className={`root-class-btn ${selectedClass === classNum ? 'root-class-btn-active' : 'root-class-btn-inactive'}`}
                    >
                        {ROOT_DATA[classNum].label}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="root-content-area">
                <h2 className="root-class-title">{currentClassData.label}</h2>
                <p className="root-class-description">{currentClassData.description}</p>

                {currentClassData.items.length > 0 ? (
                    <div className="root-groups-container">
                        {currentClassData.items.map((group, groupIndex) => (
                            <div key={groupIndex} className="root-group">
                                {group.description && (
                                    <h3 className="root-group-title">{group.description}</h3>
                                )}
                                <div className="root-items-grid">
                                    {group.exceptions && group.exceptions.map((item, itemIndex) => (
                                        <div key={itemIndex} className="root-item-card">
                                            <div className="root-item-info">
                                                <span className="root-item-value">{item.root.value}</span>
                                                <span className="root-item-type">【{item.root.type}】</span>
                                                <span className="root-item-def">{item.root.def}</span>
                                            </div>
                                            <div className="root-item-arrow">→</div>
                                            <div className="root-item-form">{item.form}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="root-empty-state">
                        No data available for this class yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default RootView;
