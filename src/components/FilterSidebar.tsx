"use client";
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NoOfOwners from './Filters/NoOfOwners';
import Fuel from './Filters/Fuel';
import Location from './Filters/Location';
import Transmission from './Filters/Transmission';
import Brand from './Filters/Brand';
import Year from './Filters/Year';

const FilterSidebar = () => {
    const router = useRouter();
    const [selectedOwners, setSelectedOwners] = useState<string[]>([]);
    const [selectedFuels, setSelectedFuels] = useState<string[]>([]);
    const [selectedTransmission, setSelectedTransmission] = useState<string | null>(null);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
    const [selectedYear, setSelectedYear] = useState<number | null>(null);

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
    const handleLocationClick = (location: string) => {
        setSelectedLocation(location);
    };
    const handleYearClick = (year: number) => {
        setSelectedYear(year);
    };
    const handleOwnerChange = (selected: string[]) => {
        setSelectedOwners(selected);
    };

    const handleFuelChange = (selected: string[]) => {
        setSelectedFuels(selected);
    };
    const handleTransmissionChange = (transmission: string) => {
        setSelectedTransmission(transmission);
    };

    const generateQuery = () => {
        const ownersQuery = selectedOwners.map(owner => `owners=${encodeURIComponent(owner.toLowerCase())}`).join('&');
        const fuelsQuery = selectedFuels.map(fuel => `fuels=${encodeURIComponent(fuel.toLowerCase())}`).join('&');
        const transmissionQuery = selectedTransmission ? `transmission=${encodeURIComponent(selectedTransmission.toLowerCase())}` : '';
        const brandsQuery = selectedBrands.map(brand => `brands=${encodeURIComponent(brand.toLowerCase())}`).join('&');
        const locationQuery = selectedLocation ? `location=${encodeURIComponent(selectedLocation.toLowerCase())}` : '';
        const yearQuery = selectedYear ? `year=${encodeURIComponent(selectedYear)}` : '';
      
        // Combine all filter queries
        const filterQuery = [
          ownersQuery,
          fuelsQuery,
          yearQuery,
          transmissionQuery,
          brandsQuery,
          locationQuery
        ].filter(query => query !== '').join('&');
      
        return filterQuery;
      };
      

    const handleSave = () => {
        const filterQuery = generateQuery();
        router.push(`\added_cars?${filterQuery}`);
        console.log('Generated Query:', filterQuery);
    };

    const handleClearAll = () => {
        setSelectedOwners([]);
        setSelectedFuels([]);
        setSelectedTransmission(null);
        setSelectedBrands([]);
        setSelectedYear(null)
        setSelectedLocation(null);
        router.push(`\added_cars`);
    };
    return (
        <div className="lg:w-1/4 xl:w-1/4 p-4 bg-gray-100">
            <Location
                selectedLocation={selectedLocation}
                onLocationClick={handleLocationClick}
            />
           
            <Year selectedYear={selectedYear}
                onYearClick={handleYearClick} />
            <Brand selectedBrands={selectedBrands} onBrandCheckboxChange={handleBrandCheckboxChange} />
            <NoOfOwners selectedOwners={selectedOwners} onOwnerChange={handleOwnerChange} />
            <Fuel selectedFuels={selectedFuels} onFuelChange={handleFuelChange} />
            <Transmission selectedTransmission={selectedTransmission} onTransmissionChange={handleTransmissionChange} />
            <div className="mt-4">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
                    onClick={handleSave}
                >
                    Save
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                    onClick={handleClearAll}
                >
                    Clear All
                </button>
            </div>
        </div>
    );
};

export default FilterSidebar;
