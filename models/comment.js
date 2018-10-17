const { Model } = require('objection')
const path = require('path')

class Comment extends Model {
  static get tableName () {
    return 'comment'
  }

  static get relationMappings () {
    return {
      course: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/course'),
        join: {
          from: 'comment.course_id',
          to: 'course.id'
        }
      }
    }
  }
}

module.exports = Comment
