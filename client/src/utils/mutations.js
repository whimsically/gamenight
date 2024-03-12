import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const CREATE_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
  }
}
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($from: String!, $content: String!, $toGroup: ID!) {
  sendMessage(from: $from, content: $content, toGroup: $toGroup) {
    from
    content
    sentAt
  }
}
`;

export const GET_GROUP_CHAT = gql`
  query getMessages($groupId: ID!) {
  getMessages(groupId: $groupId) {
    groupChat {
      content
      from
      sentAt
    }
  }
}
`

export const GET_MESSAGES = gql`
  subscription ($toGroup: ID!) {
    newMessage(toGroup: $toGroup) {
	    from
	    content
      sentAt
      _id
  }
}
`