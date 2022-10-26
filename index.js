const express = require('express');
const app = express();
// const nodemailer = require('nodemailer');

const port = process.env.PORT || 4000
app.listen(port)

const path = require('path'); 
app.set('views', path.join(__dirname, 'views')); 
app.use(express.static(path.join(__dirname, '/public'))) 
app.use(express.json())
app.set('view engine', 'ejs'); 
app.get('/', (req,res) => {  
    res.render("home"); 
})
app.get('/thanks', (req,res) => {
    res.render("thanks");
})





