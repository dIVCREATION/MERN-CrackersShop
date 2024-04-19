import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    Pdname: {
      type: String,
      require: [true, "Please Enter product Name"],
      trim: true,
    },
     price: {
      type: Number,
      require: [true, "Please Enter product Price"],
      maxLength: [8, "Price cannot exceed 8 characters"],
    },
       images: 
      {
          type: String,
          require: true,
        },
          
    Stock: {
      type: Number,
      require: [true, "Please Enter product Stock"],
      maxLength: [4, "Stock cannot exceed 4 characters"],
      default: 1,
    },
     user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
    
  });
  
  export const Product = mongoose.model("Product", productSchema);
  