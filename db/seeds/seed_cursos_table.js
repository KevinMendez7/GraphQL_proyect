const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('course').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('course').insert([{
        id: i + 1,
        title: casual.words(2),
        description: casual.sentences(3),
        teacher_id: casual.integer(1, 10),
        rating: casual.double(1, 5)
      }])
    })

    return Promise.all(promises)
  })
}
