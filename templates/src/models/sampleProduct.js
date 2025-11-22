import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
        trim: true,
    },
    price : {
        type: Number,
        required: true,
        min: 0,
    }
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;