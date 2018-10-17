const { Model } = require('objection')
const path = require('path')

class Course extends Model {
  static get tableName () {
    return 'course'
  }

  static get relationMappings () {
    return {
      teacher: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/teacher'),
        join: {
          from: 'course.teacher_id',
          to: 'teacher.id'
        }
      },
      comments: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '/comment'),
        join: {
          from: 'course.id',
          to: 'comment.course_id'
        }
      }
    }
  }
}

module.exports = Course
