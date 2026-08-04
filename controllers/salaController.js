const Sala = require('../models/Sala');

class SalaController {
    async index(req, res) {
        try {
            const salas = await Sala.findAll();
            res.render('salas/index', { salas });
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao listar salas');
        }
    }

    create(req, res) {
        res.render('salas/create');
    }

    async store(req, res) {
        try {
            const { sala, capacidade, disponivel } = req.body;
            await Sala.create({ 
                sala, 
                capacidade, 
                disponivel: disponivel ? true : false 
            });
            res.redirect('/salas');
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao criar sala');
        }
    }

    async edit(req, res) {
        try {
            const sala = await Sala.findByPk(req.params.id);
            if (!sala) return res.status(404).send('Sala não encontrada');
            res.render('salas/edit', { sala });
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao editar sala');
        }
    }

    async update(req, res) {
        try {
            const sala = await Sala.findByPk(req.params.id);
            if (!sala) return res.status(404).send('Sala não encontrada');
            
            const { sala: nomeSala, capacidade, disponivel } = req.body;
            await sala.update({ 
                sala: nomeSala, 
                capacidade, 
                disponivel: disponivel ? true : false 
            });
            res.redirect('/salas');
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao atualizar sala');
        }
    }

    async delete(req, res) {
        try {
            const sala = await Sala.findByPk(req.params.id);
            if (!sala) return res.status(404).send('Sala não encontrada');
            await sala.destroy();
            res.redirect('/salas');
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao deletar sala');
        }
    }
}

module.exports = new SalaController();