exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('teacher', (table) => {
      table.increments('id').primary().unsigned()
      table.string('name')
      table.string('nacionality')
      table.string('gender')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('teacher')
  ])
)
