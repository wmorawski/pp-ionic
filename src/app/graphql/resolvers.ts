import { Resolvers } from 'apollo-client';
import { PaginateMessagesQueryNode, MeQueryQuery, MeQueryDocument } from './generated/types';
import { ApolloCache } from 'apollo-cache';

export const LocalResolvers: Resolvers = {
    Query: {
        hasUnreadMessages: () => false,
    },
};
