const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb://localhost');

client.connect();

const db = client.db('megak_todo');

const todos = db.collection('todos')

module.exports = {
    client,
    db,
    todos
}
