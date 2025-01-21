import mongoose from "mongoose";

export const BasketSchema = mongoose.Schema({
    thumbnail:{type:String},
    title:{type:String},
    price:{type:String},
    description:{type:String},
}, {timestamps:true})

export const BasketModel = mongoose.model("basket", BasketSchema)

export default BasketModel