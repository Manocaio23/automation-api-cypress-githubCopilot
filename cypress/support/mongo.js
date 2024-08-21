const { MongoClient } = require('mongodb');

const mongUri = 'mongodb+srv://qax:root123@cluster0.kv7ha.mongodb.net/markdb?retryWrites=true&w=majority&appName=Cluster0';

// Conexão com o cluster do MongoDB
const client = new MongoClient(mongUri);

async function connect() {
    await client.connect();
    return client.db('markdb');
}

async function disconnect() {
    await client.close(); // Uso de client.close() para desconectar
}

module.exports = { connect, disconnect };