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
