const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

// роуты
const apiRoute = require('./routes/api.routes');

// express
const app = express();

// мидлвары
app.use(cors());
app.use(express.json({ extended: true }));
app.use('/static', express.static(__dirname));
app.use('/api', apiRoute);

if(process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'frontend', 'build')));

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

const PORT = config.get('port') || 5000;

async function yo() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
    }

    catch(e) {
        console.log('Какие то проблемы! Лучше хлебни пивка', e.message);
        process.exit(1);
    }
}

yo();

app.listen(PORT, console.log(`Экспресс стартанул на ${PORT} порту`));
