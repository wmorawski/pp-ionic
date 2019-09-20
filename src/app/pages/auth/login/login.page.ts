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
    constructor(private authService: AuthService, private readonly apollo: Apollo, private router: Router) {}

    ngOnInit() {}

    confirm() {
        this.apollo
            .mutate({
                mutation: LOGIN_MUTATION,
                variables: {
                    email: this.email,
                    password: this.password,
                },
            })
            .subscribe(
                result => {
                    const id = result.data.login.user.id;
                    const token = result.data.login.token;
                    this.saveUserData(id, token);

                    this.router.navigate(['/']);
                },
                error => {
                    console.log('Ooops, error!');
                }
            );
    }
    saveUserData(id, token) {
        localStorage.setItem(PP_USER_ID, id);
        localStorage.setItem(PP_AUTH_TOKEN, token);
        this.authService.setUserId(id);
    }
}
