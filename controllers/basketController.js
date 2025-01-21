import BasketModel from "../models/basketModel.js"

const getPrductsBasket = async (req, res) => {
    const products = await BasketModel.find()
    res.json(products)
}

const postProductsBasket = async(req, res) => {
    const {thumbnail, title, price, description} = req.body
    const newProduct = {thumbnail, title, price, description}
    await BasketModel.create(newProduct)
    res.json(newProduct)
}

const deleteProductsBasket = async (req, res) => {
    const {id} = req.params
    await BasketModel.findByIdAndDelete(id)
    res.json("product deleted")
}

export {getPrductsBasket, postProductsBasket, deleteProductsBasket}