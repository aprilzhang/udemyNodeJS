const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDb server');
	}
	console.log('Connected to MongoDb server');

	const db = client.db('TodoApp');
	
	// db.collection('Todos').find({completed:true}).toArray().then((docs) => {
		// console.log('Todos');
		// console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
		// console.log('Unable to fetch todos', err);
	// });
	
	db.collection('Todos').find().count().then((count) => {
		console.log(`Todos: ${count}`);
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});
	
	//client.close();
});

