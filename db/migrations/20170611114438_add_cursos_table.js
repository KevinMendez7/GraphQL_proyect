exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('course', (table) => {
      table.increments('id').primary().unsigned()
      table.string('title')
      table.string('description')
      table.integer('teacher_id').unsigned()
      table.string('gender')
      table.double('rating').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('course')
  ])
)
