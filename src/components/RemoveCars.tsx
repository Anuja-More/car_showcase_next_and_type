"use client"
import { useRouter } from "next/navigation";

const RemoveCars = ({id}) => {
    const router = useRouter();
    const removeCarDetails = async () =>{
        const confirmed = confirm("Are you sure you want to delete car details?");
        if(confirmed && id){
            let apiUrl: string;
            if (process.env.NODE_ENV === "production") {
                apiUrl = `https://car-showcase-next-and-type-1u4i-anuja-more.vercel.app/api/cardata?id=${id}`;
            } else {
                apiUrl = `http://localhost:3000/api/cardata?id=${id}`;
            }
         const res =  await fetch(apiUrl,{
            method: "DELETE"
            });
            console.log(res)
            if(res.ok){
                console.log(res)
                router.refresh();
            }
        }
    }
  return (
    <button type="button" onClick={removeCarDetails} className='text-red-300' aria-label="Delete Car">
    <i className="pi pi-trash" style={{ color: 'text-red-300' }}></i>
    </button>
  )
}

export default RemoveCars