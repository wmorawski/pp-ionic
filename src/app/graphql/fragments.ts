import gql from 'graphql-tag';

export const PARTY_FRAGMENT = gql`
    fragment PARTY_FRAGMENT on Party {
        id
        title
        description
        location {
            placeName
            longitude
            latitude
        }
        author {
            firstName
            lastName
            id
        }
        members {
            avatar
            firstName
            lastName
            id
        }
        cart {
            id
        }
        colorTint
        start
        end
        isPublic
        inviteSecret
    }
`;

export const MESSAGE_FRAGMENT = gql`
    fragment MESSAGE_FRAGMENT on Message {
        id
        author {
            firstName
            lastName
            avatar
            id
        }
        content
        createdAt
    }
`;

export const PARTY_INVITATION_FRAGMENT = gql`
    fragment PARTY_INVITATION_FRAGMENT on PartyInvitation {
        id
        createdAt
        invitedBy {
            id
            firstName
            lastName
            avatar
        }
        user {
            id
            firstName
            lastName
            avatar
        }
        party {
            title
            id
        }
    }
`;

export const LAST_CHAT_MESSAGE_FRAGMENT = gql`
    fragment LAST_CHAT_MESSAGE_FRAGMENT on Chat {
        messages(last: 1) {
            createdAt
            content
            author {
                firstName
                lastName
            }
        }
        hasUnreadMessages @client
    }
`;

export const FULL_SAVED_TRACK_FRAGMENT = gql`
    fragment FULL_SAVED_TRACK_FRAGMENT on PartySavedTrack {
        id
        name
        length
        uri
        popularity
        durationMs
        previewUrl
        stringArtists
        explicit
        popularity
        album {
            id
            name
            uri
            imageUrl
            releaseDate
        }
    }
`;

export const PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT = gql`
    fragment PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT on Playlist {
        id
        spotifyExternalUrl
        name
        spotifyId
        imageUrl
        importable
        user {
            id
            firstName
            lastName
            avatar
        }
        tracks {
            id
            uri
        }
    }
`;

export const PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT = gql`
    fragment PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT on PartyCartItem {
        id
        name
        price
        quantity
        status
        user {
            id
            firstName
            lastName
        }
        cart {
            id
            party {
                author {
                    id
                }
            }
        }
    }
`;

export const PARTY_AUTHENTICATION_MINIMAL_PARTY_FRAGMENT = gql`
    fragment PARTY_AUTHENTICATION_MINIMAL_PARTY_FRAGMENT on Party {
        id
    }
`;
