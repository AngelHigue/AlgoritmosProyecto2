const store = require('./store')

const list = (categoria, multijugador, edad, plataforma) => {
  return new Promise((resolve, reject) => {
    store
      .list(categoria, multijugador, edad, plataforma)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const save = (categoria, multijugador, edad, plataforma) => {
  return new Promise((resolve, reject) => {
    store
      .save(categoria, multijugador, edad, plataforma)
      .then(value => {
        resolve(value)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = {
  list,
  save,
}
