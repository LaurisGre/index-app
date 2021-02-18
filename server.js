import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';

import indexRouter from './routes/index.js';

const app = express();
const __dirname = path.resolve();
dotenv.config();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

app.use(expressLayouts);
app.use(express.static('public'));
app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);
