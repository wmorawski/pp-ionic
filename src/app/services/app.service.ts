import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    // tslint:disable-next-line: variable-name
    private _isNavbarVisible = new BehaviorSubject(true);
    // tslint:disable-next-line: variable-name
    private _needsMainNav = new BehaviorSubject(true);
    constructor() {}

    get isNavbarVisible(): Observable<boolean> {
        return this._isNavbarVisible.asObservable();
    }

    get needsMainNavigation(): Observable<boolean> {
        return this._needsMainNav.asObservable();
    }

    public hideNavbar() {
        this._isNavbarVisible.next(false);
    }

    public showNavbar() {
        this._isNavbarVisible.next(true);
    }

    public hideMainNav() {
        this._needsMainNav.next(false);
    }

    public showMainNav() {
        this._needsMainNav.next(true);
    }
}
