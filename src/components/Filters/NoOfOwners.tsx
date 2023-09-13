import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

// Create a custom type for the selected number of owners
type OwnerType = string;

const NoOfOwners: React.FC = () => {
  const [selectedOwners, setSelectedOwners] = useState<OwnerType[]>([]);

  const handleOwnerChange = (owner: OwnerType) => {
    if (selectedOwners.includes(owner)) {
      setSelectedOwners(selectedOwners.filter((selectedOwner) => selectedOwner !== owner));
    } else {
      setSelectedOwners([...selectedOwners, owner]);
    }
  };

  return (
    <div>
      <Accordion>
        {/* No Of Owners */}
        <AccordionTab header="No Of Owners">
          <div>
            <span className="font-semibold">Choose from options below:</span>
            <ul className="pl-4 my-3">
              <li className="flex items-center space-x-2 my-1">
                <input
                  type="checkbox"
                  id="firstOwner"
                  className="form-checkbox h-5 w-5 text-primary-blue"
                  checked={selectedOwners.includes('First')}
                  onChange={() => handleOwnerChange('First')}
                />
                <label htmlFor="firstOwner">First</label>
              </li>
              <li className="flex items-center space-x-2 my-1">
                <input
                  type="checkbox"
                  id="secondOwner"
                  className="form-checkbox h-5 w-5 text-primary-blue"
                  checked={selectedOwners.includes('Second')}
                  onChange={() => handleOwnerChange('Second')}
                />
                <label htmlFor="secondOwner">Second</label>
              </li>
              <li className="flex items-center space-x-2 my-1">
                <input
                  type="checkbox"
                  id="thirdOwner"
                  className="form-checkbox h-5 w-5 text-primary-blue"
                  checked={selectedOwners.includes('Third')}
                  onChange={() => handleOwnerChange('Third')}
                />
                <label htmlFor="thirdOwner">Third</label>
              </li>
              <li className="flex items-center space-x-2 my-1">
                <input
                  type="checkbox"
                  id="moreThanFourOwners"
                  className="form-checkbox h-5 w-5 text-primary-blue"
                  checked={selectedOwners.includes('More than Four')}
                  onChange={() => handleOwnerChange('More than Four')}
                />
                <label htmlFor="moreThanFourOwners">More than Four</label>
              </li>
            </ul>
          </div>
          <button
            className="px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue-dark focus:outline-none focus:ring focus:ring-primary-blue-dark"
            onClick={() => {
              // Apply the selected number of owners
              console.log('Selected Owners:', selectedOwners);
            }}
          >
            Apply
          </button>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default NoOfOwners;
