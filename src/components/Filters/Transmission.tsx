import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
type TransmissionProps = {
  selectedTransmission: string | null;
  onTransmissionChange: (transmission: string) => void;
};
const Transmission: React.FC<TransmissionProps> = ({ selectedTransmission, onTransmissionChange }) => {
  const handleItemClick = (item: string) => {
    onTransmissionChange(item);
    console.log(`Clicked: ${item}`);
  };

  return (
    <div>
      <Accordion>
        {/* TRANSMISSION */}
        <AccordionTab header="TRANSMISSION">
          <div className="mb-4">
            <ul className="pl-4">
              <li
                className={`border border-gray-300 p-2 my-1 cursor-pointer ${
                  selectedTransmission === 'Automatic' ? 'bg-primary-blue text-white' : ''
                }`}
                onClick={() => handleItemClick('Automatic')}
              >
                Automatic
              </li>
              <li
                className={`border border-gray-300 p-2 my-1 cursor-pointer ${
                  selectedTransmission === 'Manual' ? 'bg-primary-blue text-white' : ''
                }`}
                onClick={() => handleItemClick('Manual')}
              >
                Manual
              </li>
              <li
                className={`border border-gray-300 p-2 my-1 cursor-pointer ${
                  selectedTransmission === 'EV' ? 'bg-primary-blue text-white' : ''
                }`}
                onClick={() => handleItemClick('EV')}
              >
                EV
              </li>
            </ul>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default Transmission;
