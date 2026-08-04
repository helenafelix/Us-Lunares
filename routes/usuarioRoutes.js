const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.index);
router.get('/novo', usuarioController.create);
router.post('/salvar', usuarioController.store); 
router.get('/editar/:id', usuarioController.edit);
router.post('/atualizar/:id', usuarioController.update); 
router.get('/deletar/:id', usuarioController.delete);

module.exports = router;