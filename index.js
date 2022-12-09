const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = express()

const { readFile } = require('fs').promises;

app.get('/', async (request,response)=> {
    response.send( await readFile('./home.html', 'utf-8'))
})

app.listen(process.env.port || 3000, ()=> console.log('app avalaible at http://localhost:3000'))