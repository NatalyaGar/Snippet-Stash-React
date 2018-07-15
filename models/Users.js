const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({
	firstName: { type: String, unique: false },
	lastName: { type: String, unique: false },
	local: {
		username: { type: String, unique: false, required: false },
		password: { type: String, unique: false, required: false }
	}
})


// Define hooks for pre-saving
userSchema.pre('save', function(next) {
	if (!this.local.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	} else {
		this.local.password = this.local.password
		next()
	}
})

module.exports = mongoose.model('User', userSchema);
