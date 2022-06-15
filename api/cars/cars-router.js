const express = require("express")
const Cars = require("./cars-model.js")
const router = express.Router()
const {
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require('./cars-middleware.js')

router.get('/', (req, res, next) => {
    Cars.getAll()
        .then(cars => {
            res.json(cars)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get cars" })
        })
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id
    Cars.getById(id)
        .then(car => {
            if (car) {
                res.json(car)
            } else {
                res.status(404).json({ message: "Could not find car with id of " + id })
            }
        })
        .catch(err => {
            next(err)
        })
})

router.post('/', 
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
    async (req, res, next) => {
        const car = req.body
        try {
            const newCar = await Cars.create(car)
            res.status(201).json(newCar)
        } catch (err) {
            next(err)
        }
})

module.exports = router