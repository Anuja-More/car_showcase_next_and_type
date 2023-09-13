"use client";
import React from 'react';
import Budget from './Filters/Budget';
import KMDriven from './Filters/KM_Driven';
import NoOfOwners from './Filters/NoOfOwners';
import Fuel from './Filters/Fuel';
import Location from './Filters/Location';
import Transmission from './Filters/Transmission';
import Brand from './Filters/Brand';

const FilterSidebar = () => {
    return (
        <div className="lg:w-1/4 xl:w-1/4 p-4 bg-gray-100">
            <Location />
            <Brand />
            <Budget />
            <KMDriven />
            <NoOfOwners />
            <Fuel />
            <Transmission />
        </div>
    );
};

export default FilterSidebar;
