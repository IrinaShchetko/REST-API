const express = require('express')
const router = express.Router()
const { dresses } = require('./dresses')
const { pantsuits } = require('./pantsuits')

const catalog = [
    {
        id: 1,
        category: 'coats',
        img: '/catalog/coats.jpg',
        goods: [

        ]
    },
    {
        id: 2,
        category: 'shorts',
        img: '/catalog/shorts.jpg',
        goods: []
    },
    {
        id: 3,
        category: 'blouses',
        img: '/catalog/blouses.jpg',
        goods: []

    },
    {
        id: 4,
        category: 'dresses',
        img: '/catalog/dresses.jpg',
        goods: dresses

    }, {
        id: 5,
        category: 'pantsuits',
        img: '/catalog/pantsuits.jpg',
        goods: pantsuits

    }, {
        id: 6,
        category: 'skirt suits',
        img: '/catalog/skirt_suits.jpg',
        goods: []

    }, {
        id: 7,
        category: 'skirts',
        img: '/catalog/skirts.jpg',
        goods: []

    }, {
        id: 8,
        category: 't-shirts',
        img: '/catalog/t-shirts.jpg',
        goods: []

    }, {
        id: 9,
        category: 'tracksuits',
        img: '/catalog/tracksuits.jpg',
        goods: []

    },
    {
        id: 10,
        category: 'trousers',
        img: '/catalog/trousers.jpg',
        goods: []

    },
]
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
module.exports = router