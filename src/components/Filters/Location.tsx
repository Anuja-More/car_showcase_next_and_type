// Location.tsx
import React from 'react';
import { locationData } from '@src/constants';
import { Accordion, AccordionTab } from 'primereact/accordion';

type LocationProps = {
  selectedLocation: string | null;
  onLocationClick: (location: string) => void;
};

const Location: React.FC<LocationProps> = ({ selectedLocation, onLocationClick }) => {
  return (
    <div>
      <Accordion>
        {/* LOCATION */}
        <AccordionTab header="LOCATION">
          <div className="max-h-40 overflow-y-auto">
            <ul className="pl-4">
              {locationData.map((state, index) => (
                <li
                  key={index}
                  onClick={() => onLocationClick(state)}
                  className={`cursor-pointer ${
                    selectedLocation === state ? 'bg-blue-400 text-white' : ''
                  }`}
                >
                  {state}
                </li>
              ))}
            </ul>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default Location;
