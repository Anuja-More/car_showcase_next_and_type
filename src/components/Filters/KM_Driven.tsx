import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Slider } from 'primereact/slider';

type SliderValue = [number, number];
type SliderOnChange = (e: { value: SliderValue }) => void;

const KMDriven: React.FC = () => {
  const [selectedKMDriven, setSelectedKMDriven] = useState<SliderValue>([0, 200000]);

  const handleKMDrivenChange: SliderOnChange = (e) => {
    setSelectedKMDriven(e.value);
  };

  return (
    <div>
      <Accordion>
        {/* KM DRIVEN */}
        <AccordionTab header="KM DRIVEN">
          <div>
            <div className="mb-4">
              <span className="font-semibold">Choose from options below (km):</span>
              <ul className="pl-4">
                <li className="border border-gray-300 p-2 my-1">Below 25000 km</li>
                <li className="border border-gray-300 p-2 my-1">25000 km - 50000 km</li>
                <li className="border border-gray-300 p-2 my-1">50000 km - 75000 km</li>
                <li className="border border-gray-300 p-2 my-1">75000 km - 100000 km</li>
                <li className="border border-gray-300 p-2 my-1">100000 km and Above</li>
              </ul>
            </div>
            <div className="mb-4">
              <span className="font-semibold">Choose a range below (km):</span>
              <div className="flex items-center space-x-4">
                <span>0</span>
                <Slider
                  range
                  value={selectedKMDriven}
                  onChange={handleKMDrivenChange}
                  min={0}
                  max={200000}
                  step={10000}
                  style={{ width: '80%' }}
                />
                <span>2,00,000+</span>
              </div>
            </div>
            <button
              className="px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue-dark focus:outline-none focus:ring focus:ring-primary-blue-dark"
              onClick={() => {
                console.log('Selected KM Driven:', selectedKMDriven);
              }}
            >
              Apply
            </button>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default KMDriven;
