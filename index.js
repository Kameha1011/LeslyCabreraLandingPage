const express = require('express');
const app = express();
// const nodemailer = require('nodemailer');

app.listen(3000, () =>{
    console.log("listening on 3000!!")
})

const path = require('path'); //use this code to run the file from outside the container folder!!
app.set('views', path.join(__dirname, 'views')); //this one too!
app.use(express.static(path.join(__dirname, '/public'))) // express automatically looks for a 'public' directory where u can store static files (css, js) and connect it to your routes
app.use(express.json())
app.set('view engine', 'ejs'); // express automatically requires ejs (remember to create a "views" directory and a home.ejs file!)

app.get('/', (req,res) => {  //app.get soporta solicitudes http del tipo get sus parametros son ('la ruta deseada',(req,res) =>{} es una funcion que toma la request y la response)
    
    res.render("home"); //res.render sirve para renderizar un archivo con el mismo nombre que pongamos dentro del ('') el cual sera un archivo .ejs guardado en /public
})
app.get('/thanks', (req,res) => {
    res.render("thanks");
})





// app.post('/', (req,res) => {
//     console.log(req.body);
    
// })