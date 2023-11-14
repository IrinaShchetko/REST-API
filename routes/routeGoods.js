import {Router} from "express"
import { dresses } from "../data/dresses.js"
export const routerDresses = Router()

routerDresses.get(`/`, function (req, res) {
    // res.header('Cache-Control', 'no-cache')
    res.status(200).json(dresses)
})
routerDresses.post(`/`, function (req, res) {
    const { name, img } = req.body
    res.status(200).json([...dresses, { id: dresses.length + 1, name, img }])
})
routerDresses.delete(`/`, function (req, res) {
    const { id } = req.body
    res.status(200).json(dresses.filter(item => item.id !== id))
})