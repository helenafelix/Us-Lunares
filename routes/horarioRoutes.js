const express = require('express');
const router = express.Router();
const horarioController = require('../controllers/horarioController');

router.get('/', horarioController.index);
router.get('/novo', horarioController.create);
router.post('/add', horarioController.store);
router.get('/editar/:id', horarioController.edit);
router.post('/update/:id', horarioController.update);
router.get('/deletar/:id', horarioController.delete);

module.exports = router;