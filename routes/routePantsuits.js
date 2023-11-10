import {Router} from "express"
import { pantsuits } from "../data/pantsuits.js"
export const routerPantsuits = Router()

routerPantsuits.get(`/`, function (req, res) {
    res.status(200).json(pantsuits)
})
routerPantsuits.post(`/`, function (req, res) {
    const { name, img } = req.body
    res.status(200).json([...pantsuits, { id: pantsuits.length + 1, name, img }])
})
routerPantsuits.delete(`/`, function (req, res) {
    const { id } = req.body
    res.status(200).json(pantsuits.filter(item => item.id !== id))
})