const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Disciplina = sequelize.define('Disciplina', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    materia: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    professor: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    qtdAulas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    faltas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: 'disciplinas',
    timestamps: false
});

module.exports = Disciplina;
