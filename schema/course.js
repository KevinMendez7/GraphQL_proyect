module.exports = `

  #These are all the courses
    type Course{
      id: ID!
      title: String!
      #This is a description about de course
      description: String!
      teacher: Teacher
      rating: Float @deprecated(reason: "ya no creemos en valoraciones")
      comments: [Comment]
    }

    type Comment{
      id: ID!
      name: String!
      body: String!
    }

`
