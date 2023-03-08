const express = require('express');

const router = express.Router();

const Usuario = require('./usuarios');



// Operações CRUD do recurso aluno
router.get('/', async (req, res) => {
  //https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  const usuarios = await Usuario.findAll()
  res.send(usuarios);
});

router.get('/:id', async (req, res) => {
  const usuarioId = req.params.id;
  //https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  const usuario = await Usuario.findByPk(usuarioId)
  res.send(usuario);
});

router.get('/:id/nome', async (req, res) => {
  const usuario = await Usuario.findByPk(usuarioId)

  res.send({
    nome: usuario.nome
  })
})

router.post('/', async (req, res) => {
  let novoUsuario = req.body;
  novoUsuario = await Usuario.create(req.body)
  res.send({ message: 'Usuario adicionado com sucesso', usuario: novoUsuario });
});

router.put('/:id', async (req, res) => {
  const usuarioId = req.params.id;
  const dadosNovosUsuario = req.body;

  let usuario = await Usuario.findByPk(usuarioId);

  if (usuario) {
    usuario.set({ ...dadosNovosUsuario })
    await usuario.save();
    res.send({ message: 'Usuario atualizado com sucesso' });
  } else {
    res.status(404).send({ message: 'Usuario não encontrado' });
  }
});

router.delete('/:id', async (req, res) => {
  const usuarioId = req.params.id;
  let usuario = await Usuario.findByPk(usuarioId);
  if (usuario) {
    await usuario.destroy();
    res.send({ message: 'Usuario excluído com sucesso' });
  } else {
    res.status(404).send({ message: 'Usuario não encontrado' });
  }
});

module.exports = router;

