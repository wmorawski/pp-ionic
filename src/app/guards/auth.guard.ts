import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private readonly authService: AuthService,
        private readonly navCtrl: NavController,
        private readonly router: Router,
    ) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isLogged = this.authService.isAuthenticatedSync;
        if (!isLogged) {
            this.navCtrl.navigateRoot(['/auth', 'login']);
            return false;
        }
        return true;
    }
}
