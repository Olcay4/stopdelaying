/**
    Login Service
    This service handles stuff like login and logout checks.
*/
import { Inject, Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

// var appSettings = require("application-settings");

// Login model
import { loginModel } from '../models/login.model';

import { Urls } from '../../config';

@Injectable()
export class LoginService {

    headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private _loginService: LoginService, private _http: HttpClient, private _router: ActivatedRoute) { }



    // login(user: loginModel) {

    //     let params = new URLSearchParams();
    //     params.append('username', user.username);
    //     params.append('password', user.password);
    //     let userLoginCredentials = params.toString();

    //     return this._http.post(Urls.apiUrl, userLoginCredentials, this.options)
    //         .map(response => response.json())
    //         .do(result => {
    //         })
    // }

    // logout() {

    //     return this._http.post(Urls.http + appSettings.getString('domainName') + Urls.API_URL + Urls.PATH_LOGOUT, this.options)
    //         .map(response => response.json())
    //         .catch(this.handleErrors);
    // }

}