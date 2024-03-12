import { gql } from '@apollo/client';

export const QUERY_USER_PROFILE = gql`
  query getUser($username: String!){
    user(username: $username) {
      profilePic
      unavailableDays
      groups
      pendingInvites
    }
  }
`

export const QUERY_USER = gql`
query getUserGroups($username: String!) {
  getUserGroups(username: $username) {
    _id
    groups {
      _id
    }
  }
}
`

// export const GET_GROUP_CHAT = gql`
// query GetMessages($groupId: ID!) {
//   getMessages(groupId: $groupId) {
//     groupName
//     groupChat {
//       content
//       from
//       sentAt
//       _id
//     }
//   }
// }
// `