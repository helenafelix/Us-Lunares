const express = require('express');
const router = express.Router();
const disciplinaController = require('../controllers/disciplinaController');

router.get('/', disciplinaController.index);
router.get('/novo', disciplinaController.create);
router.post('/add', disciplinaController.store);
router.get('/editar/:id', disciplinaController.edit);
router.post('/update/:id', disciplinaController.update);
router.get('/deletar/:id', disciplinaController.delete);

module.exports = router;