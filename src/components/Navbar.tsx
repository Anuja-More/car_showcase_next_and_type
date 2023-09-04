"use client"
import Link from "next/link";
import Image from "next/Image"
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
   <header className="w-full absolute z-10">
    <nav className="max-w-[14440px] mx-auto flex justify-between sm:px-16 px-6 py-4">
    <Link href="./" classname="flex justify-center items-center">
    <Image src="\logo.svg"
     alt="Car Hub logo"
      width={118}
       height={18}
        classname="object-contain"/>
        </Link>
        <CustomButton 
         title="sign In" 
         btnType="button"
         containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
         handleClick={()=>{}} />
    </nav>
   </header>
  )
}

export default Navbar