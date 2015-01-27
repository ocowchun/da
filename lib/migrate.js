var sqlite3 = require('sqlite3').verbose();

function migrate(path) {
	var dbPath = path + "/db.sqlite3";
	db = new sqlite3.Database(dbPath);

	var sql = 'CREATE TABLE things(id INTEGER PRIMARY KEY ASC, content VARCHAR, create_at datetime,update_at datetime)';
	db.run("select * from things limit 1", function(error) {
		if (error) {
			db.run(sql);
		}
	});

}



module.exports = migrate;