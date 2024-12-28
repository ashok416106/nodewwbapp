const express = require('express')
const chalk = require('chalk');
const  debug = require("debug")('app');
const morgan = require('morgan')
const path = require('path')
const app = express();

const PORT = process.env.PORT;
app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname,'/public/')))
app.get('/',(req, res,)=>{
    debug( 'get api call')
    res.send('app started')
})

app.listen(PORT,()=>{
    debug('running on '+chalk.green(PORT))
})