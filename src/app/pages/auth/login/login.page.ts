import { NavController } from '@ionic/angular';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PP_USER_ID, PP_AUTH_TOKEN } from 'src/app/constants';
import { Apollo } from 'apollo-angular';
import { LOGIN_MUTATION, SOCIAL_LOGIN_MUTATION } from 'src/app/graphql/mutations';
import { Router } from '@angular/router';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { SpotifyAuth } from '@ionic-native/spotify-auth/ngx';
import * as SpotifyWebApi from 'spotify-web-api-js';
import { BehaviorSubject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { init, getUserProfile, getCurrentUserProfile } from 'spotify-web-sdk';
declare var cordova: any;
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    public email = '';
    public password = '';
    public loading = false;
    public facebookLoading = false;
    public spotifyLoading = false;
    public twitterLoading = false;
    public error = null;
    public environment = environment;
    private loginSubscription: Subscription;
    constructor(
        private authService: AuthService,
        private readonly apollo: Apollo,
        private readonly navCtrl: NavController,
        private readonly fb: Facebook,
        private readonly spotifyAuth: SpotifyAuth,
    ) {}

    ngOnInit() {}

    confirm() {
        this.loading = true;
        this.loginSubscription = this.apollo
            .mutate<any>({
                mutation: LOGIN_MUTATION,
                variables: {
                    email: this.email,
                    password: this.password,
                },
            })
            .subscribe(
                (result) => {
                    this.loading = false;
                    const id = result.data.login.user.id;
                    const token = result.data.login.token;
                    this.saveUserData(id, token);
                    this.error = null;
                    this.navCtrl.navigateRoot(['/']);
                },
                (error) => {
                    this.loading = false;
                    this.error = error;
                },
            );
    }
    saveUserData(id, token) {
        localStorage.setItem(PP_USER_ID, id);
        localStorage.setItem(PP_AUTH_TOKEN, token);
        this.authService.setUserId(id);
    }

    async fbLogin() {
        this.facebookLoading = true;
        this.fb
            .login(['public_profile', 'email'])
            .then(async (res: FacebookLoginResponse) => {
                const me = await this.fb.api('me?fields=id,name,email,picture{url},first_name,last_name', [
                    'public_profile',
                    'email',
                ]);
                this.loginSubscription = this.apollo
                    .mutate<any>({
                        mutation: SOCIAL_LOGIN_MUTATION,
                        variables: {
                            id: res.authResponse.userID,
                            email: me.email,
                            avatar: me.picture.data.url,
                            firstName: me.first_name,
                            lastName: me.last_name,
                            provider: 'FACEBOOK',
                        },
                    })
                    .subscribe(
                        (result) => {
                            const id = result.data.socialLogin.user.id;
                            const token = result.data.socialLogin.token;
                            this.saveUserData(id, token);
                            this.error = null;
                            this.navCtrl.navigateRoot(['/']);
                            this.facebookLoading = false;
                        },
                        (error) => {
                            this.error = error;
                            this.facebookLoading = false;
                        },
                    );
            })
            .catch((err) => {
                this.facebookLoading = false;
            });
    }

    async spotifyLogin() {
        this.spotifyLoading = true;
        try {
            const authRes = await this.authWithSpotify();
            init({ token: authRes.accessToken });
        } catch (e) {
            this.spotifyLoading = false;
        }

        const profile = await getCurrentUserProfile();
        const [firstName, lastName] = profile.displayName.split(' ');
        this.loginSubscription = this.apollo
            .mutate<any>({
                mutation: SOCIAL_LOGIN_MUTATION,
                variables: {
                    id: profile.id,
                    email: profile.email,
                    avatar: profile.images && profile.images.length ? profile.images[0].url : null,
                    firstName,
                    lastName,
                    provider: 'SPOTIFY',
                },
            })
            .subscribe(
                (result) => {
                    const id = result.data.socialLogin.user.id;
                    const token = result.data.socialLogin.token;
                    this.saveUserData(id, token);
                    this.error = null;
                    this.navCtrl.navigateRoot(['/']);
                    this.spotifyLoading = false;
                },
                (error) => {
                    this.error = error;
                    this.spotifyLoading = false;
                },
            );
    }

    authWithSpotify() {
        return cordova.plugins.spotifyAuth.authorize(environment.spotify.config);
    }
    ionViewWillLeave() {
        if (this.loginSubscription) {
            this.loginSubscription.unsubscribe();
        }
    }
}
