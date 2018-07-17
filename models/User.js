const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First Name is Required"
  },
    lastName: {
        type: String,
        required: "Last Name is Required"
},
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
 
    password: {
        type: String,
        required: "Password is Required",
        validate: [
        function(input) {
            return input.length >= 6;
        },
        "Password should be longer."
        ]

    },
  
});

//UserSchema.methods.genereateHash = function(password){
//    return bcrypt.hashSync(password, bcrypt,genSaltSync(8), null);
// }

// UserSchema.methods.validPassword = function(password){
//     return bcrypt.compareSync(password, this.password)
// };
module.exports = mongoose.model('User', UserSchema);
