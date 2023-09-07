import connectDB from "@src/app/lib/mongodb";
import CarDetail from "@src/app/models/carDetails";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function POST(req) {
    const {
      city_mpg,
      combination_mpg,
      cylinders,
      displacement,
      drive,
      fuel_type,
      highway_mpg,
      make,
      model,
      transmission,
      year,
      top_view_image,
      left_view_image,
      right_view_image,
      front_view_image,
    } = await req.json();
  
    try {
      await connectDB();
      await CarDetail.create({
        city_mpg,
        combination_mpg,
        cylinders,
        displacement,
        drive,
        fuel_type,
        highway_mpg,
        make,
        model,
        transmission,
        year,
        top_view_image,
        left_view_image,
        right_view_image,
        front_view_image,
      });
  
      return NextResponse.json({
        msg: ["Car detail created successfully"],
        success: true,
      });
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        let errorList = [];
        for (let e in error.errors) {
          errorList.push(error.errors[e].message);
        }
        console.log(errorList);
        return NextResponse.json({ msg: errorList });
      } else {
        return NextResponse.json({ msg: ["Unable to create car detail."] });
      }
    }
  }
  
  export async function GET(){
    await connectDB();
    const carData = await CarDetail.find();
    return NextResponse.json({carData})
  }
  export async function DELETE(req){
   const id = req.nextUrl.searchParams.get("id");
   await connectDB();
   await CarDetail.findByIdAndDelete(id);
   return NextResponse.json({message: "car details deleted"},{ status: 200});
  }