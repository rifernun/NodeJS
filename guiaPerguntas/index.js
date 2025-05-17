const express = require('express');
const app = express();

//dizendo ao express que estou usando o ejs para desenhar o html
app.set('view engine', 'ejs');

app.get("/:nome/:lang", function(req,res){
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirmsg = false;

    var produtos = [
        {nome:"doritos", preco: 3.14},
        {nome:"coca-cola", preco: 5.00},
        {nome:"leite", preco: 3.45},
        {nome:"carne", preco: 25.50},
        {nome:"redbull", preco: 15.00},
        {nome:"nescau", preco: 10.00}
    ];

    res.render('index', { //render, renderiza objetos dentro de onde for definido na views
        nome: nome,
        lang: lang,
        empresa: "youtube",
        empregados: 5000,
        msg: exibirmsg,
        produtos: produtos
    }); //desenhando em html o index do meu view
});

app.listen(8080,()=>{console.log("app rodando")});