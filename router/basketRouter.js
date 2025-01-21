import express from 'express'
import { deleteProductsBasket, getPrductsBasket, postProductsBasket } from '../controllers/basketController.js'

export const basketRouter = express.Router()

basketRouter.route("/")
.get(getPrductsBasket)
.post(postProductsBasket)
basketRouter.route("/:id")
.delete(deleteProductsBasket)

export default basketRouter