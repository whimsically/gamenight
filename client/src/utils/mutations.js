import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      userame: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

const POST_MESSAGE = gql`
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
