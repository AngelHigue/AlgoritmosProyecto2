const neo4j = require('neo4j-driver')



const list = (categoria, multijugador, edad, plataforma) => {
  return new Promise((resolve, reject) => {

    
    let juegos = []

    console.log(categoria, multijugador)

    if(categoria == "Accion" ){

      if(multijugador == "Si"){

        if(plataforma == "PC"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC', url:''})
        }else if(plataforma == "PlayStation"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }else{
          juegos.push({nombre: 'Call of duty 2', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }

      }else{
        if(plataforma == "PC"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC'})
        }else if(plataforma == "PlayStation"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }else{


          juegos.push({nombre: 'Call of duty 2', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }
      }

    }else if(categoria == "Terror" ){

      if(multijugador == "Si"){

        if(plataforma == "PC"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC'})
        }else if(plataforma == "PlayStation"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }else{
          juegos.push({nombre: 'Call of duty 2', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }

      }else{
        if(plataforma == "PC"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC'})
        }else if(plataforma == "PlayStation"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }else{
          juegos.push({nombre: 'Call of duty 2', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }
      }

    }


    if(categoria == "Aventura" ){

      if(multijugador == "Si"){

        if(plataforma == "PC"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC'})
        }else if(plataforma == "PlayStation"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }else{
          juegos.push({nombre: 'Call of duty 2', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }

      }else{
        if(plataforma == "PC"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC'})
        }else if(plataforma == "PlayStation"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }else{
          juegos.push({nombre: 'Call of duty 2', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }
      }

    }

    if(categoria == "FPS" ){

      if(multijugador == "Si"){

        if(plataforma == "PC"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC'})
        }else if(plataforma == "PlayStation"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }else{
          juegos.push({nombre: 'Call of duty 2', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }

      }else{
        if(plataforma == "PC"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC'})
        }else if(plataforma == "PlayStation"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }else{
          juegos.push({nombre: 'Call of duty 2', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }
      }

    }

    if(categoria == "Historia" ){

      if(multijugador == "Si"){

        if(plataforma == "PC"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC'})
        }else if(plataforma == "PlayStation"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }else{
          juegos.push({nombre: 'Call of duty 2', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }

      }else{
        if(plataforma == "PC"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC'})
        }else if(plataforma == "PlayStation"){
          juegos.push({nombre: 'Call of duty', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }else{
          juegos.push({nombre: 'Call of duty 2', multijugador: 'Si', categoria: 'Accion', plataforma: 'PC-PlayStation'})
        }
      }

    }

    resolve(juegos)
    
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
