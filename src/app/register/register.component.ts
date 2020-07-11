import {Component, OnInit} from '@angular/core';
import {ApiService} from '../service/api.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    list_user_rows = [];

    constructor(private routes: Router, private http: HttpClient, private apiService: ApiService) {
    }

    getListUser() {
        this.apiService.listUser()
            .subscribe(res => {
                if (res.code !== undefined) {
                    if (res.code === 200) {
                        this.list_user_rows = res.data;
                    }
                }
            }, err => {
                console.log(err);
            });
    }

    ngOnInit() {
        this.getListUser();
    }

    //function delete user
    deleteUser(_user_id: any) {
        return this.apiService.deleteUser(_user_id)
            .subscribe((res: any) => {
                console.log(res);
                if (res.code !== undefined) {
                    if (res.code === 200) {
                        alert('berhasil menghapus data');
                        this.getListUser();
                    }
                }
            }, err => {
                alert('an error occurred, please check console log');
                console.log(err);
            });
    }
}
