import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../service/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register-create',
    templateUrl: './register-create.component.html',
    styleUrls: ['./register-create.component.css']
})
export class RegisterCreateComponent implements OnInit {
    form_register: FormGroup;
    submitted = false;
    loading = false;

    constructor(private routes: Router, private formBuilder: FormBuilder, private apiService: ApiService) {
        this.form_register = this.formBuilder.group({
            // model validasi username
            userNameInput: ['', Validators.required],
            // model validasi password
            passwordInput: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
            // model validasi name
            nameInput: ['', Validators.required],
            // model validasi email
            emailInput: ['', [Validators.required, Validators.email]],
        });
    }

    ngOnInit() {

    }

    // agar property yang ada di form register  mudah di get attributenya
    get obj_form() {
        return this.form_register.controls;
    }

    submitForm() {
        // nilai submit di buat true
        this.submitted = true;
        // jika form login tidak valid
        if (this.form_register.invalid) {
            return;
        }
        this.loading = true;
        this.apiService.createUser('web/user/create-user', {
            username: this.obj_form.userNameInput.value,
            password: this.obj_form.passwordInput.value,
            name: this.obj_form.nameInput.value,
            email: this.obj_form.emailInput.value,
        }).subscribe((res: any) => {
            console.log(res);
            if (res.code == 200) {
                alert(res.message);
                this.routes.navigateByUrl('/register');
                this.loading = false;
            } else {
                alert(res.message);
                this.loading = false;
            }
        }, err => {
            this.loading = false;
            alert('an error occurred, please check console log');
            console.log(err);
        });
    }
}
