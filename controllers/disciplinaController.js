const Disciplina = require('../models/Disciplina');

class DisciplinaController {
    async index(req, res) {
        try {
            const disciplinas = await Disciplina.findAll();
            res.render('disciplinas/index', { disciplinas });
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao listar disciplinas');
        }
    }

    create(req, res) {
        res.render('disciplinas/create');
    }

    async store(req, res) {
        try {
            const { materia, professor, qtdAulas, faltas } = req.body;
            await Disciplina.create({ 
                materia, 
                professor, 
                qtdAulas: parseInt(qtdAulas) || 0,
                faltas: parseInt(faltas) || 0
            });
            res.redirect('/disciplinas');
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao criar disciplina');
        }
    }

    async edit(req, res) {
        try {
            const disciplina = await Disciplina.findByPk(req.params.id);
            if (!disciplina) return res.status(404).send('Disciplina não encontrada');
            res.render('disciplinas/edit', { disciplina });
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao editar disciplina');
        }
    }

    async update(req, res) {
        try {
            const disciplina = await Disciplina.findByPk(req.params.id);
            if (!disciplina) return res.status(404).send('Disciplina não encontrada');
            
            const { materia, professor, qtdAulas, faltas } = req.body;
            await disciplina.update({ 
                materia, 
                professor, 
                qtdAulas: parseInt(qtdAulas) || 0,
                faltas: parseInt(faltas) || 0
            });
            res.redirect('/disciplinas');
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao atualizar disciplina');
        }
    }

    async delete(req, res) {
        try {
            const disciplina = await Disciplina.findByPk(req.params.id);
            if (!disciplina) return res.status(404).send('Disciplina não encontrada');
            await disciplina.destroy();
            res.redirect('/disciplinas');
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao deletar disciplina');
        }
    }
}

module.exports = new DisciplinaController();