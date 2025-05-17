const express = require('express');
const app = express();

//dizendo ao express que estou usando o ejs para desenhar o html
app.set('view engine', 'ejs');

app.get("/:nome/:lang", function(req,res){
    var nome = req.params.nome;
    var lang = req.params.lang;
    let exibirmsg = false;
    res.render('index', { //render, renderiza objetos dentro de onde for definido na views
        nome: nome,
        lang: lang,
        empresa: "youtube",
        empregados: 5000,
        msg: exibirmsg
    }); //desenhando em html o index do meu view
});

app.listen(8080,()=>{console.log("app rodando")});