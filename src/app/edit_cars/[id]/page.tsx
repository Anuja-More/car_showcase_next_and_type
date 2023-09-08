import React from 'react'
import CarForm from '@src/components/CarForm';

const getCarsById = async (id) => {
    let apiUrl: string;
    if (process.env.NODE_ENV === "production") {
        apiUrl = `https://car-showcase-next-and-type-1u4i-anuja-more.vercel.app/api/cardata/${id}`;
    } else {
        apiUrl = `http://localhost:3000/api/cardata/${id}`;
    }
    try {
        const res = await fetch(apiUrl, { cache: "no-store" });
        if (!res.ok) {
            throw new Error('Failed to fetch topic')
        }
        return res.json();
    }
    catch (error) {
        console.log(error)
    }
}
const Editpage = async ({ params }) => {
    const { id } = params
    const { carData } = await getCarsById(id);
    return (
        <div>
        <h1 className="text-3xl font-semibold mb-4 text-center">Edit PreOwned Cars</h1>
            <CarForm carDetail={carData} />
        </div>
    )
}

export default Editpage;