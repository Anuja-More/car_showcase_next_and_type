"use client";
import React from 'react';
import Link from 'next/link';

const Card = ({ carData }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-xl font-semibold">{carData.make} {carData.model}</h2>
      <p>Year: {carData.year}</p>
      <p>City MPG: {carData.city_mpg}</p>
      <p>Highway MPG: {carData.highway_mpg}</p>
      {/* Display images */}
      <img src={carData.top_view_image} alt="Top View" />
      <img src={carData.left_view_image} alt="Left View" />
      <img src={carData.right_view_image} alt="Right View" />
      <img src={carData.front_view_image} alt="Front View" />
      {/* Add an "Edit" button */}
      <Link href={`/edit_cars/${carData._id}`} className="text-blue-500 hover:underline">
        Edit
      </Link>
    </div>
  );
}

export default Card;
