-- Criar schema
CREATE SCHEMA IF NOT EXISTS crud_lunares;
USE crud_lunares;

-- Tabela de Usuários
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE KEY NOT NULL,
    matricula VARCHAR(30) UNIQUE KEY,
    senha VARCHAR(225) NOT NULL,
    perfil ENUM('Gestão', 'Docente', 'Discente') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de Salas
CREATE TABLE salas (
    id_sala INT AUTO_INCREMENT PRIMARY KEY,
    sala VARCHAR(20) NOT NULL UNIQUE,
    disponivel BOOLEAN NOT NULL DEFAULT TRUE,
    capacidade INT NOT NULL
);

-- Tabela de Disciplinas
CREATE TABLE disciplinas (
    codigo INT AUTO_INCREMENT PRIMARY KEY,
    materia VARCHAR(20) UNIQUE NOT NULL,
    professor VARCHAR(20) NOT NULL,
    qtdAulas INT NOT NULL DEFAULT 0,
    faltas INT NOT NULL DEFAULT 0
);

-- Tabela de Horários (CORRIGIDA)
CREATE TABLE horarios (
    id_horario INT AUTO_INCREMENT PRIMARY KEY,
    horarios TIME NOT NULL,
    disciplinas VARCHAR(20) NOT NULL,
    sala_lab VARCHAR(20) NOT NULL,
    FOREIGN KEY (disciplinas) REFERENCES disciplinaS(materia) ON DELETE CASCADE,
    FOREIGN KEY (sala_lab) REFERENCES salas(sala) ON DELETE CASCADE,
    UNIQUE KEY unique_horario (horarios, disciplinas, sala_lab)
);