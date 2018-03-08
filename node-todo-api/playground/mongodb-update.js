const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDb server');
	}
	console.log('Connected to MongoDb server');

	const db = client.db('TodoApp');
	
	db.collection('Todos').findOneAndUpdate({}, {}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
		
	client.close();
});
