import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Slider } from 'primereact/slider';

const Budget: React.FC = () => {
    const [selectedBudget, setSelectedBudget] = useState<number[]>([0, 950000]);

    const handleBudgetChange = (e) => {
        setSelectedBudget(e.value);
    };

    return (
        <div>
            <Accordion>
                {/* BUDGET */}
                <AccordionTab header="BUDGET">
                    <div>
                        <div className="mb-4">
                            <span className="font-semibold">Choose from options below:</span>
                            <ul className="pl-4">
                                <li className="border border-gray-300 p-2 my-1">Below 1 Lac</li>
                                <li className="border border-gray-300 p-2 my-1">1 Lac - 2 Lac</li>
                                <li className="border border-gray-300 p-2 my-1">2 Lac - 3 Lac</li>
                                <li className="border border-gray-300 p-2 my-1">3 Lac - 5 Lac</li>
                                <li className="border border-gray-300 p-2 my-1">5 Lac and Above</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <span className="font-semibold">Choose a range below:</span>
                            <div className="flex items-center space-x-4">
                                <span>0</span>
                                <Slider
                                    range
                                    value={selectedBudget}
                                    onChange={handleBudgetChange}
                                    min={0}
                                    max={950000}
                                    step={10000}
                                    style={{ width: '80%' }}
                                />
                                <span>9,50,000</span>
                            </div>
                        </div>
                    </div>
                </AccordionTab>
            </Accordion>
        </div>
    );
};

export default Budget;
