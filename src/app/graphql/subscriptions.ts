import gql from 'graphql-tag';
import { PARTY_INVITATION_FRAGMENT } from './fragments';

export const CHAT_MESSAGES_SUBSCRIPTION = gql`
    subscription ChatMessagesSubscription($where: MessageSubscriptionWhereInput) {
        message(where: $where) {
            node {
                id
                author {
                    firstName
                    lastName
                    avatar
                    id
                }
                isSendByMe @client
                optimisticallyAdded @client
                optimisticallyCreated @client
                hasOptimisticError @client
                content
                createdAt
                chat {
                    id
                }
            }
        }
    }
`;

export const PARTY_INVITATION_SUBSCRIPTION = gql`
    subscription PartyInvitationSubscription($where: PartyInvitationSubscriptionWhereInput) {
        partyInvitation(where: $where) {
            node {
                ...PARTY_INVITATION_FRAGMENT
            }
            previousValues {
                id
                invitedUserId
                partyId
            }
            mutation
        }
    }
    ${PARTY_INVITATION_FRAGMENT}
`;
