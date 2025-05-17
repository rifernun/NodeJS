CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade int
);

INSERT INTO usuarios(nome, email, idade)
VALUES('Richard', 'rifernun@gmail.com', 17);

INSERT INTO usuarios(nome, email, idade)
VALUES('Ronaldo', 'ronaldo@gmail.com', 20);

INSERT INTO usuarios(nome, email, idade)
VALUES('Teste', 'teste@gmail.com', 50);

INSERT INTO usuarios(nome, email, idade)
VALUES('Rogerio', 'rogerio@gmail.com', 37);

SELECT * FROM usuarios WHERE nome = 'blablabla';

DELETE FROM usuarios WHERE nome = 'Richard'; --delete nunca sem WHERE

UPDATE usuarios SET nome = 'Nome de Teste' WHERE nome = 'Teste'; --UPDATE nunca sem WHERE