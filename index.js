var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/ElPescadero', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("conexión exitosa a mongo...");
        //crear conexion al servidor en puerto 3700
        app.listen(port, () => {
            console.log("Servidor levantado en localhost:3700");
        })

    })
    .catch(err => console.log(err));