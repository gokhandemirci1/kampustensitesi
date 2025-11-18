const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const fs = require('fs');

// Create database file if it doesn't exist
if (!fs.existsSync('data')) {
  fs.mkdirSync('data');
}

const adapter = new FileSync('data/db.json');
const db = low(adapter);

// Set defaults
db.defaults({
  users: [],
  camps: [],
  classes: [],
  enrollments: [],
  content: [],
  messages: [],
  teams_links: [],
  payment_logs: []
}).write();

module.exports = db;


