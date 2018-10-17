const Course = require('./models/course')
const Teacher = require('./models/teacher')

const resolvers = {
  Query: {
    courses: () => Course.query().eager('[teacher.[courses], comments]'),
    teachers: () => Teacher.query().eager('courses'),
    course: (rootValue, args) => Course.query().eager('[teacher, comments]').findById(args.id),
    teacher: (rootValue, args) => Teacher.query().findById(args.id),
    search: (_, args) =>{
      return [
        Teacher.query().findById(4),
        Course.query().findById(1)
      ]

    }
  },
  SearchResult: {
    __resolveType: (obj) =>{
      if(obj.name) return 'Teacher'
      return 'Course'
    }
  },

  Mutation: {
    addTeacher: (_, args) => {
      // console.log(args.teacher)
      return Teacher.query().insert(args.teacher)
    },
    editTeacher: (_, args) => {
      return Teacher.query().patchAndFetchById(args.teacherId, args.teacher)
    },
    deleteTeacher: (_, args) => {
      return Teacher.query().findById(args.teacherId).then((teacher) =>{
        return Teacher.query().deleteById(args.teacherId).then((rowsAffected) => {
          if(rowsAffected > 0) return teacher
          throw new Error(`The teacher with id = '${args.teacherId}' couldn't be removed`)
        })
      })
    }
  }
}

module.exports = resolvers
