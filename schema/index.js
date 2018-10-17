const {makeExecutableSchema, addMockFunctionsToSchema} = require('graphql-tools')
const resolvers = require('../resolvers')
const Course = require('./course')
const Teacher = require('./teacher')

const rootQuery = `
  union SearchResult = Teacher | Course

  type Query {
    courses: [Course]
    teachers: [Teacher]
    course(id: Int): Course
    teacher(id: Int): Teacher
    search(query: String!): [SearchResult]
  }

  type Mutation {
    addTeacher(teacher: newTeacher): Teacher
    editTeacher(teacherId: Int!, teacher: editableTeacher): Teacher
    deleteTeacher(teacherId: Int!): Teacher
  }
`

const schema = makeExecutableSchema({
   typeDefs: [rootQuery, Teacher, Course],
   resolvers
 })

 // addMockFunctionsToSchema({
 //   schema,
 //   mocks: {
 //     Course: () =>{
 //       return{
 //         id: casual.uuid,
 //         title: casual.sentence,
 //         description: casual.sentences(2)
 //       }
 //     }
 //   },
 //   Teacher: () => {
 //     return{
 //       id: casual.uuid,
 //       name: casual.name,
 //       nacionality: casual.street
 //     }
 //   }
 // })

module.exports = schema
