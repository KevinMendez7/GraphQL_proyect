module.exports = `
  type Teacher{
    id: ID!
    name: String!
    nationality: String!
    gender: Gender
    courses: [Course]
  }

  enum Gender{
    FEMENINO
    MASCULINO
  }

  input newTeacher{
    name: String!
    gender: Gender!
  }

  input editableTeacher{
    name: String
    gender: Gender
  }

`
