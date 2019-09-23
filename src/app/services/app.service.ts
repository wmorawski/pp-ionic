import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private _isNavbarVisible = new BehaviorSubject(true);
    constructor() {}

    get isNavbarVisible(): Observable<boolean> {
        return this._isNavbarVisible.asObservable();
    }

    public hideNavbar() {
        this._isNavbarVisible.next(false);
    }

    public showNavbar() {
        this._isNavbarVisible.next(true);
    }
}
