import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { NavbarManager } from 'src/app/shared/helpers/navbar-manager';
import { AppService } from 'src/app/services/app.service';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { ME_QUERY } from 'src/app/graphql/queries';
import { PartiesQueryGQL } from 'src/app/graphql/generated/types';
import { getPublicPartiesVariables } from 'src/app/shared/helpers/graphql-utils';
import { map } from 'rxjs/operators';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage extends NavbarManager {
    public publicParties: any;
    constructor(
        private readonly authService: AuthService,
        protected readonly appService: AppService,
        private readonly partiesQueryGQL: PartiesQueryGQL,
        private readonly apollo: Apollo,
    ) {
        super(appService, false);
    }

    ionViewWillEnter() {
        this.appService.showNavbar();
        this.publicParties = this.partiesQueryGQL
            .watch(getPublicPartiesVariables(new Date()), { fetchPolicy: 'cache-and-network' })
            .valueChanges.pipe(map((result) => (result.data ? result.data.parties : [])));
    }
}
