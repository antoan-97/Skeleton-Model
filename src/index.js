const express = require('express');
const routes = require('./routes');
const handlebars = require('express-handlebars');

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs')
app.set('views', 'src/views');


app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);


app.listen(5000, console.log('Server is listeningon port 5000'));