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
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    constructor(
        private authService: AuthService,
        private readonly apollo: Apollo,
        private readonly navCtrl: NavController,
        private readonly fb: Facebook,
        private readonly spotifyAuth: SpotifyAuth
    ) {}

    ngOnInit() {}

    confirm() {
        this.loading = true;
        this.apollo
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
                }
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
            .then((res: FacebookLoginResponse) => {
                console.log(res);
                this.apollo
                    .mutate<any>({
                        mutation: SOCIAL_LOGIN_MUTATION,
                        variables: {
                            id: res.authResponse.userID,
                        },
                    })
                    .subscribe(
                        (result) => {
                            console.log(result);
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
                        }
                    );
            })
            .catch((err) => {
                console.log('err', err);
                this.facebookLoading = false;
            });
    }

    async spotifyLogin() {
        const config = {
            clientId: 'cf6c218047e74336a40b6c1cfe70f35a',
            redirectUrl: 'partyplanner://spotify',
            scopes: ['streaming', 'playlist-read-private', 'user-read-email', 'user-read-private'],
            tokenExchangeUrl: environment.backendUrl + '/auth/spotify/token',
            tokenRefreshUrl: environment.backendUrl + '/auth/spotify/refresh',
        };

        this.spotifyAuth
            .authorize(config)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log('err', err);
            });
    }
}
