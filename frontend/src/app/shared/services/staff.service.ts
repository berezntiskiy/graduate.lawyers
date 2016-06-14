import {Injectable, Inject} from '@angular/core';
import {Http, Response, Request} from '@angular/http';

import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'core/angular2-rest.ts';
import {Observable} from "rxjs/Observable";
import {Book} from "../../library/book";
import {User} from "../../user/user";
import {CoreClient} from "../../../core/CoreConnector";


// Book -> Section -> Chapter -> Article
export class StaffService extends CoreClient {
    public constructor( @Inject(Http) protected http: Http) {
        super(http);
    }

    @GET("staff/")
    public getList(): Observable<User[]> { return null; };
}