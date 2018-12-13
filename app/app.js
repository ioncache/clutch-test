#!/usr/bin/env node
'use strict';

/******************/
/* Module imports */
/******************/

const compression = require('compression');
const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path');

/*********************/
/* Initialize server */
/*********************/

const app = express();
app.use(cors(), compression());

/* static content */
app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/scripts', express.static(path.join(__dirname, '/scripts')));
app.use('/styles', express.static(path.join(__dirname, '/styles')));

/**********/
/* Routes */
/**********/

/*
  index / home page
*/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'))
});

/*
  car data
*/
app.get('/cars', (req, res) => {
  res.sendFile(path.join(__dirname + '/data/data.json'), {
    headers: 'Content-type: application/json'
  });
});

// scripts, css, images,

let server = app.listen(9000);
