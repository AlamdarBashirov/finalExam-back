import express from 'express'
import { deleteProductDB, getProductsDB, postProductsDB } from '../controllers/productController.js'

export const productRouter = express.Router()

productRouter.route("/")
.get(getProductsDB)
.post(postProductsDB)
productRouter.route("/:id")
.delete(deleteProductDB)

export default productRouter