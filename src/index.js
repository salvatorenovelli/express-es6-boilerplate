require('dotenv').config();
import http from 'http';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './api';

let app = express();
app.server = http.createServer(app);

app.use(morgan(process.env.MORGAN_LOGGING_FORMAT));
app.use(bodyParser.json());

app.use('/api', api());

app.server.listen(process.env.PORT || 3001, () => {
	console.log(`Started on port ${app.server.address().port}`);
});
