import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor(private readonly authService: AuthService) {}

    public logout() {
        this.authService.logout();
    }
}
