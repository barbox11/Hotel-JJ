const mysql = require('mysql');
const express = require('express');

const app = express();
const port = 3000;



// Configura la conexión a la base de datos
//const connection = mysql.createConnection({
    //host: '127.0.0.1' ,
    //user: 'root',
   // password: '',
    //database: 'hotel'
//});

//connection.connect(function(err){
   // if(err){
       // throw err;
   // }else{
       // console.log("conexon exitosa");
    //}
//});
app.set ("view engine","ejs");


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/index.ejs", function(req,res){
    res.render("index");
});

app.post("/validar", function(req,res){
    const datos = req.body;

    console.log(datos);
})


// Inicia el servidor
app.listen(3000, function(){
    console.log(`Servidor corriendo en http://127.0.0.1:${3000}`);
});





