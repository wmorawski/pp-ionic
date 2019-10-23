import { LocalResolvers } from './graphql/resolvers';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost';
import { PP_AUTH_TOKEN } from 'src/app/constants';
import { environment } from 'src/environments/environment.prod';

const uri = (environment.production ? environment.backendUrl : '') + '/graphql'; // <-- add the URL of the GraphQL server here
@NgModule({
    exports: [HttpClientModule, ApolloBoostModule],
})
export class GraphQLModule {
    constructor(apolloBoost: ApolloBoost) {
        apolloBoost.create({
            uri,
            request: async (operation) => {
                const token = localStorage.getItem(PP_AUTH_TOKEN);
                operation.setContext({
                    headers: {
                        authorization: token ? `Bearer ${token}` : '',
                    },
                });
            },
            clientState: {
                resolvers: LocalResolvers,
            },
        });
    }
}
