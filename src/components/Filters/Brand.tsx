// FilterSidebar.tsx
import { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { brandNames } from '@src/constants';

const Brand: React.FC = () => {
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

    const handleBrandCheckboxChange = (brandName: string) => {
      setSelectedBrands((prevSelectedBrands) => {
        if (prevSelectedBrands.includes(brandName)) {
          // If the brand is already selected, remove it from the list.
          return prevSelectedBrands.filter((name) => name !== brandName);
        } else {
          // Otherwise, add the brand to the selected list.
          return [...prevSelectedBrands, brandName];
        }
      });
    };
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
                    onChange={() => handleBrandCheckboxChange(brandName)}
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
