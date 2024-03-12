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

export const GET_GROUP_CHAT = gql`
    query getGroupChat {
        group($groupId) {
            groupName
            groupChat{
                from
                content
                sentAt
            }
        }
    }
`