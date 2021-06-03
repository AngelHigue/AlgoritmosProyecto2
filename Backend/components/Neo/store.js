const neo4j = require('neo4j-driver')

var driver = neo4j.driver(
  'bolt://94.74.64.136:7474',
  neo4j.auth.basic('neo4j', 'hola12340987*!'),
)
var session = driver.session()

const list = (categoria, multijugador, edad, plataforma) => {
  return new Promise((resolve, reject) => {

    session
      .run('MATCH (n1)-[${categoria}]->(n2) RETURN r, n1, n2 ')
      .run('MATCH (n1)-[${multijugador}]->(n2) RETURN r, n1, n2')
      .run('MATCH (n1)-[${edad}]->(n2) RETURN r, n1, n2')
      .run('MATCH (n1)-[${plataforma}]->(n2) RETURN r, n1, n2 LIMIT 10')
      .then(result => {
        result.records.forEach(record => {
          console.log(record)
        })
        resolve('Good!')
      })
      .catch(err => {
        reject(err)
      })
  })
}

const save = (categoria, multijugador, edad, plataforma) => {
  return new Promise((resolve, reject) => {
    session
      .run(
        `CREATE (a:Game {name: $${categoria}, multijugador: $${multijugador}, edad: $${plataforma}, name: $${plataforma}}) RETURN a`,
      )
      .then(result => {
        resolve('Good!')
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
