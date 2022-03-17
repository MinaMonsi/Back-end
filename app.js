const express = require('express');
const app = express();
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) =>{
    // renders the home.ejs template
    res.render('home') 
})

app.listen(3001, ()=> {
    console.log('Serving on port 3001')
})