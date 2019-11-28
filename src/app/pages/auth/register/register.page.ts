import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';
import { SIGNUP_MUTATION } from './../../../graphql/mutations';
import { Apollo } from 'apollo-angular';
import { Validators, ValidatorFn, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PP_USER_ID, PP_AUTH_TOKEN } from 'src/app/constants';
import { AuthService } from 'src/app/services/auth.service';

const samePasswordsValidator: ValidatorFn = (fg: FormGroup) => {
    return null;
};

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    public loading = false;
    public initialGroup = {
        email: [null, [Validators.required]],
        password: [null, [Validators.required]],
        passwordRepeat: [null, [Validators.required]],
        firstName: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
    };

    public signupForm: FormGroup;
    error: any;
    private registerSubscription: Subscription;

    constructor(
        private readonly apollo: Apollo,
        private readonly fb: FormBuilder,
        private authService: AuthService,
        private readonly navCtrl: NavController,
    ) {}

    ngOnInit() {
        this.signupForm = this.fb.group({ ...this.initialGroup }, samePasswordsValidator);
    }

    registerSubmit() {
        this.loading = true;
        const { passwordRepeat, ...form } = this.signupForm.value;
        this.registerSubscription = this.apollo
            .mutate<any>({
                mutation: SIGNUP_MUTATION,
                variables: {
                    ...form,
                },
            })
            .subscribe(
                (result) => {
                    this.loading = false;
                    const id = result.data.signup.user.id;
                    const token = result.data.signup.token;
                    this.error = null;
                    this.saveUserData(id, token);
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

    ionViewWillLeave() {
        if (this.registerSubscription) {
            this.registerSubscription.unsubscribe();
        }
    }
}
