import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../service/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    //deklarasi property
    form_login: FormGroup;
    submitted = false;
    loading = false;

    constructor(private router: Router, private apiService: ApiService, private formBuilder: FormBuilder) {
        this.form_login = this.formBuilder.group({
            // model validasi username
            userNameInput: ['', Validators.required],
            // model validasi password
            passwordInput: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        });
    }

    // agar property yang ada di form login mudah di get attributenya
    get obj_form() {
        return this.form_login.controls;
    }

    ngOnInit() {
    }

    submitForm() {
        // nilai submit di buat true
        this.submitted = true;
        // jika form login tidak valid
        if (this.form_login.invalid) {
            return;
        }
        this.loading = true;
        this.apiService.login('web/user/authorize', {
            username: this.obj_form.userNameInput.value,
            password: this.obj_form.passwordInput.value
        })
            .subscribe((res: any) => {
                if (res.code == 200) {
                    this.validateLogin(res.authorization_code);
                } else {
                    this.loading = false;
                    alert(res.message);
                }
            }, err => {
                this.loading = false;
                alert('an error occurred, please check console log');
                console.log(err);
            });
    }

    validateLogin(authorization_code) {
        this.apiService.setAccessToken(authorization_code, 'web/user/access-token')
            .subscribe((res: any) => {

                if (res.code == 200) {
                    this.apiService.setToken(res.data.token.access_token);
                    window.location.href = 'dashboard';
                } else {
                    alert(res.message);
                }
            }, err => {
                alert('an error occurred, please check console log');
                console.log(err);
            });
    }
}
