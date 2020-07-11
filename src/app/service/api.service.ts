import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) {

    }

    getHeader() {
        // tslint:disable-next-line:variable-name
        const headers_api = new HttpHeaders({
            'Content-Type': 'application/json',
            'Auth-Client-Id': '4d2228036e022d7c4c9f7579be4cc24c',
            'Auth-Client-Secret': 'KPYtP-Ay31g4oEtzl0fTrbfElyep9zr7QtcWHzmHTew8uMDGWJ',
            'Auth-Access-Token': localStorage.getItem('userLogin')
        });
        return headers_api;
    }

    // ini fungsi Api untuk Login
    login(_action_url, _params): Observable<any> {
        const headers_params = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });
        const options_headers = {headers: headers_params};
        let obj = _params;
        let objResult = JSON.stringify(obj);
        return this.http
            .post(`${environment.HostUrl}/${environment.UrlName}/` + _action_url,
                objResult,
                options_headers
            );
    }


    setAccessToken(authorization_code, _action_url): Observable<any> {
        const headers_params = new HttpHeaders({
            'Accept': 'application/json',
        });
        let obj = {'authorization_code': authorization_code};
        let objResult = JSON.stringify(obj);
        const options_headers = {headers: headers_params};
        return this.http
            .post(`${environment.HostUrl}/${environment.UrlName}/` + _action_url,
                objResult,
                options_headers
            );
    }


    setToken(token): void {
        localStorage.setItem('userLogin', token);
    }

    getToken() {
        return localStorage.getItem('userLogin');
    }

//=====================================================================================================

    createUser(_action_url, _params): Observable<any> {
        const options_headers = {headers: this.getHeader()};
        let obj = _params;
        let objResult = JSON.stringify(obj);
        return this.http
            .post(`${environment.HostUrl}/${environment.UrlName}/` + _action_url,
                objResult,
                options_headers
            );
    }

    updateUser(_action_url, _params): Observable<any> {
        const options_headers = {headers: this.getHeader()};
        let obj = _params;
        let objResult = JSON.stringify(obj);
        return this.http
            .post(`${environment.HostUrl}/${environment.UrlName}/` + _action_url,
                objResult,
                options_headers
            );
    }

    listUser(): Observable<any> {
        // tslint:disable-next-line:variable-name
        const options_headers = {headers: this.getHeader()};
        return this.http
            .get(`${environment.HostUrl}/${environment.UrlName}/` + 'web/user/list-user', options_headers);
    }

    userDetail(_user_id): Observable<any> {
        this.getHeader().append('user_id', _user_id);
        const options_headers = {headers: this.getHeader()};
        return this.http
            .get(`${environment.HostUrl}/${environment.UrlName}/` + 'web/user/user-detail?user_id=' + _user_id, options_headers);
    }

    deleteUser(_user_id): Observable<any> {
        this.getHeader().append('user_id', _user_id);
        const options_headers = {headers: this.getHeader()};
        return this.http
            .get(`${environment.HostUrl}/${environment.UrlName}/` + 'web/user/delete-user?user_id=' + _user_id, options_headers);
    }

    logout(_action_url): Observable<any> {
        let obj = {"data-login": this.getToken()};
        const options_headers = {headers: this.getHeader()};
        return this.http
            .post(`${environment.HostUrl}/${environment.UrlName}/` + _action_url,
                obj,
                options_headers
            );
    }
}
