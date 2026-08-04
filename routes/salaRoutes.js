const express = require('express');
const router = express.Router();
const salaController = require('../controllers/salaController');

router.get('/', salaController.index);
router.get('/novo', salaController.create);
router.post('/add', salaController.store);
router.get('/editar/:id', salaController.edit);
router.post('/update/:id', salaController.update);
router.get('/deletar/:id', salaController.delete);

module.exports = router;