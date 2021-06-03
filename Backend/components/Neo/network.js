const express = require('express')
const router = express.Router()
const response = require('../../network/responses')
const controller = require('./controller')

// Traer lista de juegos recomenados
router.post('/search', (req, res) => {
  let categoria = req.body.categoria
  let multijugador = req.body.multijugador
  let edad = req.body.edad
  let plataforma = req.body.plataforma

  controller
    .list(categoria, multijugador, edad, plataforma)
    .then(value => response.success(req, res, value, 200))
    .catch(err => response.error(req, res, err, 500, err))
})

// Traer lista de juegos recomenados
router.post('/new', (req, res) => {
  let categoria = req.body.categoria
  let multijugador = req.body.multijugador
  let edad = req.body.edad
  let plataforma = req.body.plataforma

  controller
    .save(categoria, multijugador, edad, plataforma)
    .then(value => response.success(req, res, "Guardado correctamente", 200))
    .catch(err => response.error(req, res, err, 500, err))
})

module.exports = router
