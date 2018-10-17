module.exports = {

  development: {
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'admin',
      database : 'graph_ql'
    }
  },

  production: {
    // Acá irían los datos para la conexión
    // en un ambiente de producción
  }
}
