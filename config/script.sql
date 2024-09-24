-- Criação da tabela salasdeaula
CREATE TABLE salasdeaula (
    salasdeaulaid SERIAL PRIMARY KEY,   
    descricao VARCHAR(255) NOT NULL, 
    localizacao VARCHAR(255) NOT NULL,  
    capacidade INTEGER NOT NULL, 
    removido BOOLEAN      
);

-- Inserindo uma nova sala de aula
INSERT INTO salasdeaula (descricao, localizacao, capacidade, removido)
VALUES ('Sala 101', 'Predio A', 40, FALSE);

-- Atualizando uma sala de aula
UPDATE salasdeaula
SET descricao = 'Sala 102', capacidade = 50
WHERE salasdeaulaid = 1;

-- Consultado todas as salas de aula
SELECT * FROM salasdeaula;

-- Consultando uma sala de aula específica pelo ID
SELECT * FROM salasdeaula
WHERE salasdeaulaid = 1;

-- Excluindo permanentemente uma sala de aula
DELETE FROM salasdeaula
WHERE salasdeaulaid = 1;
