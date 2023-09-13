// FilterSidebar.tsx

import React from 'react';
import { locationData } from '@src/constants';
import { Accordion, AccordionTab } from 'primereact/accordion';

const Location: React.FC = () => {
  return (
    <div>
      <Accordion>
        {/* BRAND AND MODEL */}
        <AccordionTab header="LOCATION">
          <div className="max-h-40 overflow-y-auto">
            <ul className="pl-4">
              {locationData.map((state, index) => (
                <li key={index}>{state}</li>
              ))}
            </ul>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default Location;
