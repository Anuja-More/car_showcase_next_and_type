"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CarCardProps } from '@src/types';
import RemoveCars from './RemoveCars';
interface carProps {
  carData: CarCardProps;
}


const Card = ({ carData }: carProps) => {
  const router = useRouter();
  const navigateToCarDetails = () =>{
    router.push(`/added_cars/${carData.make}/${carData.model}/${carData._id}`)
  }
  return (
    <div onClick={navigateToCarDetails} className="bg-white shadow-md rounded-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="relative overflow-hidden rounded-md h-40">
        <Image
          src={carData.front_view_image}
          alt="Top View"
          fill priority
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="text-xl font-semibold mt-2">
        {carData?.make} {carData?.model}
      </h2>
      <h3 className="font-semibold m-2">
       $ {carData?.resell_price}
      </h3>
      <p className="text-gray-600"><i className="pi pi-users text-blue-300 mx-2"></i> {carData?.no_of_owners} owner</p>
      <p className="text-gray-600"><i className="pi pi-bolt text-yellow-500 mx-2"></i> {carData?.km_driven} km</p>
      <p className="text-gray-600"><i className="pi pi-globe text-green-500 mx-2"></i>{" "}{carData?.owner?.address}</p>
      <p className="text-gray-600"><i className="pi pi-phone text-red-400 mx-2"></i>{carData?.owner?.phone_number}</p>
      <p className="text-gray-600"><i className="pi pi-calendar-plus text-purple-300 mx-2"></i>
          {carData?.createdAt ? new Date(carData.createdAt).toLocaleDateString() : ''}
      </p>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src="/steering-wheel.svg" width={20} height={20}
              alt="steering wheel" />
            <p className='text-[14px]'>
              {carData.transmission}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src="/tire.svg" width={20} height={20}
              alt="tire" />
            <p className='text-[14px]'>
              {carData.year}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src="/gas.svg" width={20} height={20}
              alt="steering wheel" />
            <p className='text-[14px]'>
              {carData.fuel_type}
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <Link href={`/edit_cars/${carData._id}`} className="text-blue-500 hover:underline">
        <i className="pi pi-user-edit" style={{ color: 'var(--primary-color)' }}></i>
        </Link>
        <RemoveCars id={carData._id} />
      </div>
    </div>
  );
};

export default Card;
