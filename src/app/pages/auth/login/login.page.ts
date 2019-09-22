import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PP_USER_ID, PP_AUTH_TOKEN } from 'src/app/constants';
import { ApolloBoost, Apollo } from 'apollo-angular-boost';
import { LOGIN_MUTATION } from 'src/app/graphql/mutations';
import { Router } from '@angular/router';

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

                    this.navCtrl.navigateRoot(['/']);
                },
                (error) => {
                    this.loading = false;
                    console.log('Ooops, error!');
                },
            );
    }
    saveUserData(id, token) {
        localStorage.setItem(PP_USER_ID, id);
        localStorage.setItem(PP_AUTH_TOKEN, token);
        this.authService.setUserId(id);
    }
}
