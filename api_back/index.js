const express = require('express')
const app = express()
const port = 3001
const login = []

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/',(req,res)=>(
    res.send('Hello World Web server Node!')
))

app.post('/login', (req, res, next) => { 
    console.log("Validação de Login!");
    //salva no banco de dados
    login.push({
        nome: req.body.txtNome, 
        idade: parseInt(req.body.txtIdade), 
        uf: req.body.cmbUF
    });
    res.json({message: "API Ok!", dados: login});
}) 

app.listen(port,()=>(
    console.log("Servidor Iniciado!")
))
