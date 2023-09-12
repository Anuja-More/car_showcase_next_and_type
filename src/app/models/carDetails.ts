import mongoose, { Schema } from "mongoose";

const CarDetailSchema = new Schema(
  {
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Owner",
        required: true,
      },
    city_mpg: {
      type: Number,
      required: true,
    },
    km_driven:{
        type: String,
        required: true,
      },
    no_of_owners:{
        type: String,
        required: true,
      },
    combination_mpg: {
      type: Number,
      required: true,
    },
    cylinders: {
      type: Number,
      required: true,
    },
    displacement: {
      type: Number,
      required: true,
    },
    drive: {
      type: String,
      required: true,
    },
    fuel_type: {
      type: String,
      required: true,
    },
    highway_mpg: {
      type: Number,
      required: true,
    },
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    top_view_image: {
      type: String,
    },
    left_view_image: {
      type: String,
    },
    right_view_image: {
      type: String,
    },
    front_view_image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const CarDetail = mongoose.model.CarDetails || mongoose.model('CarDetail', CarDetailSchema);
export default CarDetail;
