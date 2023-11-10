import {Router} from "express"
import { tracksuits } from "../data/tracksuits.js"
export const routerTracksuits = Router()

routerTracksuits.get(`/`, function (req, res) {
    res.status(200).json(tracksuits)
})
// routerDresses.post(`/`, function (req, res) {
//     const { name, img } = req.body
//     res.status(200).json([...dresses, { id: dresses.length + 1, name, img }])
// })
// routerDresses.delete(`/`, function (req, res) {
//     const { id } = req.body
//     res.status(200).json(dresses.filter(item => item.id !== id))
// })