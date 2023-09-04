"use client";
import { CustomButtonProps } from "@src/types";
import Image from "next/image"

const CustomButton = ({title, btnType, containerStyles, handleClick, textStyles, isDisabled, rightIcon}:CustomButtonProps) => {
  return (
   <button
   disabled ={false}
   type={ btnType || `button`}
   className={`custom-btn ${containerStyles}`}
   onClick={handleClick}
   >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
      <Image arc={rightIcon} alt="right icon"
       className="object-contain"/>
      </div>
    )}
   </button>
  )
}

export default CustomButton