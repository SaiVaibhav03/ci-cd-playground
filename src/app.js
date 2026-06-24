const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('working fine');
});

const catsRoute = require('./routes/cats');
app.use('/cats', catsRoute);

const dogsRoute = require('./routes/dogs');
app.use('/dogs', dogsRoute);

const birdsRoute = require('./routes/birds');
app.use('/birds', birdsRoute);

const fishRoute = require('./routes/fish');
app.use('/fish', fishRoute);

module.exports = app;
