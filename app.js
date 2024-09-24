const express = require('express');
const sequelize = require('./config/database');
const salaDeAulaRoutes = require('./routes/SalaDeAulaRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', salaDeAulaRoutes);

sequelize.sync().then(() => {
    console.log('Banco de dados PostgreSQL sincronizado');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  }).catch(err => {
    console.error('Erro ao sincronizar banco de dados: ', err);
  });
  