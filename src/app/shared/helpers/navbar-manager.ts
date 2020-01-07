import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

export class NavbarManager {
    protected _hideOnEnter = true;
    protected _hideSecondNavbar = true;
    protected hidden = false;
    protected hiddenSecond = false;
    protected _scrollTop = 0;
    constructor(protected readonly appService: AppService, hideOnEnter = true, hideSecondNavbar = false) {
        this._hideOnEnter = hideOnEnter;
        this._hideSecondNavbar = hideSecondNavbar;
    }
    ionViewWillEnter() {
        if (this._hideOnEnter) {
            this.appService.hideNavbar();
            this.hidden = true;
        }

        if (this._hideSecondNavbar) {
            this.appService.hideSecondNavbar();
            this.hiddenSecond = true;
        }
    }

    ionViewWillLeave() {
        if (this._hideOnEnter) {
            this.appService.showNavbar();
            this.hidden = false;
        }

        if (this._hideSecondNavbar) {
            this.appService.showSecondNavbar();
            this.hiddenSecond = false;
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
