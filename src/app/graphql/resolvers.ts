import { Resolvers } from 'apollo-client';
import { PaginateMessagesQueryNode, MeQueryQuery, MeQueryDocument } from './generated/types';
import { ApolloCache } from 'apollo-cache';
import { compose, ifElse, always, lt } from 'ramda';

export const LocalResolvers: Resolvers = {
    Message: {
        isSendByMe: (message: PaginateMessagesQueryNode, _, { cache }: { cache: ApolloCache<any> }) => {
            const data = cache.readQuery<MeQueryQuery>({
                query: MeQueryDocument,
            });
            if (!data || !data.me) {
                return false;
            } else {
                return data.me.id === message.author.id;
            }
        },
        optimisticallyAdded: () => false,
        optimisticallyCreated: () => false,
        hasOptimisticError: () => false,
    },
    Chat: {
        hasUnreadMessages: () => {
            return false;
        },
    },
};
