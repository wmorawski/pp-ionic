import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { NavbarManager } from 'src/app/shared/helpers/navbar-manager';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-more',
    templateUrl: './more.page.html',
    styleUrls: ['./more.page.scss'],
})
export class MorePage extends NavbarManager implements OnInit {
    constructor(protected readonly appService: AppService, private readonly authService: AuthService) {
        super(appService);
    }

    ngOnInit() {}

    public logout() {
        this.authService.logout();
    }
}
