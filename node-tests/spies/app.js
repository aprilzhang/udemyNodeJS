var db = require('./db.js');

var handleSignup = (email, password) => {
	// Check if email already exists
	
	// Save the user to the database
	db.saveUser({email, password});
	// Send the welcome email
};

module.exports = {
	handleSignup: handleSignup
}