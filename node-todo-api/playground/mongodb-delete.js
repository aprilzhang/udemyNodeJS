const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDb server');
	}
	console.log('Connected to MongoDb server');

	const db = client.db('TodoApp');
	
	// deleteMany
	db.collection('Todos').deleteMany({}).then((result) => {
		console.log(result);
	});
	
	// deleteOne
	db.collection('Todos').deleteOne({}).then((result) => {
		console.log(result);
	});
	
	// findOneAndDelete
	db.collection('Todos').findOneAndDelete({}).then((result) => {
		console.log(result);
	});
		
	client.close();
});
