import { LocalResolvers } from './graphql/resolvers';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PP_AUTH_TOKEN } from 'src/app/constants';
import { environment } from 'src/environments/environment';
import { setContext } from 'apollo-link-context';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { ApolloLink, split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';
import { getMainDefinition } from 'apollo-utilities';

const uri = environment.backendUrl + '/graphql'; // <-- add the URL of the GraphQL server here
export function provideApollo(httpLink: HttpLink) {
    const basic = setContext((operation, context) => ({
        headers: {
            Accept: 'charset=utf-8',
        },
    }));

    const auth = setContext((operation, context) => {
        const token = localStorage.getItem(PP_AUTH_TOKEN);
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    });

    const http = httpLink.create({ uri });
    const link = ApolloLink.from([basic, auth, http]);
    const cache = new InMemoryCache();

    const client = new ApolloClient({
        connectToDevTools: true,
        cache,
        link,
        resolvers: LocalResolvers,
        typeDefs: gql`
            extend type Message {
                isSendByMe: Boolean!
                optimisticallyAdded: Boolean!
                optimisticallyCreated: Boolean!
                hasOptimisticError: Boolean!
            }

            extend type Chat {
                hasUnreadMessages: Boolean!
            }

            enum UserStatus {
                OFFLINE
                ONLINE
            }

            extend type User {
                status: UserStatus!
            }
        `,
    });

    cache.writeData({
        data: {
            hasUnreadMessages: false,
            isSendByMe: false,
            optimisticallyAdded: false,
            optimisticallyCreated: false,
            hasOptimisticError: false,
        },
    });

    return client;
}

@NgModule({
    exports: [HttpClientModule, ApolloModule, HttpLinkModule],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: provideApollo,
            deps: [HttpLink],
        },
    ],
})
export class GraphQLModule {}
