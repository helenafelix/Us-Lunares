const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Sala = sequelize.define('Sala', {
    id_sala: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sala: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    disponivel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    capacidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'salas',
    timestamps: false
});

module.exports = Sala;