import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { NavbarManager } from 'src/app/shared/helpers/navbar-manager';
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage extends NavbarManager {
    constructor(private readonly authService: AuthService, protected readonly appService: AppService) {
        super(appService, false);
    }

    public logout() {
        this.authService.logout();
    }

    ionViewWillEnter() {
        this.appService.showNavbar();
    }
}
