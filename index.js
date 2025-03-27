const express = require('express')
const app = express()
const port = 2500;

app.get('/mary', (req, res)=>{
    res.send("Fazendo APIs, uhull")
})

app.listen(port, ()=>{
    console.log("Servidor ta vivásso")
})
