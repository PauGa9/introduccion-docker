const redis = require("redis"),
    client = redis.createClient({host: 'redis'});

client.on("error", function (err) {
    console.log("Error " + err);
});


const express = require('express');
const app = express();

app.get('/', function (request, response) {
    client.incr('valor');
    client.get('valor', function(error, value) {
        response.send(`El valor es ${value}`);
    });
});

const server = app.listen(3000, () => console.log('Escuchando el puerto 3000 (del contenedor o del host?)'));

process.on('SIGTERM', () => {
    server.end();
    client.end();
    console.log('byebye');
});
