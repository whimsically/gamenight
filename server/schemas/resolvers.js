const {User, Group} = require('../models');
const {signToken, AuthenticationError} = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            try {
                const userData = await User.find({}) 
                return userData
            } catch {throw new Error('Could not get users')}
        },

        user: async (parent, args) => {
            try {
                const userData = await User.find({username: args.username})
                return userData
            } catch {throw new Error('Could not get user')}
        },

        // Add me:User

        group: async (parent, args) => {
            try {
                const groupData = await Group.find({groupId: args.groupId})
                return groupData
            } catch {throw new Error('Could not get group')}
        },

        groups: async () => {
            try {
                const groupData = await Group.find({}) 
                return groupData
            } catch {throw new Error('Could not get groups')}
        },
    },

    Mutation: {

        createUser: async (parent, {username, email, password}) => {
            const userData = await User.create({ username, email, password});
            const token = signToken(userData);
            return {token, user};
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
          },

          
    }


};

module.exports = resolvers;