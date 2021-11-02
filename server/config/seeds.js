const db = require('./connection');
const { User, Product, Category } = require('../models');
db.once('open', async () => {
    await Category.deleteMany();
    const categories = await Category.insertMany([
        { name: 'Food' },
        { name: 'Household Supplies' },
        { name: 'Electronics' },
        { name: 'Movies' },
        { name: 'Books' },
        { name: 'Toys' }
    ]);
    console.log('categories seeded');
    await Product.deleteMany();
    const products = await Product.insertMany([
        {
            name: 'Chips',
            description: 'Perfectly seasoned corn chips',
            image: '', 
            category: categories[0]._id,
            price: 3.50,
            quantity: 300
        },
        { 
            name: 'Pizza',
            description: 'Pepperoni pizza with extra cheese',
            image: '',
            category: categories[0]._id,
            price: 9.99,
            quantity: 100
        },
        {
            name: 'Counter top disinfectant',
            description: 'Clean all your surfaces in one',
            image: '',
            category: categories[1]._id,
            price: 6.91,
            quantity: 70
        },
        { 
            name: 'Kitchen towels',
            description: 'Stylish floral towels for your kitchen',
            image: '',
            category: categories[1]._id,
            price: 8.34,
            quantity: 50
        },
        {
            name: 'Laptop',
            description: 'Two in one laptop and tablet',
            image: '',
            category: categories[2]._id,
            price: 600.00,
            quantity: 20
        }
        {
            name: 'Monitor',
            description: '27inch curved monitor',
            image: '',
            category: categories[2]._id,
            price: 200.00,
            quantity: 10
        }
    ])
})