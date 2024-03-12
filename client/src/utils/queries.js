import { gql } from '@apollo/client';


export const QUERY_ME = gql`
    query queryMe {
        me {
            _id
            profilePic
            unavailableDays
            username
            groups
            pendingInvites
        }
}
`