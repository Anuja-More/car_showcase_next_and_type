import connectDB from "@src/app/lib/mongodb";
import CarDetail from "@src/app/models/carDetails";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Owner from "@src/app/models/owner";
export async function POST(req) {
    const {
      city_mpg,
      km_driven,
      combination_mpg,
      cylinders,
      no_of_owners,
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
      owner_name,
      owner_phone_number,
      owner_address,
      owner_email,
    } = await req.json();

    
    try {
      await connectDB();
      const owner = await Owner.create({
        name: owner_name,
        phone_number: owner_phone_number,
        address: owner_address,
        email: owner_email,
      });
      await CarDetail.create({
        owner: owner._id,
        city_mpg,
        combination_mpg,
        cylinders,
        km_driven,
        displacement,
        drive,
        no_of_owners,
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
    const carData = await CarDetail?.find()?.populate("owner");
    return NextResponse.json({carData})
  }
  export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    await connectDB();
    try {
      const deletedCarDetail = await CarDetail.findByIdAndDelete(id);
      if (!deletedCarDetail) {
        return NextResponse.json({ message: "Car detail not found" }, { status: 404 });
      }
      return NextResponse.json({ message: "Car detail deleted" }, { status: 200 });
    } catch (error) {
      console.error("Error deleting car detail:", error);
      return NextResponse.json({ message: "Unable to delete car detail" }, { status: 500 });
    }
  }