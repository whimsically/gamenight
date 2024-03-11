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

export const POST_MESSAGE = gql`
  mutation($from: String!, $content: String!, $toGroup: ID!) {
    sendMessage(from: $from, content: $content, toGroup: $toGroup)
    {
      message {
        from
        content
        sentAt
      }
    }
  }
`;


export const MESSAGE_SUBSCRIBE = gql`
  subscription ($group: ID!) {
    newMessage(toGroup: $group) {
	    from
	    content
	    sentAt
  }
}
`