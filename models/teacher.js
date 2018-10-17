const { Model } = require('objection')
const path = require('path')

class Teacher extends Model {
  static get tableName () {
    return 'teacher'
  }

  static get relationMappings () {
    return {
      courses: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '/course'),
        join: {
          from: 'teacher.id',
          to: 'course.teacher_id'
        }
      }
    }
  }
}

module.exports = Teacher
