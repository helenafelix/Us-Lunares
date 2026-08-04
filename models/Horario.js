const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Horario = sequelize.define('Horario', {
    id_horario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    horarios: {
        type: DataTypes.TIME,
        allowNull: false
    },
    disciplinas: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    sala_lab: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    tableName: 'horarios',
    timestamps: false
});

module.exports = Horario;