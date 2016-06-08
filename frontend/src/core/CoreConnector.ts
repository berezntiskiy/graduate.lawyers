import {ServiceConnector} from "./ServiceConnector";
import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'angular2-rest/angular2-rest.ts';
import {Injectable, Inject} from '@angular/core';
import {Http, Response, Request} from '@angular/http';
import {SessionFactory} from "../app/user/session.factory";
import {Observable} from "rxjs/Rx";



@BaseUrl("http://192.168.50.10/api/")
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export class CoreClient extends RESTClient {
    // public constructor( @Inject(Http) protected http: Http) {
    //     super(http);
    // }

    protected requestInterceptor(req: Request) {
        req.headers.append('X-CSRF-TOKEN', SessionFactory.csrfToken);
        // if (SessionFactory.getInstance().isAuthenticated) {
        //     req.headers.append('jwt', SessionFactory.getInstance().credentials.jwt);
        // }
    }


    protected responseInterceptor(res:Response):Response {
        const csrf = res.headers.get('X-CSRF-TOKEN');

        if (csrf)
            SessionFactory.csrfToken = csrf;

        let body = res.json();

        return body.data || { };
    }


    protected errorInterceptor(error) {
        return Observable.throw(error.json().data || 'Server error');
    }
}
