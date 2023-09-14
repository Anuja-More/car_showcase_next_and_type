// Location.tsx
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

type YearsProps = {
    selectedYear: number | null;
    onYearClick: (year: number) => void;
  };
const yearsData = Array.from({ length: 24 }, (_, index) => 2000 + index);

const Year: React.FC<YearsProps> = ({ selectedYear, onYearClick }) => {
  return (
    <div>
      <Accordion>
        {/* LOCATION */}
        <AccordionTab header="YEAR">
          <div className="max-h-40 overflow-y-auto">
            <ul className="pl-4">
              {yearsData.map((year, index) => (
                <li
                  key={index}
                  onClick={() => onYearClick(year)}
                  className={`cursor-pointer ${
                    selectedYear === year ? 'bg-blue-400 text-white' : ''
                  }`}
                >
                  {year}
                </li>
              ))}
            </ul>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default Year;
