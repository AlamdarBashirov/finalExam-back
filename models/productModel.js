import mongoose from "mongoose";

export const ProductSchema = mongoose.Schema({
    thumbnail:{type:String},
    title:{type:String},
    price:{type:String},
    description:{type:String},
}, {timestamps:true})

export const ProductModel = mongoose.model("products", ProductSchema)

export default ProductModel