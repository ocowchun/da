var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('things', {
    id: {
      type: 'int',
      primaryKey: true
    },
    content: 'string',
    create_at: 'datetime',
    update_at: 'datetime'
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('things', callback);
};