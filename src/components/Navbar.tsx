"use client"
import Link from "next/link";
import Image from "next/image"
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const router = useRouter()
  const handleNavtoaddCars = () =>{
  router.push("/add_cars")
  }
  const handleNavtoPreOwnedCars = () =>{
    router.push("/added_cars")
    }
  return (
   <header className="w-full z-10">
    <nav className="max-w-[14440px] mx-auto flex justify-between sm:px-16 px-6 py-4">
      <div className="mt-5">
      <Link href="./" className="flex justify-center items-center">
    <Image src="\logo.svg"
     alt="DoDo cars logo"
      width={118}
       height={18}
        className="object-contain"/>
         <h1 className="text-primary-blue font-extrabold">DoDo Cars</h1>
        </Link>
      </div>
      <div className="flex justify-between">
          <CustomButton 
         title="Pre Owned Cars" 
         btnType="button"
         containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
         handleClick={handleNavtoPreOwnedCars} />
           <CustomButton 
         title="Sell" 
         btnType="button"
         containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
         handleClick={handleNavtoaddCars} />
          <CustomButton 
         title="sign In" 
         btnType="button"
         containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
         handleClick={()=>{}} />
      </div>
    </nav>
   </header>
  )
}

export default Navbar