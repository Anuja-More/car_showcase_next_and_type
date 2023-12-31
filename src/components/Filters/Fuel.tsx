import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

type FuelType = string;
interface FuelProps {
  selectedFuels: FuelType[];
  onFuelChange: (selected: FuelType[]) => void;
}
const Fuel: React.FC<FuelProps> = ({ selectedFuels, onFuelChange }) => {
  const handleFuelChange = (fuel: FuelType) => {
    if (selectedFuels.includes(fuel)) {
      onFuelChange(selectedFuels.filter((selectedFuel) => selectedFuel !== fuel));
    } else {
      onFuelChange([...selectedFuels, fuel]);
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
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default Fuel;
