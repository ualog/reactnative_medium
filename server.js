require('./models/connect.db');

const express = require('express');
const app = express();


const router = require('./routes');

app.use('/', router);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => {
	console.log(`*** SERVER STARTED AND LISTENING ON PORT 8080 ***`);
});

module.export = app;
