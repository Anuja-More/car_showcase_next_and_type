import connectDB from "@src/app/lib/mongodb";
import CarDetail from "@src/app/models/carDetails";
import mongoose from "mongoose";
import Owner from "@src/app/models/owner";
import { NextResponse } from "next/server";
export async function PUT(req, {params}) {
    const {id } = params
    const { ...updatedData } = await req.json();
  
    try {
      await connectDB();
      const existingCarDetail = await CarDetail.findById(id);
      console.log(existingCarDetail);
      if (!existingCarDetail) {
        return NextResponse.json({ msg: ["Car detail not found."], success: false });
      }
  
      // Update the existing car detail with the new data
      existingCarDetail.set(updatedData);
      await existingCarDetail.save();
  
      return NextResponse.json({
        msg: ["Car detail updated successfully"],
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
        return NextResponse.json({ msg: ["Unable to update car detail."] });
      }
    }
  }
  export async function GET(req, { params }) {
    const { id } = params;
  
    try {
      await connectDB();
      const carData = await CarDetail.findOne({ _id: id }).populate("owner");
      
      if (!carData) {
        return NextResponse.json({ message: "Car detail not found" }, { status: 404 });
      }
      return NextResponse.json({ carData }, { status: 200 });
    } catch (error) {
      console.error("Error fetching car detail:", error);
      return NextResponse.json({ message: "Unable to fetch car detail" }, { status: 500 });
    }
  }
  