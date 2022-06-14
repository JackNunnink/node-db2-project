// STRETCH

const cars = [
    {
        vin: '1HGCM8AJX7U049091',
        make: 'BMW',
        model: 'X5',
        mileage: 10000,
        title: 'Used 2015 BMW X5 4.8L',
        transmission: 'Automatic',
    },
    {
        vin: '1HGCM8AJX7U049092',
        make: 'Ford',
        model: 'Fiesta',
        mileage: 20000,
        title: 'Used 2015 Ford Fiesta 4.8L',
        transmission: 'Manual',
    },
    {
        vin: '1HGCM8AJX7U049093',
        make: 'Toyota',
        model: 'Corolla',
        mileage: 30000,
        title: 'Used 2015 Toyota Corolla 4.8L',
        transmission: 'Automatic',
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
