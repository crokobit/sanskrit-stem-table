import React, { useState } from 'react';
import { ROOT_DATA } from '../data/rootData';

const RootView = () => {
    const [selectedClass, setSelectedClass] = useState(1);
    const currentClassData = ROOT_DATA[selectedClass];

    return (
        <div className="root-view-container">
            {/* Class Selector */}
            <div className="root-class-selector">
                {Object.keys(ROOT_DATA).map((classNum) => (
                    <button
                        key={classNum}
                        onClick={() => setSelectedClass(Number(classNum))}
                        className={`root-class-btn ${selectedClass === Number(classNum) ? 'root-class-btn-active' : 'root-class-btn-inactive'}`}
                    >
                        {classNum}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="root-content-area">
                <h2 className="root-class-title">{currentClassData.label}</h2>
                <p className="root-class-description">{currentClassData.description}</p>

                {currentClassData.items.length > 0 ? (
                    <div className="root-items-grid">
                        {currentClassData.items.map((item, index) => (
                            <div key={index} className="root-item-card">
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
