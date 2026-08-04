const Horario = require('../models/Horario');
const Disciplina = require('../models/Disciplina');
const Sala = require('../models/Sala');

class HorarioController {
    async index(req, res) {
        try {
            const horarios = await Horario.findAll();
            res.render('horarios/index', { horarios });
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao listar horários');
        }
    }

    async create(req, res) {
        try {
            const disciplinas = await Disciplina.findAll();
            const salas = await Sala.findAll();
            res.render('horarios/create', { disciplinas, salas });
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao carregar formulário');
        }
    }

    async store(req, res) {
        try {
            const { horarios, disciplinas, sala_lab } = req.body;
            await Horario.create({ horarios, disciplinas, sala_lab });
            res.redirect('/horarios');
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao criar horário');
        }
    }

    async edit(req, res) {
        try {
            const horario = await Horario.findByPk(req.params.id);
            if (!horario) return res.status(404).send('Horário não encontrado');
            
            const disciplinas = await Disciplina.findAll();
            const salas = await Sala.findAll();
            
            res.render('horarios/edit', { horario, disciplinas, salas });
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao editar horário');
        }
    }

    async update(req, res) {
        try {
            const horario = await Horario.findByPk(req.params.id);
            if (!horario) return res.status(404).send('Horário não encontrado');
            
            const { horarios, disciplinas, sala_lab } = req.body;
            await horario.update({ horarios, disciplinas, sala_lab });
            res.redirect('/horarios');
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao atualizar horário');
        }
    }

    async delete(req, res) {
        try {
            const horario = await Horario.findByPk(req.params.id);
            if (!horario) return res.status(404).send('Horário não encontrado');
            await horario.destroy();
            res.redirect('/horarios');
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao deletar horário');
        }
    }
}

module.exports = new HorarioController();