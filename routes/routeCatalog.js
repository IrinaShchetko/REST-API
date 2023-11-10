import {Router} from "express"
import { catalog } from "../data/catalog.js"
export const routerCatalog = Router()

routerCatalog.get(`/`, function (req, res) {
    res.status(200).json(catalog)
})
routerCatalog.post(`/`, function (req, res) {
    const { name, img } = req.body
    res.status(200).json([...catalog, { id: catalog.length + 1, name, img }])
})
routerCatalog.delete(`/`, function (req, res) {
    const { id } = req.body
    res.status(200).json(catalog.filter(item => item.id !== id))
})
