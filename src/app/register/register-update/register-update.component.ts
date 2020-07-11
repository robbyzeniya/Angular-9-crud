import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
    selector: 'app-register-update',
    templateUrl: './register-update.component.html',
    styleUrls: ['./register-update.component.css']
})
export class RegisterUpdateComponent implements OnInit {
    usernameIndexing: string = '';
    form_register: FormGroup;
    submitted = false;
    loading = false;
    _user_id = null;

    constructor(private activeRoute: ActivatedRoute, private routes: Router, private formBuilder: FormBuilder, private apiService: ApiService) {
        this.form_register = this.formBuilder.group({
            // model validasi username
            userNameInput: ['', Validators.required],
            // model validasi password
            nameInput: ['', Validators.required],
            // model validasi email
            emailInput: ['', [Validators.required, Validators.email]],
        });
    }

    ngOnInit() {
        //mengambil user_id dari params
        this._user_id = this.activeRoute.snapshot.params.id;
        return this.apiService.userDetail(this._user_id)
            .subscribe((res: any) => {
                console.log(res);
                if (res.code !== undefined) {
                    if (res.code === 200) {
                        this.usernameIndexing = res.data.username;
                        this.form_register.setValue({
                            userNameInput: res.data.username,
                            nameInput: res.data.name,
                            emailInput: res.data.email,
                        });
                    }
                }
            }, err => {
                alert('an error occurred, please check console log');
                console.log(err);
            });

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
        this.apiService.updateUser('web/user/update-user', {
            id: this._user_id,
            name: this.obj_form.nameInput.value,
            email: this.obj_form.emailInput.value,
        }).subscribe((res: any) => {
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
