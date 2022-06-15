// STRETCH

const cars = [
    {
        vin: '1FADP3K2XDL267699',
        make: 'BMW',
        model: 'X5',
        mileage: 10000,
        title: 'Used 2015 BMW X5 4.8L',
        transmission: 'Automatic',
    },
    {
        vin: '2A4GP44R87R372965',
        make: 'Ford',
        model: 'Fiesta',
        mileage: 20000,
        title: 'Used 2015 Ford Fiesta 4.8L',
        transmission: 'Manual',
    },
    {
        vin: '2XKWD69X0RM674638',
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
