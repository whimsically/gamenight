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
    groupChat: [Message]
  }
  
  type Auth {
    token: ID!
    profile: User
  }

  type Message {
    _id: ID!
    from: String!
    content: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    group(groupId: ID!): Group
    groups: [Group]
    getUserUnavailableDays(userId: ID!): [User!]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    updateUser(_id: ID!, username: String, email: String, profilePic: String, unavailableDays: [String]): User
    deleteUser(_id: ID!): User
    login(email: String!, password: String!): Auth

    createGroup(groupName: String!, groupCreator: String!): Group
    updateGroup(_id: ID!, groupName: String, groupPicture: String, groupMembers: [String]): Group
    addGroupMember(groupId: ID!, username: String!): Group
    deleteGroup(_id: ID!): Group

    setUserUnavailableDays(username: String!, unavailableDays: [String!]): User
    updateUserUnavailableDays(): User
    deleteUserUnavailableDays(userId: ID!): User

    sendMessage(from: String! content: String! toGroup: ID!): Message!

  }
   `;

   module.exports = typeDefs