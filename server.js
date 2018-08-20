const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const bodyParser = require('body-parser');
const rental = require('./router/rental.router');
const sale = require('./router/sale.router');
const newHome = require('./router/home.router');

//configure body parser
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); //required for JSON
app.use('/rental', rental);
app.use('/sale', sale);
app.use('/newHome', newHome);


app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
    
})