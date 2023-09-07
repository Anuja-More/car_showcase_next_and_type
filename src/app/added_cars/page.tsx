import React from 'react'
import { Card } from '@src/components';

const getCars = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/cardata", { cache: "no-store" });
      if (!res.ok) {
        throw new Error("failed to fetch new car data");
      }
      return res.json();
    } catch (error) {
      console.log("error loading cars:", error);
      return [];
    }
  }

const AddedCars = async () => {
 const { carData} = await getCars();

  return (
    <div className="container mx-auto py-5 px-10">
      <h1 className="text-2xl font-semibold mb-4">Car Data</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {carData && carData.length > 0 && carData.map((car, index) => (
          <Card key={index} carData={car} />
        ))}
      </div>
    </div>
  )
}

export default AddedCars;
