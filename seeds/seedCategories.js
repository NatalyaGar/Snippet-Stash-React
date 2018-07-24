const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mern-crud");
const Category = require('../models/Category');
mongoose.Promise = Promise;

const categoryList = [
    { item: 'AJAX' },
    { item: 'CSS' },
    { item: 'Express' },
    { item: 'Firebase' },
    { item: 'Handlebars' },
    { item: 'HTML' },
    { item: 'JavaScript' },
    { item: 'jQuery' },
    { item: 'MongoDB' },
    { item: 'Mongoose' },
    { item: 'MySQL' },
    { item: 'Node' },
    { item: 'React' },
    { item: 'Sequelize' },
    { item: 'Mongoose' },
    { item: 'Express' },
    { item: 'MySQL' },
    { item: 'MongoDB' },
    { item: 'Node' },
    { item: 'Handlebars' },
    { item: 'Testing' },
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





