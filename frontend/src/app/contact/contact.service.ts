import {Injectable, Inject} from '@angular/core';
import {Http, Response, Request} from '@angular/http';

import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'core/angular2-rest.ts';
import {Observable} from "rxjs/Observable";
import {CoreClient} from "../../core/CoreConnector";
import {Contact} from "./contact";


export class ContactService extends CoreClient {

    public constructor( @Inject(Http) protected http: Http) {
        super(http);
    }

    @POST("contact")
    public send( @Body contact: Contact): Observable<any> { return null; };

}