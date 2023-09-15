import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

type OwnerType = string;
interface NoOfOwnersProps {
  selectedOwners: OwnerType[];
  onOwnerChange: (selected: OwnerType[]) => void;
}
const NoOfOwners: React.FC<NoOfOwnersProps> = ({ selectedOwners, onOwnerChange }) => {

  const handleOwnerChange = (owner: OwnerType) => {
    if (selectedOwners.includes(owner)) {
      onOwnerChange(selectedOwners.filter((selectedOwner) => selectedOwner !== owner));
    } else {
      onOwnerChange([...selectedOwners, owner]);
    }
  };

  return (
    <div>
      <Accordion>
        {/* No Of Owners */}
        <AccordionTab header="NO OF OWNERS">
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
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default NoOfOwners;
