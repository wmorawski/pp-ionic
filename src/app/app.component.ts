import { Component } from '@angular/core';

import { Platform, IonApp } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { AppService } from './services/app.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    public isLogged = false;
    public isNavbarVisible = true;
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authService: AuthService,
        private appService: AppService
    ) {
        this.initializeApp();
        this.authService.isAuthenticated.subscribe(logged => {
            this.isLogged = logged;
        });
        this.appService.isNavbarVisible.subscribe(visible => {
            this.isNavbarVisible = visible;
        });
        this.authService.autoLogin();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ionViewWillEnter() {}
}
