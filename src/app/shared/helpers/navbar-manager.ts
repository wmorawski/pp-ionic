import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

export class NavbarManager {
    protected _hideOnEnter = true;
    protected hidden = false;
    protected _scrollTop = 0;
    constructor(protected readonly appService: AppService, hideOnEnter = true) {
        this._hideOnEnter = hideOnEnter;
    }
    ionViewWillEnter() {
        if (this._hideOnEnter) {
            this.appService.hideNavbar();
            this.hidden = true;
        }
    }

    ionViewWillLeave() {
        if (this._hideOnEnter) {
            this.appService.showNavbar();
            this.hidden = false;
        }
    }

    ionViewWillUnload() {
        if (this._hideOnEnter) {
            this.appService.showNavbar();
            this.hidden = false;
        }
    }
    public onScroll(e) {
        if (e.detail.scrollTop > this._scrollTop && !this.hidden) {
            this.appService.hideNavbar();
            this.hidden = true;
        } else if (e.detail.scrollTop < this._scrollTop && this.hidden) {
            this.appService.showNavbar();
            this.hidden = false;
        }
        this._scrollTop = e.detail.scrollTop;
    }
}
