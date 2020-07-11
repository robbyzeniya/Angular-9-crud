import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from './service/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'zeniya-angular-template';
    public showNav = true;

    constructor(private router: Router, private apiService: ApiService) {
    }

    //menyesuaikan kondisi routing page dan membaca page aktif
    onActiveUser() {
        const rout = this.router.url;
        if (rout == '/login') {
            this.showNav = false;
        } else {
            this.showNav = true;
        }
    }

    logout() {
        this.apiService.logout('web/user/logout')
            .subscribe((res: any) => {
                console.log(res);
                if (res.code == 200) {
                    localStorage.removeItem('userLogin');
                    window.location.href = 'login';
                } else {
                }
            }, err => {
                alert(JSON.stringify(err));
            });
    }
}
