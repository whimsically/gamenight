const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    profilePic: String
    unavailableDays: [String]
  }

  type Group {
    _id: ID
    groupCreator: String
    groupName: String
    groupMembers: [String]
    groupPicture: String
  }
  
  type Auth {
    token: ID!
    profile: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    group(groupId: ID!): Group
    groups: [Group]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    setUserUnavailableDays(username: String!, unavailableDays: [String!]!): User
    createGroup(groupName: String!, groupCreator: String!): Group
    addGroupMember(groupId: ID!, username: String!): Group

  }
   `;

   module.exports = typeDefs