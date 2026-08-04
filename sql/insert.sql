USE crud_lunares;

INSERT INTO usuarios (nome, email, matricula, senha, perfil) VALUES
('Administrador', 'admin@jaboatao.ifpe.edu.br', NULL, 'admin123', 'Gestão'),
('Helena Felix', 'mhofs@discente.ifpe.edu.br', '20251TDS-JG0269', 'mhofs123', 'Discente'),
('Ana Laura', 'alsf4@discente.ifpe.edu.br', '20251TDS-JG0277', 'lala03', 'Discente'),
('Havana Alves', 'havana.alves@jaboatao.ifpe.edu.br', NULL, 'havana123', 'Docente'),
('Fany Neves', 'fnvc@discente.ifpe.edu.br', NULL, 'fnvc123', 'Discente'),
('Eric Sales', 'eric.sales@jaboatao.ifpe.edu.br', NULL, 'eric123', 'Docente'),
('Carol Torres', 'carolina.torres@jaboatao.ifpe.edu.br', NULL, 'carol123', 'Docente'),
('DAE', 'daee@jaboatao.ifpe.edu.br', NULL, 'daee321', 'Gestão');


INSERT INTO disciplinas (materia, professor, qtdAulas, faltas) VALUES 
('História', 'Moisa', 61, 9),
('Biologia', 'Gilney', 63, 14),
('Química', 'Alyson', 43, 3),
('Português', 'Joseane', 72, 3),
('Geografia', 'Emmanuele', 54, 3),
('Matemática', 'Rogerio', 49, 13),
('Programação', 'Havana', 62, 6),
('Projeto e Prática', 'Havana', 63, 12),
('Banco de Dados', 'Carol', 59, 0),
('Artes', 'Adriano', 75, 0);


INSERT INTO salas (sala, disponivel, capacidade) VALUES 
('Lab 3', TRUE, 11),
('Sala 9', TRUE, 71),
('Lab 2', TRUE, 39),
('Sala 5', TRUE, 54),
('Lab 5', FALSE, 33),
('Sala 6', TRUE, 93),
('Lab 12', FALSE, 27),
('Lab 13', TRUE, 37),
('Sala 12', TRUE, 89),
('Sala 2', FALSE, 89);


INSERT INTO horarios (horarios, disciplinas, sala_lab) VALUES 
('07:00:00', 'Matemática', 'Sala 9'),
('07:50:00', 'Português', 'Sala 5'),
('08:40:00', 'História', 'Sala 6'),
('09:30:00', 'Geografia', 'Sala 12'),
('10:20:00', 'Biologia', 'Lab 2'),
('11:10:00', 'Química', 'Lab 3'),
('13:00:00', 'Programação', 'Lab 13');