"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Toast } from 'primereact/toast';
import Image from 'next/image';
import { FUEL_OPTIONS, TRANSMISSION_OPTIONS, OWNERS_OPTIONS, YEAR_OPTIONS, KM_DRIVEN_OPTIONS, locationData } from '@src/constants';

const CarForm = ({ toggleFormVisibility, carDetail }) => {
    const router = useRouter()
    const toast = useRef<any>(null);
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        city_mpg: '',
        combination_mpg: '',
        km_driven: '',
        fuel_type: '',
        highway_mpg: '',
        make: '',
        model: '',
        resell_price: '',
        no_of_owners: '',
        transmission: '',
        owner_name: '',
        owner_phone_number: '',
        owner_address: '',
        owner_email: '',
        year: '',
        top_view_image: null,
        left_view_image: null,
        right_view_image: null,
        front_view_image: null,
    });

    useEffect(() => {
        if (carDetail) {
            setFormData({
                city_mpg: carDetail.city_mpg || '',
                km_driven: carDetail.km_driven || '',
                combination_mpg: carDetail.combination_mpg || '',
                resell_price: carDetail.resell_price || '',
                owner_name: carDetail?.owner?.name || '',
                owner_phone_number: carDetail?.owner?.phone_number || '',
                owner_address: carDetail?.owner?.address || '',
                owner_email: carDetail.owner?.email || '',
                fuel_type: carDetail.fuel_type || '',
                highway_mpg: carDetail.highway_mpg || '',
                make: carDetail.make || '',
                model: carDetail.model || '',
                no_of_owners: carDetail.no_of_owners || '',
                transmission: carDetail.transmission || '',
                year: carDetail.year || '',
                top_view_image: carDetail.top_view_image || null,
                left_view_image: carDetail.left_view_image || null,
                right_view_image: carDetail.right_view_image || null,
                front_view_image: carDetail.front_view_image || null,
            });
        }
    }, [carDetail]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target) {
                    setFormData({
                        ...formData,
                        [name]: event.target.result,
                    });
                }
            };
            reader?.readAsDataURL(file);
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const method = carDetail ? 'PUT' : 'POST';

        let apiUrlCheck: string;
        if (process.env.NODE_ENV === "production") {
            apiUrlCheck = `https://car-showcase-next-and-type-1u4i-anuja-more.vercel.app/api/cardata`;
        } else {
            apiUrlCheck = `http://localhost:3000/api/cardata`;
        }
        let apiUrl = apiUrlCheck;

        if (carDetail && carDetail._id) {
            apiUrl = `${apiUrl}/${carDetail._id}`;
        }

        const res = await fetch(apiUrl, {
            method,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const { msg, success } = await res?.json();
        setErrors(msg);
        setSuccess(success);

        if (success) {
            setFormData({
                city_mpg: '',
                combination_mpg: '',
                km_driven: '',
                no_of_owners: '',
                fuel_type: '',
                highway_mpg: '',
                resell_price: '',
                make: '',
                owner_name: '',
                owner_phone_number: '',
                owner_address: '',
                owner_email: '',
                model: '',
                transmission: '',
                year: '',
                top_view_image: null,
                left_view_image: null,
                right_view_image: null,
                front_view_image: null,
            });
            toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Car data submitted successfully' });
            router.push("/added_cars");
        }else {
            toast.current?.show({ severity: 'error', summary: 'Validation Error', detail: 'Please correct the form errors.' });
          }
    };


    return (
        <div className="max-w-6xl mx-auto mt-8 p-4 border rounded-lg shadow-lg relative">
              <Toast ref={toast} />
            <button className="absolute top-2 right-2 z-10 w-fit p-2 
         bg-primary-blue-100
         rounded-full" type="button" onClick={toggleFormVisibility}>
                <Image src="/close.svg" alt="close" width={20} height={20}
                    className="object-contain" />
            </button>
            <form onSubmit={handleSubmit} className="m-8">
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="top_view_image" className="block text-sm font-medium text-gray-700">
                            Top View Image<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="top_view_image"
                            type="file"
                            name="top_view_image"
                            placeholder="Enter Image URL"
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="left_view_image" className="block text-sm font-medium text-gray-700">
                            Left View Image<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="left_view_image"
                            name="left_view_image"
                            type="file"
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                            placeholder="Enter Image URL"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="front_view_image" className="block text-sm font-medium text-gray-700">
                            Front View Image<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="front_view_image"
                            name="front_view_image"
                            type="file"
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                            placeholder="Enter Image URL"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="right_view_image" className="block text-sm font-medium text-gray-700">
                            Right View Image<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="right_view_image"
                            name="right_view_image"
                            type="file"
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                            placeholder="Enter Image URL"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="make" className="block text-sm font-medium text-gray-700">
                            Make<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="make"
                            name="make"
                            value={formData.make}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                            placeholder="Enter Make"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                            Model<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="model"
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                            placeholder="Enter Model"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="no_of_owners" className="block text-sm font-medium text-gray-700">
                            No. of Owners<span className="text-red-500">*</span>
                        </label>
                        <select
                            id="no_of_owners"
                            name="no_of_owners"
                            value={formData.no_of_owners}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                        >
                            {OWNERS_OPTIONS.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="resell_price" className="block text-sm font-medium text-gray-700">
                            Resell Price<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="resell_price"
                            name="resell_price"
                            value={formData.resell_price}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                            placeholder="Enter Resell Price"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="km_driven" className="block text-sm font-medium text-gray-700">
                            Kilometers Driven<span className="text-red-500">*</span>
                        </label>
                        <select
                            id="km_driven"
                            name="km_driven"
                            value={formData.km_driven}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                        >
                            {KM_DRIVEN_OPTIONS.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                            Year<span className="text-red-500">*</span>
                        </label>
                        <select
                            id="year"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                        >
                            {YEAR_OPTIONS.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="fuel_type" className="block text-sm font-medium text-gray-700">
                            Fuel Type<span className="text-red-500">*</span>
                        </label>
                        <select
                            id="fuel_type"
                            name="fuel_type"
                            value={formData.fuel_type}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                        >
                            {FUEL_OPTIONS.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="transmission" className="block text-sm font-medium text-gray-700">
                            Transmission<span className="text-red-500">*</span>
                        </label>
                        <select
                            id="transmission"
                            name="transmission"
                            value={formData.transmission}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                        >
                            {TRANSMISSION_OPTIONS.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="city_mpg" className="block text-sm font-medium text-gray-700">
                            City MPG<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="city_mpg"
                            name="city_mpg"
                            value={formData.city_mpg}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                            placeholder="Enter City MPG"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="highway_mpg" className="block text-sm font-medium text-gray-700">
                            Highway MPG<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="highway_mpg"
                            name="highway_mpg"
                            value={formData.highway_mpg}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                            placeholder="Enter Highway MPG"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="combination_mpg" className="block text-sm font-medium text-gray-700">
                            Combination MPG<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="combination_mpg"
                            name="combination_mpg"
                            value={formData.combination_mpg}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                            placeholder="Enter Combination MPG"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="owner_name" className="block text-sm font-medium text-gray-700">
                            Owner Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="owner_name"
                            name="owner_name"
                            value={formData.owner_name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                            placeholder="Enter Owner Name"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="owner_phone_number" className="block text-sm font-medium text-gray-700">
                            Owner Phone Number<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="owner_phone_number"
                            name="owner_phone_number"
                            value={formData.owner_phone_number}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                            placeholder="Enter Owner Phone Number"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="owner_address" className="block text-sm font-medium text-gray-700">
                            Owner Address<span className="text-red-500">*</span>
                        </label>
                        <select
                            id="owner_address"
                            name="owner_address"
                            value={formData.owner_address}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                        >
                            <option value="">Select State</option>
                            {locationData.map((state, index) => (
                                <option key={index} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="owner_email" className="block text-sm font-medium text-gray-700">
                            Owner Email<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="owner_email"
                            name="owner_email"
                            value={formData.owner_email}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                            placeholder="Enter Owner Email"
                        />
                    </div>
                </div>

                <div className="mb-6 md:flex md:justify-start">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 md:mr-2 mb-2 md:mb-0 w-auto"
                    >
                        {carDetail ? 'Update' : 'Create'} Car Data
                    </button>
                    <button
                        onClick={toggleFormVisibility}
                        className="bg-gray-300 text-gray-700 px-3 py-2 rounded-md text-sm hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400 md:mb-2 w-auto"
                    >
                        Close
                    </button>
                </div>
            </form>
            {success && <p className="text-green-500">Car data submitted successfully.</p>}
            {errors.length > 0 && !success && (
                <div className="text-red-500">
                    <ul>
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CarForm;

