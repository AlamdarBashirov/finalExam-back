import ProductModel from "../models/productModel.js"

const getProductsDB = async (req, res) => {
    const products = await ProductModel.find()
    res.json(products)
}

const postProductsDB = async(req, res) => {
    const {thumbnail, title, price, description} = req.body
    const newProduct = {thumbnail, title, price, description}
    await ProductModel.create(newProduct)
    res.json(newProduct)
}

const deleteProductDB = async (req, res) => {
    const {id} = req.params
    await ProductModel.findByIdAndDelete(id)
    res.json("product deleted")
}

export {getProductsDB, postProductsDB, deleteProductDB}