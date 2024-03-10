const {User, Group } = require('../models');
const { withFilter } = require('graphql-subscriptions');
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

        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('getUserUnavailableDays');
            }
            throw AuthenticationError;
          },

        group: async (parent, args) => {
            try {
                const groupData = await Group.find({groupId: args.groupId});
                return groupData;
            } catch {throw new Error('Could not get group')}
        },

        groups: async () => {
            try {
                const groupData = await Group.find({}) ;
                return groupData;
            } catch {throw new Error('Could not get groups')};
        },

        //get groupChat
        getMessages: async (parent, args) => {
            try {
                const messageData = await Group.findOne({ _id: args.group }).populate('groupChat');
                return messageData;

            } catch {throw new Error('Could not get group messages')};
        }
    },

// I wasn't completely sure which of the mutations I created were completely 100% necessary, so I went ahead and added the ones I knew we would need
    Mutation: {

// createUser based on mutation with auth
        createUser: async (parent, {username, email, password}) => {
            const userData = await User.create({ username, email, password});
            const token = signToken(userData);
            return {token, userData};
        },

        // Login pulled from classwork
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            console.log(user);
            console.log(password);
      
            if (!user) {
            console.log(`can't find user`);
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
                console.log('password incorrect');
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
          },

          updateUser: async (parent, { _id, username, email, profilePic, unavailableDays }) => {
            const updatedUser = await User.findByIdAndUpdate(_id, { username, email, profilePic, unavailableDays }, { new: true });
            if (!updatedUser) {
                throw new Error('User not found');
            }
            return updatedUser;
        },

        deleteUser: async (parent, { _id }) => {
            const deletedUser = await User.findByIdAndDelete(_id);
            if (!deletedUser) {
                throw new Error('User not found');
            }
            return deletedUser;
        },

        //   Allows a user to create a group as groupCreator
          createGroup: async (parent, { groupName, groupCreator }) => {
            try {
                const creator = await User.findOne({ username: groupCreator });
                if (!creator) {
                    throw new Error('User not found');
                }

                const newGroup = new Group({
                    name: groupName,
                    users: [creator._id],
                });

                const savedGroup = await newGroup.save();
    
                creator.groups.push(savedGroup._id);
                await creator.save();
    
                return savedGroup;
            } catch (error) {
                throw new Error('Error creating group');
            }
        },

        // This allows a group creator to add group members based on username
        addGroupMember: async (parent, {groupId, username}) => {
            try {
                const group = await Group.findById(groupId);
                if (!group) {
                    throw new Error('Group not found');
                }

                const addUser = await User.findOne({ username: username });
                if (!addUser) {
                    throw new Error('User not found');
                }
              
                group.users.push(addUser._id);
                await group.save();
                
                return group;

            } catch (error) {
                throw new Error('Errop')
            };          
        },

        updateGroup: async (parent, { _id, groupName, groupPicture, groupMembers }) => {
            const updatedGroup = await Group.findByIdAndUpdate(_id, { groupName, groupPicture, groupMembers: groupMembers }, { new: true }).populate('users');
            if (!updatedGroup) {
                throw new Error('Group not found');
            }
            return updatedGroup;
        },
        
        deleteGroup: async (parent, { _id }) => {
            const deletedGroup = await Group.findByIdAndDelete(_id);
            if (!deletedGroup) {
                throw new Error('Group not found');
            }
            return deletedGroup;
        },
        
        setUserUnavailableDays: async (parent, { username, unavailableDays }) => {
            const user = await User.findOneAndUpdate({ username }, { unavailableDays }, { new: true });
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        },
        

        //send message
          sendMessage: async (parent, { from, content, toGroup }, { user }) => {
            try {
                if (!user) throw new AuthenticationError('Not logged in')
                
                const messages = await Group.findOneAndUpdate(
                    {_id: toGroup},
                    { $addToSet: { groupChat: { from: from, content: content } } },
                    { new: true }
                    );

            return messages.save().then((result) => 
            {
                const newMessage = result;
                pubsub.publish("NEW_CHAT_MESSAGE", { newMessage });
                return newMessage;

            })

            } catch(err) {
                console.log(err)
                throw err
            }
          }

    },

    Subscription: {
        groupChat: {
            resolve: (payload) => {
                return payload.newMesage;
              },

            subscribe: () => pubsub.asyncIterator("NEW_CHAT_MESSAGE"),
        },
    }

};

module.exports = resolvers;