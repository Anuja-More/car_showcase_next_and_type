import React from 'react';
import { Card } from '@src/components';
import { FilterSidebar } from '@src/components';
import Link from 'next/link';

let apiUrl: string;
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://car-showcase-next-and-type-1u4i-anuja-more.vercel.app/api/cardata";
} else {
  apiUrl = "http://localhost:3000/api/cardata";
}
export async function generateMetadata() {
  return {
    title: 'Pre owned cars',
    description: 'Explore the finest selection of pre-owned cars and easily connect with sellers. Stay updated with the latest automotive news and buying guides.',
  }
}
const getCars = async () => {
  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch car data");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading cars:", error);
    return [];
  }
}

const AddedCars = async ({ searchParams }) => {
  const { transmission, owners, fuels, kmdriven, budget, brands, location, year } = searchParams
  const { carData } = await getCars();

  const filteredCars = carData.filter((car) => {
    const carYear = car?.year;
    const carFuelType = car?.fuel_type?.toLowerCase();
    const carTransmission = car?.transmission?.toLowerCase();
    const carOwners = car?.no_of_owners?.toLowerCase();
    const carResell_price = car?.resell_price?.toLowerCase();
    // const carKmDriven = car?.km_driven?.toLowerCase();
    const carMake = car?.make?.toLowerCase();
    const carLocation = car?.owner?.address?.toLowerCase();

    // Check each condition individually, if it exists in searchParams
    if (transmission && carTransmission !== transmission) return false;
    if (owners && carOwners !== owners) return false;
    if (fuels && carFuelType !== fuels) return false;
    if (year && carYear !== year) return false;
    // if (kmdriven && carKmDriven !== kmdriven) return false;
    if (budget && carResell_price > budget) return false;
    if (brands && carMake !== brands) return false;
    if (location && carLocation !== location) return false;

    return true;
  });

  return (
    <div className="container mx-auto py-5 px-10">
      <h1 className="text-3xl font-semibold mb-4 text-center">PreOwned Cars</h1>
      <div className="text-right">
        <Link
          href="/add_cars"
          className="bg-primary-blue px-4 py-2 rounded-md text-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 mb-4 inline-block text-white text-[14px] leading-[17px] font-bold"
        >
          Sell a Car
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row xl:flex-row">
        <FilterSidebar />
        {searchParams && filteredCars && (
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCars && filteredCars.length > 0 ? (
                filteredCars.map((car, index) => (
                  <Card key={index} carData={car} />
                ))
              ) : (
                <p className="text-center text-gray-600">No cars available.</p>
              )}
            </div>
          </div>
        )}
        {!searchParams && (<div className="w-full lg:w-3/4 xl:w-3/4 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4">
            {carData && carData.length > 0 ? (
              carData.map((car, index) => (
                <Card key={index} carData={car} />
              ))
            ) : (
              <p className="text-center text-gray-600">No cars available.</p>
            )}
          </div>
        </div>)}
      </div>
    </div>
  );
}

export default AddedCars;

