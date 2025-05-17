const express = require('express'); //importando
const app = express(); //iniciando o express

app.get("/", function(req,res){ //cria a rota, / significa a pagina inicial, precisa de uma funcao para falar o que vai fazer
    res.send("Bem vindo!"); //nunca colocar mais de uma res.send! so e enviado uma vez e da erro
});

app.get("/blog/:artigo?", function(req, res) { //so funciona nas versoes express@4
    var artigo = req.params.artigo;
    if(artigo){
        res.send("<h2>Artigo " + artigo + "</h2>");
    }else{
        res.send("<h2>Bem vindo ao blog</h2>");
    }
    
});

app.get("/canal/youtube", function(req,res){ //criando rotas
    var canal = req.query["canal"]; //query params, com por exemplo /canal/youtube?canal=richard, bem dinamico mas pouco usado no mercado
    if(canal){
        res.send(canal);
    }else{
        res.send("Nenhum canal fornecido")
    }
    
})

app.get("/ola/:nome/:empresa", function(req,res){ // /:nome, criando um parametro pra rota, pode ter quantos quiser, /:nome/:empresa...
    //REQ => Dados enviados do usuario.
    //RES => Resposta que vai ser enviada para o usuario.
    var nome = req.params.nome; //parametro
    var empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " do " + empresa + " </h1>");
})

app.listen(8080,function(erro){ //porta, depois funcao
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor iniciado");
    }
})