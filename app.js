const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


let mysql = require('mysql');

let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Stormz!',
	database: 'recipe'

});

connection.connect(function(err) {
	if (err) {
		return console.error('error: ' + err.message);
	}
		console.log('connected to the MySQL server.');
	});
