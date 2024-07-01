const mysql = require('mysql');

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
    host: '127.0.0.1' ,
    user: 'root',
    password: '',
    database: 'hotel'
});

connection.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("conexon exitosa");
    }
})