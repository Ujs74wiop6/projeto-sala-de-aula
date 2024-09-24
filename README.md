# Sistema de Gerenciamento de Salas de Aula - API

Esta API foi desenvolvida para realizar operações de CRUD (Create, Read, Update, Delete) no sistema de gerenciamento de salas de aula. A aplicação utiliza Node.js, Express e PostgreSQL, e permite o controle das salas de aula de uma escola.

## Tecnologias Utilizadas

- **Node.js**: Servidor backend.
- **Express**: Framework para construção das APIs.
- **Sequelize**: ORM para integração com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **Postman**: Testes das rotas da API.

## Requisitos

- **Node.js** versão 14+.
- **PostgreSQL** instalado e configurado.
- Um editor de texto como **VSCode**.

## Utilizando o Projeto

```bash
git clone git@github.com:Ujs74wiop6/projeto-sala-de-aula.git
```

```bash
cd projeto-sala-de-aula/
```

```bash
npm install
```

### Configure o seu SGBD (no caso do projeto foi o PostgreSQL) e crie a tabela
### Script SQL está na pasta `/conf`

```bash
node app.js
```

## Rotas da API

### 1. Listar todas as salas de aula

- **Método:** `GET`
- **URL:** `/api/salasdeaula`
- **Descrição:** Retorna todas as salas de aula que não foram removidas (soft delete).

#### Exemplo:
```json
[
  {
    "salasdeaulaid": 1,
    "descricao": "Sala 101",
    "localizacao": "Prédio A",
    "capacidade": 30,
    "removido": false
  },
  {
    "salasdeaulaid": 2,
    "descricao": "Sala 202",
    "localizacao": "Prédio B",
    "capacidade": 25,
    "removido": false
  }
]

```

### 2. Buscar uma sala de aula por ID

- **Método:** `GET`
- **URL:** `/api/salasdeaula/:id`
- **Descrição:** Retorna uma sala de aula específica pelo ID, desde que não tenha sido removida.

#### Exemplo:
```json
{
    "salasdeaulaid": 1,
    "descricao": "Sala 101",
    "localizacao": "Prédio A",
    "capacidade": 30,
    "removido": false
}
```

### 3. Inserir uma nova sala de aula

- **Método:** `POST`
- **URL:** `/api/salasdeaula`
- **Descrição:** Cria um novo registro de sala de aula.

#### Exemplo:
```json
{
  "descricao": "Sala 203",
  "localizacao": "Prédio C",
  "capacidade": 40
}
```

### 4. Atualizar uma sala de aula

- **Método:** `PUT`
- **URL:** `/api/salasdeaula/:id`
- **Descrição:** tualiza os dados de uma sala de aula existente com base no ID.

#### Exemplo:
```json
{
    "descricao": "Sala 101 - Atualizada",
    "localizacao": "Prédio A",
    "capacidade": 35
}
```

### 5. Remover uma sala de aula (Soft Delete)

- **Método:** `DELETE`
- **URL:** `/api/salasdeaula/:id`
- **Descrição:** Marca uma sala de aula como removida (soft delete) pelo ID.

#### Exemplo:
```json
{
    "message": "Sala de aula removida com sucesso"
}

```
