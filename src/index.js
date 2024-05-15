const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('Action')
})


app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

app.listen(5000,console.log('Server is listeningon port 5000'));