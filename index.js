require('dotenv').config()
const express = require('express');
require('./config/db');

const app = express();
const cors = require('cors');
const Router = require('./routes/todo');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/',(req,res) => {
    return res.send({statue:"running..."})
});

app.use('/api',Router);

app.listen(PORT,() => {
    console.log('server listning at ',PORT);
})


// MONGODB_KEY = mongodb://localhost/todoapi
