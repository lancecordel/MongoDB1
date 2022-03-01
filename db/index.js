const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/employeesDatabase', 
{useUnifiedTopology: true, useNewUrlParser: true}).then(() => 
console.log('Sucessfully Connected to MongoDB')).catch((err) => console.error('Problem connecting', e.message))

const db = mongoose.connection;

module.exports = db;