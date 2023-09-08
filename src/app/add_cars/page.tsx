"use client";
import React, { useState } from 'react';
import CarForm from '@src/components/CarForm';

const AddCars = () => {
  const [isFormVisible, setFormVisibility] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  return (
    <div className="container">
       <div className="flex justify-between items-center mb-4 mx-8">
        <h1 className="text-2xl font-semibold">Car Information Form</h1>
        <button
          onClick={toggleFormVisibility}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Add Car
        </button>
      </div>

      {isFormVisible && <CarForm toggleFormVisibility={toggleFormVisibility} />}
    </div>
  );
};

export default AddCars;
