//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
// destructrue
// var user = {name: 'april', age: 26};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDb server');
	}
	console.log('Connected to MongoDb server');
	// const db = client.db('TodoApp');
	
	// db.collection('Todos').insertOne({
		
	// }, (err, result) => {
		// if (err) {
			// return console.log('Unable to insert todo', err);
		// }
		
		
		// console.log(JSON.stringify(result.ops, undefined, 2));
	// });
	
	// const db = client.db('Users');
	// db.collection('Users').insertOne({
		// name: 'April',
		// age: 26,
		// location: 'london'
	// }, (err, result) => {
		// if (err) {
			// return console.log('Unable to insert user', err);
		// }
		
		//console.log(JSON.stringify(result.ops[0]), undefined, 2);
		// console.log(result.ops[0]._id.getTimestamp());
	// });
	
	client.close();
});

