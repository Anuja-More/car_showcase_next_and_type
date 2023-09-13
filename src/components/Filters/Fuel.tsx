import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

type FuelType = string;

const Fuel: React.FC = () => {
  const [selectedFuels, setSelectedFuels] = useState<FuelType[]>([]);

  const handleFuelChange = (fuel: FuelType) => {
    if (selectedFuels.includes(fuel)) {
      setSelectedFuels(selectedFuels.filter((selectedFuel) => selectedFuel !== fuel));
    } else {
      setSelectedFuels([...selectedFuels, fuel]);
    }
  };

  return (
    <div>
      <Accordion>
        {/* FUEL */}
        <AccordionTab header="FUEL">
          <div>
            <span className="font-semibold">Choose from below options:</span>
            <ul className="pl-4 my-3">
              <li className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="petrol"
                  className="form-checkbox h-5 w-5 text-primary-blue"
                  checked={selectedFuels.includes('Petrol')}
                  onChange={() => handleFuelChange('Petrol')}
                />
                <label htmlFor="petrol">Petrol</label>
              </li>
              <li className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="diesel"
                  className="form-checkbox h-5 w-5 text-primary-blue"
                  checked={selectedFuels.includes('Diesel')}
                  onChange={() => handleFuelChange('Diesel')}
                />
                <label htmlFor="diesel">Diesel</label>
              </li>
              <li className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="lpg"
                  className="form-checkbox h-5 w-5 text-primary-blue"
                  checked={selectedFuels.includes('LPG')}
                  onChange={() => handleFuelChange('LPG')}
                />
                <label htmlFor="lpg">LPG</label>
              </li>
              <li className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="cngHybrids"
                  className="form-checkbox h-5 w-5 text-primary-blue"
                  checked={selectedFuels.includes('CNG & Hybrids')}
                  onChange={() => handleFuelChange('CNG & Hybrids')}
                />
                <label htmlFor="cngHybrids">CNG & Hybrids</label>
              </li>
              <li className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="electric"
                  className="form-checkbox h-5 w-5 text-primary-blue"
                  checked={selectedFuels.includes('Electric')}
                  onChange={() => handleFuelChange('Electric')}
                />
                <label htmlFor="electric">Electric</label>
              </li>
            </ul>
          </div>
          <button
            className="px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue-dark focus:outline-none focus:ring focus:ring-primary-blue-dark"
            onClick={() => {
              // Apply the selected fuel types
              console.log('Selected Fuels:', selectedFuels);
            }}
          >
            Apply
          </button>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default Fuel;
