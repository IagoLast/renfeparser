'use strict';
const express = require('express');
const cors = require('cors');
const parser = require('./src/parser.js');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.set('json spaces', 2);

// Routing
app.get('/:from/:to/:date', parser);
// start app
app.listen(PORT);
