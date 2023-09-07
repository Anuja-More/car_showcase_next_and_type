import React from 'react'
import CarForm from '@src/components/CarForm';
const getCarsById = async(id) =>{
    try{
        const res = await fetch(`http://localhost:3000/api/cardata/${id}`,{cache: "no-store"});
        if(!res.ok){
            throw new Error('Failed to fetch topic')
        }
        return res.json();
    }
    catch(error){
        console.log(error)
    }
}
const Editpage = async({params}) => {
    const {id} = params
    const { carData } =  await getCarsById(id);
  return (
    <div>Edit Car data
        <CarForm carDetail={carData} />
    </div>
  )
}

export default Editpage;