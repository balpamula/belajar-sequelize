const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT;
const bookRoute = require('./routes/book');
const { errors } = require('celebrate');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = require('./models');
db.sequelize.sync();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/books', bookRoute);

app.use(errors())

app.listen(port, () => console.log(`App listening on port http://localhost:${port}`));
