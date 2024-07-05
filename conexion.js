    const mysql = require('mysql');
    const express = require('express');
    const path = require('path');

    const app = express();
    const port = 3000;
    app.use(express.static('views'));
    
    //Configura la conexión a la base de datos
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
    });
    app.set ("view engine","ejs");


    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", function(req, res){
    res.render('index');  // Esto buscará 'index.ejs' en la carpeta 'views'
    });

    app.get("/", function(req, res){
        res.render('index');  // Esto buscará 'index.ejs' en la carpeta 'views'
        });
        //conexion con el home
        app.get("/Home", function(req, res) {
            res.render('Home');
        });

        app.post("/login", function(req,res){
            const{email, contrasena}=req.body
            res.redirect('/Home');

        })


    app.post("/api/validar", function(req,res){
        const datos = req.body;

        let nombre = datos.nom;
        let email = datos.em;
        let contrasena = datos.con;

        let registrar = "INSERT INTO login (nombre, email, contrasena) VALUES ('"+nombre+"','"+email+"','"+contrasena+"')";

        connection.query(registrar, function(error){
            if(error){
                throw error;
            }else{
                console.log("datos almacenados correctamente");
            }
        });
    });
    app.get("/api/validar", function(req, res) {
        res.status(405).send("Método no permitido");
    });

    app.post("/reservacion", function(req, res) {
        const { nombre, email, telefono, fechallegada, fechasalida, mensaje, habitacion } = req.body;
    
        let registrar = `
            INSERT INTO reservacion 
            (nombrecom, correo, telefono, fechadellegada, fechadesalida, mensaje, habitacion) 
                VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
    
        connection.query(registrar, [nombre, email, telefono, fechallegada, fechasalida, mensaje, habitacion], function(error, results) {
            if (error) {
                console.error("Error en la reservación:", error);
                res.status(500).send("Error al procesar la reservación");
            } else {
                console.log("Reservación completada");
                res.status(200).send("Tu reservación fue completada con éxito");
            }
        });
    });
    
    // indesertar datos de reservacion a la base de datos 

    // app.post("/reservacion", function(req,res){
    //     const datos1 = req.body;

    //     let nombrecon = datos1.nombre1;
    //     let correo = datos1.email1;
    //     let telefono1 = datos1.telefono;
    //     let horadeentrada = datos1.fechallegada;
    //     let horadesalida = datos1.fechasalida;

    //     let reservar = "INSERT INTO reservacion (nombrecom, correo, telefono, horadellegada, horadesalida) VALUES ('"+nombrecon+"',"+correo+"', '"+telefono1+"','"+horadeentrada+"','"+horadesalida+"')"; 

    //     connection.query(reservar, function(error){
    //         if(error){
    //             throw error;
    //         }else{
    //             console.log(" tu reservacion fue completada ");
    //         }
    //     });
    //     //console.log("consulta sql:", mysql.format(reservacion [nombrecom, correo, telefono, horadellegada, horadesalida]));
    //     app.get("/reservacion", function(req, res) {
    //         res.status(405).send("Método no permitido");
    //     });
    // });

    // Inicia el servidor
    app.listen(3000, function(){
        console.log(`Servidor corriendo en http://127.0.0.1:${3000}`);
    });
// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const port = 3000;

// // Configuración para servir archivos estáticos
// app.use(express.static('public'));
// app.set('views', path.join(__dirname, 'views'));
// // Configuración de MySQL
// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'hotel'
// });

// connection.connect(err => {
//     if (err) {
//         console.error('Error connecting to database: ' + err.stack);
//         return;
//     }
//     console.log('Connected to MySQL database');
// });

// // Middleware para parsear bodies JSON
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.ejs');
//     });

// // Ruta para manejar el formulario de registro
// app.post('/validar', (req, res) => {
//     const { nombre, email, contrasena } = req.body;
//     const INSERT_USER_QUERY = `INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)`;
//     connection.query(INSERT_USER_QUERY, [nombre, email, contrasena], (err, results) => {
//         if (err) {
//             console.error('Error al insertar usuario: ' + err.stack);
//             res.status(500).send('Error al registrar usuario');
//             return;
//         }
//         console.log('Usuario registrado correctamente');
//     res.redirect('/'); // Redirige a la página principal
//     });
// });

// // Iniciar servidor
// app.listen(3000, function(){
//         console.log(`Servidor corriendo en http://127.0.0.1:${3000}`);
//     });


    //     const express = require('express');
    //     const mysql = require('mysql');
    //     const bodyParser = require('body-parser');
    //     const path = require('path');

    //     const app = express();
    //     const port = 3000;

    //     // Configuración de la conexión a MySQL
    //     const connection = mysql.createConnection({
    //     host: '127.0.0.1',
    //     user: 'root',
    //     password: '',
    //     database: 'hotel'
    //     });

    //     connection.connect((err) => {
    //     if (err) {
    //         console.error('Error al conectar a la base de datos: ' + err.stack);
    //         return;
    //     }
    //     console.log('Conectado a la base de datos MySQL.');
    //     });

    // // Middleware
    // app.use(bodyParser.urlencoded({ extended: false }));
    // app.use(express.static(path.join(__dirname, 'public')));

    // // Configurar EJS como motor de vistas
    // app.set('view engine', 'ejs');
    // app.set('views', path.join(__dirname, 'views'));

    // // Ruta para el formulario
    // app.get('/', (req, res) => {
    // res.render('index');
    // }); 

    //     // Ruta para procesar el formulario
    //     app.post('/index.ejs', (req, res) => {
    //     const { nombre, email, contrasena } = req.body;
        
    //     const query = 'INSERT INTO login (nombre, email, contrasena) VALUES (?, ?, ?)';
    //     connection.query(query, [nombre, email, contrasena], (error, results) => {
    //         if (error) {
    //         console.error('Error al insertar datos: ', error);
    //         res.status(500).send('Error al crear la cuenta');
    //         } else {
    //         console.log('Cuenta creada con éxito');
    //         res.status(200).send('Cuenta creada con éxito');
    //         }
    //     });
    //     });

    //     app.listen(port, () => {
    //     console.log(`Servidor corriendo en http://localhost:${port}`);
    //     });

