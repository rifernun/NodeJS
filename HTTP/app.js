var http = require('http');

http.createServer(function(req,res){
    res.end("<h1>Bem vindo</h1>") //resposta
}).listen(8080); //cria o servidor e roda ele na porta 8080
console.log("Meu servidor esta rodando")
