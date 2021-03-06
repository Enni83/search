'use strict';

const express = require('express');
const routerRoot = express.Router();

// Health check
routerRoot.get('/ping', function(req, res) {
  res.send('PONG');
});

module.exports = routerRoot;
