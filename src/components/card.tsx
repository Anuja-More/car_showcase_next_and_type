import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CarCardProps } from '@src/types';
import RemoveCars from './RemoveCars';
interface carProps {
    carData: CarCardProps;
}

const Card = ({ carData }: carProps) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="relative overflow-hidden rounded-md h-40">
        <Image
          src={carData.front_view_image}
          alt="Top View"
          fill priority
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="text-xl font-semibold mt-2">
        {carData.make} {carData.model}
      </h2>
      <p className="text-gray-600">Year: {carData.year}</p>
      <p className="text-gray-600">City MPG: {carData.city_mpg}</p>
      <p className="text-gray-600">Highway MPG: {carData.highway_mpg}</p>
      <div className="flex justify-between mt-4">
        <Link href={`/edit_cars/${carData._id}`} className="text-blue-500 hover:underline">
          Edit
        </Link>
        <RemoveCars id={carData._id} />
      </div>
    </div>
  );
};

export default Card;
