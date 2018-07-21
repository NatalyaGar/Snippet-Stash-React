const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mern-crud");
const User = require('../models/user');
mongoose.Promise = Promise;

const userList = [
    { 'firstName': 'Admin', 'lastName': 'Admin', 'email':'admin@email.com', 'password': '12345678' },
    { 'firstName': 'Dummy', 'lastName': 'Person', 'email':'dummy@email.com', 'password': '12345678' },
];

User.deleteMany({})
    .then(success => console.log('DELETED ALL USERS!!!!'))
    .catch(error => console.log(error));

function seedDocument(object) {
    return new Promise((resolve, reject) => {
        User.create(object)
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

userList.forEach(user => {
    seedDocument(user);
});

// User.create(userList, function (err) {

//     }

    // process.exit();




