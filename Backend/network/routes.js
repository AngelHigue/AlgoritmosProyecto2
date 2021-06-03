const express = require('express')

const neo = require('../components/Neo/network')

const routes = server => {
  server.use('/neo', neo)

}

module.exports = routes
