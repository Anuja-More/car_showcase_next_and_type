// FilterSidebar.tsx

import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

const Transmission: React.FC = () => {
  return (
    <div> 
<Accordion>
        {/* TRANSMISSION */}
        <AccordionTab header="TRANSMISSION">
        <div className="mb-4">
              <ul className="pl-4">
                <li className="border border-gray-300 p-2 my-1">Automatic</li>
                <li className="border border-gray-300 p-2 my-1">Manual</li>
                <li className="border border-gray-300 p-2 my-1">EV</li>
              </ul>
            </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default Transmission;
