import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost';

const uri = '/graphql'; // <-- add the URL of the GraphQL server here
@NgModule({
    exports: [HttpClientModule, ApolloBoostModule],
})
export class GraphQLModule {
    constructor(apolloBoost: ApolloBoost) {
        apolloBoost.create({
            uri,
            request: async operation => {
                const token = localStorage.getItem('token');
                operation.setContext({
                    headers: {
                        authorization: token ? `Bearer ${token}` : '',
                    },
                });
            },
        });
    }
}
