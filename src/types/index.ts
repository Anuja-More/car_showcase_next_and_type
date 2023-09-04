import { MouseEventHandler } from "react";

export interface CustomButtonProps {
   title: string;
   containerStyles? :string;
   handleClick: MouseEventHandler<HTMLButtonElement>;
   btnType?: "button" | "submit";
   textStyles?: string;
   rightIcon?: string;
   isDisabled?: boolean;
}
export interface ManufacturerProps {
  manufacturer: string;
  setManuFacturer : (manufacturer : string) => void;
}
export interface CarCardProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number
}
export interface FilterProps {
  manufacturer?: string;
  Year?: number;
  model?: string;
  limit?: number;
  Fuel?: string;
}
export interface OptionProps {
  title: string;
  value: string;
}
export interface customfilterProps{
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}