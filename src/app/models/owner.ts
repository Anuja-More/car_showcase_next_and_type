import mongoose, { Schema } from "mongoose";

const OwnerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Owner = mongoose?.model?.Owner || mongoose.model("Owner", OwnerSchema);

export default Owner;