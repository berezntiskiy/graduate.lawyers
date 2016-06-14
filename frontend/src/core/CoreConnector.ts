import {ServiceConnector} from "./ServiceConnector";
import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from './angular2-rest.ts';
import {Injectable, Inject} from '@angular/core';
import {Http, Response, Request} from '@angular/http';
import {SessionService} from "../app/user/session.service";
import {Observable} from "rxjs/Rx";



@BaseUrl("/api/")
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'API-V': '1'
})
export abstract class CoreClient extends RESTClient {
    // public constructor( http: Http) {
    //     let _build = (<any> http)._backend._browserXHR.build;
    //     (<any> http)._backend._browserXHR.build = () => {
    //         let _xhr =  _build();
    //         _xhr.withCredentials = true;
    //         return _xhr;
    //     };
    //     super(_build);
    // }

    protected requestInterceptor(req: Request) {
        req.headers.append('X-CSRF-TOKEN', window['CSRF_TOKEN']);
    }


    protected responseInterceptor(res:Response):Response {
        const isAuth = res.headers.get('session.auth') === 'true';
        const userId = res.headers.get('session.userid');

        SessionService.auth = isAuth;
        SessionService.userId = userId;

        let body = res.json();

        return body.data || { };
    }


    protected errorInterceptor(error) {
        return Observable.throw(error.json().data || {ERROR_CODE: 'SERVER_ERROR'});
    }
}
