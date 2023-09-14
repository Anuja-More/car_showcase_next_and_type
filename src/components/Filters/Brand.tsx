// Brand.tsx
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { brandNames } from '@src/constants';

type BrandProps = {
  selectedBrands: string[];
  onBrandCheckboxChange: (brandName: string) => void;
};

const Brand: React.FC<BrandProps> = ({ selectedBrands, onBrandCheckboxChange }) => {
  return (
    <div>
      <Accordion>
        {/* BRAND AND MODEL */}
        <AccordionTab header="BRAND">
          <ul className="pl-4 max-h-40 overflow-y-auto">
            {brandNames.map((brandName, index) => (
              <li key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={brandName}
                  className="form-checkbox h-5 w-5 text-primary-blue"
                  checked={selectedBrands.includes(brandName)}
                  onChange={() => onBrandCheckboxChange(brandName)}
                />
                <label htmlFor={brandName}>{brandName}</label>
              </li>
            ))}
          </ul>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default Brand;

