const SalaDeAula = require('../models/SalasDeAula');

const getAllSalasDeAula = async (req, res) => {
  try {
    const salas = await SalaDeAula.findAll({ where: { removido: false } });
    res.json(salas);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar salas de aula' });
  }
};

const getSalaDeAulaById = async (req, res) => {
  const { id } = req.params;
  try {
    const sala = await SalaDeAula.findOne({ where: { salasdeaulaid: id, removido: false } });
    if (sala) {
      res.json(sala);
    } else {
      res.status(404).json({ error: 'Sala de aula não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar sala de aula' });
  }
};

const insertSalaDeAula = async (req, res) => {
  const { descricao, localizacao, capacidade } = req.body;
  try {
    const novaSala = await SalaDeAula.create({ descricao, localizacao, capacidade });
    res.status(201).json(novaSala);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar sala de aula' });
  }
};

const updateSalaDeAula = async (req, res) => {
  const { id } = req.params;
  const { descricao, localizacao, capacidade } = req.body;
  try {
    const sala = await SalaDeAula.findByPk(id);
    if (!sala || sala.removido) {
      return res.status(404).json({ error: 'Sala de aula não encontrada' });
    }
    sala.descricao = descricao;
    sala.localizacao = localizacao;
    sala.capacidade = capacidade;
    await sala.save();
    res.json(sala);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar sala de aula' });
  }
};

const deleteSalaDeAula = async (req, res) => {
  const { id } = req.params;
  try {
    const sala = await SalaDeAula.findByPk(id);
    if (!sala || sala.removido) {
      return res.status(404).json({ error: 'Sala de aula não encontrada' });
    }
    sala.removido = true;
    await sala.save();
    res.json({ message: 'Sala de aula removida com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao remover sala de aula' });
  }
};

module.exports = {
  getAllSalasDeAula,
  getSalaDeAulaById,
  insertSalaDeAula,
  updateSalaDeAula,
  deleteSalaDeAula
};
