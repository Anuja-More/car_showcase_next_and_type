"use client"
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { generateCarImageUrl } from '@src/utils';
import { FetchCarDetails } from '@src/utils';
import {LoaderComp} from '@src/components';
import Image from 'next/image';
import { CustomButton } from '@src/components';

const CarDetailsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const makeValue = searchParams.get("make");
  const modelValue = searchParams.get("model");
  const modelYear = searchParams.get("year");
  const combination_mpg = searchParams.get("combination_mpg");
  const [allCars, setAllCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const cars = await FetchCarDetails({
          manufacturer: makeValue || "",
          model: modelValue || "",
          year: modelYear || "",
        });
        const filteredCars = combination_mpg
        ? cars.filter((car) => car.combination_mpg === Number(combination_mpg))
        : cars;
        // Set the car details in state
        setAllCars(filteredCars);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    fetchCarData();
  }, [makeValue, modelValue, modelYear]);

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className='m-4'>
         {isLoading ? ( // Conditional rendering based on isLoading state
        <LoaderComp/>
      ) : (
      allCars?.map((car, index) => (
        <div key={index} className="m-8 justify-center items-center">
          <div className='flex-1 flex flex-col gap-3'>
           <div className='relative w-full  h-40 bg-pattern bg-cover bg-center
            rounded-lg'>
            <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
           </div>
           <div className='flex gap-3'>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image src={generateCarImageUrl(car, "29")} alt='car model' fill priority className='object-contain' />
                    </div>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image src={generateCarImageUrl(car, "33")} alt='car model' fill priority className='object-contain' />
                    </div>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image  src={generateCarImageUrl(car, "13")} alt='car model' fill priority className='object-contain' />
                    </div>
                  </div>
         </div>
         <div className='flex-1 flex flex-col gap-2 m-5'>
            <h2 className='font-semibold text-xl capitalize'>
                {car?.make} {car?.model}
            </h2>
            <div className='mt-3 flex flex-wrap gap-4'>
            {Object.entries(car).map(([key, value]) => (
                      <div className='flex justify-between gap-3 w-full text-right' key={key} >
                        <h4 className='text-grey capitalize'>
                          {key.split("_").join(" ")}
                        </h4>
                        <p className='text-black-100 font-semibold'>
                          {value}
                        </p>
                      </div>
                    ))}
            </div>
         </div>
        </div>
      ))
      )}
      <div className='flex justify-between'>
      <CustomButton  title='Back'
            containerStyles='m-4 py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold' handleClick={handleGoBack} />
            <CustomButton  title='Contact now for booking'
            containerStyles='m-4 py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold' handleClick={handleGoBack} />
      </div>
    </div>
  );
};
export default CarDetailsPage