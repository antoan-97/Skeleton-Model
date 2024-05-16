const express = require('express');
const routes = require('./routes');
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { log } = require('console');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/petstagram')
.then(() => console.log('DB Connected'))
.catch(err => console.log('DB Error,', err.message));

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs')
app.set('views', 'src/views');


app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(routes);
app.use(cookieParser);


app.listen(5000, console.log('Server is listeningon port 5000'));