import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PP_USER_ID, PP_AUTH_TOKEN } from 'src/app/constants';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private userId: string = null;
    private _isAuthenticated = new BehaviorSubject(false);

    constructor(private readonly navCtrl: NavController) {}

    get isAuthenticated(): Observable<boolean> {
        return this._isAuthenticated.asObservable();
    }
    get isAuthenticatedSync(): boolean {
        return this._isAuthenticated.value;
    }

    saveUserData(id: string, token: string) {
        localStorage.setItem(PP_USER_ID, id);
        localStorage.setItem(PP_AUTH_TOKEN, token);
        this.setUserId(id);
    }

    setUserId(id: string) {
        this.userId = id;

        this._isAuthenticated.next(true);
    }

    logout() {
        localStorage.removeItem(PP_AUTH_TOKEN);
        localStorage.removeItem(PP_AUTH_TOKEN);
        this.userId = null;
        this._isAuthenticated.next(false);
        this.navCtrl.navigateRoot(['/auth/login']);
    }

    autoLogin() {
        const id = localStorage.getItem(PP_USER_ID);
        if (id) {
            this.setUserId(id);
        }
    }
}
