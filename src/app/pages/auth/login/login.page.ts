import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PP_USER_ID, PP_AUTH_TOKEN } from 'src/app/constants';
import { ApolloBoost, Apollo } from 'apollo-angular-boost';
import { LOGIN_MUTATION } from 'src/app/graphql/mutations';
import { Router } from '@angular/router';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { SpotifyAuth } from '@ionic-native/spotify-auth/ngx';
import * as SpotifyWebApi from 'spotify-web-api-js';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    public email = '';
    public password = '';
    public loading = false;
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
                result => {
                    this.loading = false;
                    const id = result.data.login.user.id;
                    const token = result.data.login.token;
                    this.saveUserData(id, token);

                    this.navCtrl.navigateRoot(['/']);
                },
                error => {
                    this.loading = false;
                    console.log('Ooops, error!');
                }
            );
    }
    saveUserData(id, token) {
        localStorage.setItem(PP_USER_ID, id);
        localStorage.setItem(PP_AUTH_TOKEN, token);
        this.authService.setUserId(id);
    }

    async fbLogin() {
        this.fb
            .login(['public_profile', 'email'])
            .then((res: FacebookLoginResponse) => {
                console.log(res);
                this.fb.api('/me', ['public_profile']).then(user => {
                    console.log(user);
                }).catch(error => {
                    console.log(error)
                })
            })
            .catch(err => {
                console.log('err', err);
            });
    }

    async spotifyLogin() {
        const config = {
            clientId: 'cf6c218047e74336a40b6c1cfe70f35a',
            redirectUrl: 'partyplanner://spotify',
            scopes: ['streaming', 'playlist-read-private', 'user-read-email', 'user-read-private'],
            tokenExchangeUrl: 'http://localhost:4000/auth/spotify/token',
            tokenRefreshUrl: 'http://localhost:4000/auth/spotify/refresh',
        };

        this.spotifyAuth
            .authorize(config)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log('err', err);
            });
    }
}
