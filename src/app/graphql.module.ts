import { LocalResolvers } from './graphql/resolvers';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PP_AUTH_TOKEN } from 'src/app/constants';
import { environment } from 'src/environments/environment';
import { setContext } from 'apollo-link-context';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';

const uri = (environment.production ? environment.backendUrl : '') + '/graphql'; // <-- add the URL of the GraphQL server here
export function provideApollo(httpLink: HttpLink) {
    const basic = setContext((operation, context) => ({
        headers: {
            Accept: 'charset=utf-8',
        },
    }));
    // Get the authentication token from local storage if it exists
    const token = localStorage.getItem(PP_AUTH_TOKEN);
    const auth = setContext((operation, context) => ({
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }));
    const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
    const cache = new InMemoryCache();
    const client = new ApolloClient({
        cache,
        link,
        resolvers: LocalResolvers,
    });
    cache.writeData({
        data: {
            hasUnreadMessages: false,
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
