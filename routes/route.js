import {Router} from "express"
import { catalog } from "../JSON_data/catalog.js"
export const router = Router()

router.get(`/`, function (req, res) {
    res.status(200).json(catalog)
})
router.post(`/`, function (req, res) {
    const { name, img } = req.body
    res.status(200).json([...catalog, { id: catalog.length + 1, name, img }])
})
router.delete(`/`, function (req, res) {
    const { id } = req.body
    res.status(200).json(catalog.filter(item => item.id !== id))
})
// router.get(`/goods`, function (req, res) {
//     res.status(200).json(req.body)
// })
// router.post(`/goods`, function (req, res) {
//     const { name, img } = req.body
//     res.status(200).json([...goods, { id: catalog.length + 1, name, img }])
// })
// router.delete(`/goods`, function (req, res) {
//     const { id } = req.body
//     res.status(200).json(goods.filter(item => item.id !== id))
// })
