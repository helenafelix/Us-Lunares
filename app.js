const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const sequelize = require('./config/database');
require('dotenv').config();

// Importar modelos
const Usuario = require('./models/Usuario');
const Sala = require('./models/Sala');
const Disciplina = require('./models/Disciplina');
const Horario = require('./models/Horario');

const app = express();

// Config. Handlebars
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
    helpers: {
        eq: (a, b) => a === b
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
const usuarioRoutes = require('./routes/usuarioRoutes');
const salaRoutes = require('./routes/salaRoutes');
const disciplinaRoutes = require('./routes/disciplinaRoutes');
const horarioRoutes = require('./routes/horarioRoutes');

app.use('/usuarios', usuarioRoutes);
app.use('/salas', salaRoutes);
app.use('/disciplinas', disciplinaRoutes);
app.use('/horarios', horarioRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

const port = process.env.PORT || 3000;

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
        app.listen(port, () => {
            console.log(`Servidor em execução em http://localhost:${port}`);
        });
    })
    .catch(error => {
        console.error('Não foi possível conectar ao banco de dados:', error);
    });