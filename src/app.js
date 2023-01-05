import express from 'express';
import path from 'path';
import hbs from 'hbs'; 
import { fileURLToPath } from 'url';   
import fetch from 'node-fetch';
import config from './config.js'

const API_KEY = config.API_KEY;

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public/');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
   res.render('index', {
      title: 'Home',
   })
});

app.get('*', (req, res) => {
   res.render('404');
});

app.listen(3000, () => {
   console.log('Server is up on server 3000');
});