import { FcmService } from './services/fcm.service';
import { Component, OnDestroy } from '@angular/core';

import { Platform, IonApp, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { AppService } from './services/app.service';
import { Subscription } from 'rxjs';
import { ME_QUERY } from './graphql/queries';
import { Apollo } from 'apollo-angular-boost';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {
    public isLogged = false;
    public isNavbarVisible = true;
    public isMainNavVisible = true;
    public loading = true;
    public currentUser: any = null;
    private meQuerySubscription: Subscription;
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authService: AuthService,
        private appService: AppService,
        private apollo: Apollo,
        private fcm: FcmService,
        private toastCtrl: ToastController
    ) {
        this.initializeApp();
        this.authService.isAuthenticated.subscribe(logged => {
            this.isLogged = logged;
            if (logged === true) {
                this.meQuerySubscription = this.apollo
                    .watchQuery<any>({
                        query: ME_QUERY,
                        fetchPolicy: 'network-only',
                    })
                    .valueChanges.subscribe(({ data, loading }) => {
                        this.loading = loading;
                        this.currentUser = data.me;
                    });
            }
        });
        this.appService.isNavbarVisible.subscribe(visible => {
            this.isNavbarVisible = visible;
        });
        this.appService.needsMainNavigation.subscribe(visible => {
            this.isMainNavVisible = visible;
        });
        this.authService.autoLogin();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.hide();
            this.splashScreen.hide();
            this.fcm.getToken();
            this.fcm.sub('discounts');
            // Listen to incoming messages
            this.fcm
                .listenToNotifications()
                .pipe(
                    tap(async msg => {
                        // show a toast
                        const toast = await this.toastCtrl.create({
                            message: msg.body,
                            duration: 3000,
                        });
                        toast.present();
                    })
                )
                .subscribe();
        });
    }

    ionViewWillEnter() {}
    ngOnDestroy(): void {
        this.meQuerySubscription.unsubscribe();
    }
}
