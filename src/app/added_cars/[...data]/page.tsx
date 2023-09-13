"use client";
import { useEffect, useState } from 'react';
import { useRouter} from "next/navigation";
import { Carousel } from 'primereact/carousel';
import { CarCardProps } from '@src/types';
import {FilterSidebar} from '@src/components';
import { LoaderComp } from '@src/components';
import Image from 'next/image';
import { CustomButton } from '@src/components';


const PreOwnedDetailspage = ({ params }: { params: { data: string[] } }) => {
    console.log(params);
    const router = useRouter();
    const [carInfo, setCarInfo] = useState<CarCardProps[]>([]);
    console.log(carInfo);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            let apiUrl: string;
            if (process.env.NODE_ENV === "production") {
                apiUrl = `https://car-showcase-next-and-type-1u4i-anuja-more.vercel.app/api/cardata/${params.data[2]}`;
            } else {
                apiUrl = `http://localhost:3000/api/cardata/${params.data[2]}`;
            }

            try {
                const res = await fetch(apiUrl);
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                setCarInfo([data.carData]);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [params.data[2]]);
    const handleGoBack = () => {
        router.push("/added_cars");
    };
    const handleContactNav = () => {
        router.push("/contact_us");
    };

    return (
        <div className='m-4'>
            {isLoading ? (
                <LoaderComp />
            ) : (
                carInfo && carInfo.length > 0 && carInfo?.map((car, index) => (
                    <div key={index} className="m-8 justify-center items-center">
                        <div className='flex-1 flex flex-col gap-3'>
                        <Carousel
                            value={[car.top_view_image, car.front_view_image, car.left_view_image, car.right_view_image]}
                            itemTemplate={(item) => (
                                <div className='relative w-full h-80 bg-pattern bg-cover bg-center rounded-lg'>
                                    <Image src={item} alt='car model' fill priority className='object-contain'/>
                                </div>
                            )}
                        />
                        </div>
                        <div className='mt-3'>
                            <div className='flex justify-between w-full text-right my-2'>
                                <h4 className='text-grey capitalize'>City mpg</h4>
                                <p className='text-black-100 font-semibold'>{car.city_mpg}</p>
                            </div>
                            <div className='flex justify-between w-full text-right my-2'>
                                <h4 className='text-grey capitalize'>Kilometers Driven</h4>
                                <p className='text-black-100 font-semibold'>{car.km_driven}</p>
                            </div>
                            <div className='flex justify-between w-full text-right my-2'>
                                <h4 className='text-grey capitalize'>Number of Owners</h4>
                                <p className='text-black-100 font-semibold'>{car.no_of_owners}</p>
                            </div>
                            <div className='flex justify-between w-full text-right my-2'>
                                <h4 className='text-grey capitalize'>Combination mpg</h4>
                                <p className='text-black-100 font-semibold'>{car.combination_mpg}</p>
                            </div>
                            <div className='flex justify-between w-full text-right my-2'>
                                <h4 className='text-grey capitalize'>Cylinders</h4>
                                <p className='text-black-100 font-semibold'>{car.cylinders}</p>
                            </div>
                            <div className='flex justify-between w-full text-right my-2'>
                                <h4 className='text-grey capitalize'>Displacement</h4>
                                <p className='text-black-100 font-semibold'>{car.displacement}</p>
                            </div>
                            <div className='flex justify-between w-full text-right my-2'>
                                <h4 className='text-grey capitalize'>Drive</h4>
                                <p className='text-black-100 font-semibold'>{car.drive}</p>
                            </div>
                            <div className='flex justify-between w-full text-right my-2'>
                                <h4 className='text-grey capitalize'>Fuel Type</h4>
                                <p className='text-black-100 font-semibold'>{car.fuel_type}</p>
                            </div>
                            <div className='flex justify-between w-full text-right my-2'>
                                <h4 className='text-grey capitalize'>Highway mpg</h4>
                                <p className='text-black-100 font-semibold'>{car.highway_mpg}</p>
                            </div>

                            <div className='flex justify-between w-full text-right my-2'>
                                <h4 className='text-grey capitalize'>Transmission</h4>
                                <p className='text-black-100 font-semibold'>{car.transmission}</p>
                            </div>
                            <div className='flex justify-between w-full text-right my-2'>
                                <h4 className='text-grey capitalize'>Year</h4>
                                <p className='text-black-100 font-semibold'>{car.year}</p>
                            </div>
                        </div>

                    </div>
                ))
            )}
            <div className='flex justify-between'>
                <CustomButton title='Back'
                    containerStyles='m-4 py-[16px] rounded-full bg-primary-blue'
                    textStyles='text-white text-[14px] leading-[17px] font-bold' handleClick={handleGoBack} />
                <CustomButton title='Contact with seller'
                    containerStyles='m-4 py-[16px] rounded-full bg-primary-blue'
                    textStyles='text-white text-[14px] leading-[17px] font-bold' handleClick={handleContactNav} />
            </div>
        </div>
    )
}

export default PreOwnedDetailspage