const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mern-crud");
const Category = require('../models/category');
mongoose.Promise = Promise;

const categoryList = [
    { item: 'CSS' },
    { item: 'AJAX' },
    { item: 'Firebase' },
    { item: 'JavaScript' },
    { item: 'jQuery' },
    { item: 'HTML' },
    { item: 'React' },
    { item: 'Sequelize' },
    { item: 'Mongoose' },
    { item: 'Express' }
];

Category.deleteMany({})
    .then(success => console.log('DELETED ALL CATEGORIES!!!!'))
    .catch(error => console.log(error));

function seedDocument(object) {
    return new Promise((resolve, reject) => {
        Category.create(object)
            .then(createdDoc => {
                console.log(createdDoc);
                resolve(createdDoc);
            })
            .catch(error => {
                console.log(error);
                reject(error);
            });
    });
}

categoryList.forEach(category => {
    seedDocument(category);
});

// Category.create(categoryList, function (err) {

//     }

    // process.exit();




