import React from 'react';
import { Card } from '@src/components';
import Link from 'next/link';

const getCars = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/cardata", { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch car data");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading cars:", error);
    return [];
  }
}

const AddedCars = async () => {
  const { carData } = await getCars();

  return (
    <div className="container mx-auto py-5 px-10">
      <h1 className="text-3xl font-semibold mb-4 text-center">PreOwned Cars</h1>
      <Link href="/add_cars" className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 mb-4 inline-block">
          Add Cars
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {carData && carData.length > 0 ? (
          carData.map((car, index) => (
            <Card key={index} carData={car} />
          ))
        ) : (
          <p className="text-center text-gray-600">No cars available.</p>
        )}
      </div>
    </div>
  );
}

export default AddedCars;

