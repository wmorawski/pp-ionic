import { Resolvers } from 'apollo-client';
import { PaginateMessagesQueryNode, MeQueryQuery, MeQueryDocument } from './types';
import { ApolloCache } from 'apollo-cache';

export const LocalResolvers: Resolvers = {
    Message: {
        isSendByMe: (message: PaginateMessagesQueryNode, _, { cache }: { cache: ApolloCache<any> }) => {
            const data = cache.readQuery<MeQueryQuery>({
                query: MeQueryDocument,
            });
            if (!data || !data.me) {
                return false;
            }
            return data.me.id === message.author.id;
        },
        optimisticallyAdded: () => false,
        optimisticallyCreated: () => false,
        hasOptimisticError: () => false,
    },
    Chat: {
        hasUnreadMessages: () => false,
    },
};
