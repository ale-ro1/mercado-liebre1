const express = require('express');
const app = express();


app.use(express.static('public'));


app.listen(3013, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});


app.get("/registro", (req, res) => {
    res.sendFile(__dirname + "/views/register.html")
});