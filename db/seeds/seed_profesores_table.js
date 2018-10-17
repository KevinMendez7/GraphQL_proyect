const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('teacher').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('teacher').insert([{
        id: i + 1,
        name: casual.name,
        nacionality: casual.country,
        gender: casual.random_element(['MASCULINO', 'FEMENINO'])
      }])
    })

    return Promise.all(promises)
  })
}
