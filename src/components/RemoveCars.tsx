"use client"
import { useRouter } from "next/navigation";

const RemoveCars = ({id}) => {
    const router = useRouter();
    const removeCarDetails = async () =>{
        const confirmed = confirm("Are you sure you want to delete car details?");
        if(confirmed && id){
         const res =  await fetch(`http://localhost:3000/api?id=${id}`,{
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
    <button onClick={removeCarDetails} className='text-red-300'>
     Delete
    </button>
  )
}

export default RemoveCars