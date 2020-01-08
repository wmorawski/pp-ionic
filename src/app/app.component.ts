import { CalendarPage } from './pages/calendar/calendar.page';
import { PartiesPage } from './pages/parties/parties.page';
import { HomePage } from './pages/home/home.page';
import { JoinPage } from './pages/parties/pages/join/join.page';
import { FcmService } from './services/fcm.service';
import { Component, OnDestroy } from '@angular/core';

import { Platform, IonApp, ToastController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { AppService } from './services/app.service';
import { Subscription } from 'rxjs';
import { ME_QUERY } from './graphql/queries';
import { Apollo } from 'apollo-angular';
import { tap } from 'rxjs/operators';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';

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
    private counter = 0;
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
        private toastCtrl: ToastController,
        private navCtrl: NavController,
        protected deeplinks: Deeplinks,
    ) {
        this.initializeApp();
        this.authService.isAuthenticated.subscribe((logged) => {
            this.isLogged = logged;
            if (logged === true) {
                this.meQuerySubscription = this.apollo
                    .watchQuery<any>({
                        query: ME_QUERY,
                        fetchPolicy: 'cache-and-network',
                    })
                    .valueChanges.subscribe(({ data, loading }) => {
                        this.loading = loading;
                        this.currentUser = data.me;
                    });

                this.startFcm();
            }
        });
        this.appService.isNavbarVisible.subscribe((visible) => {
            this.isNavbarVisible = visible;
        });
        // this.appService.isSecondVisible.subscribe((visible) => {
        //     this.isMainNavVisible = visible;
        // });
        this.appService.needsMainNavigation.subscribe((visible) => {
            this.isMainNavVisible = visible;
        });
        this.authService.autoLogin();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.hide();
            this.splashScreen.hide();
            this.startFcm();
            // this.platform.backButton.subscribe(() => {
            //     if (this.counter === 0) {
            //         this.counter++;
            //         this.presentToast();
            //         setTimeout(() => {
            //             this.counter = 0;
            //         }, 3000);
            //     } else {
            //         // console.log("exitapp");
            //         navigator['app'].exitApp();
            //     }
            // });

            this.deeplinks
                .routeWithNavController(this.navCtrl, {
                    '/': HomePage,
                    '/parties': PartiesPage,
                    '/parties/join/:id': JoinPage,
                })
                .subscribe(
                    (match) => {
                        // match.$route - the route we matched, which is the matched entry from the arguments to route()
                        // match.$args - the args passed in the link
                        // match.$link - the full link data
                        console.log('Successfully matched route', match);
                    },
                    (nomatch) => {
                        // nomatch.$link - the full link data
                        console.error('Got a deeplink that didnt match', nomatch);
                    },
                );
        });
    }
    async presentToast() {
        const toast = await this.toastCtrl.create({
            message: 'Press again to exit',
            mode: 'md',
            duration: 3000,
            position: 'bottom',
        });
        toast.present();
    }

    ionViewWillEnter() {}
    ngOnDestroy(): void {
        this.meQuerySubscription.unsubscribe();
    }
    ionViewWillLeave() {
        this.meQuerySubscription.unsubscribe();
    }

    startFcm() {
        this.fcm.getToken();
        this.fcm.sub('notifications');
        // Listen to incoming messages
        this.fcm
            .listenToNotifications()
            .pipe(
                tap(async (msg) => {
                    // show a toast
                    const toast = await this.toastCtrl.create({
                        message: msg.body,
                        duration: 3000,
                    });
                    toast.present();
                }),
            )
            .subscribe();
    }
}
