import {Injectable, Inject} from '@angular/core';
import {Http, Response, Request} from '@angular/http';
import {Book} from "./book";

import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'core/angular2-rest.ts';
import {Observable} from "rxjs/Observable";
import {CoreClient} from "../../core/CoreConnector";


// Book -> Section -> Chapter -> Article
export class BookService extends CoreClient {
    public constructor( @Inject(Http) protected http: Http) {
        super(http);
    }

    @GET("book/")
    public getList( @Query("sort") sort?: string): Observable<Book[]> { return null; };

    @POST("book/like")
    public like( @Body book: Book): Observable<any> { return null; };

    @POST("book/unlike")
    public unlike( @Body book: Book): Observable<any> { return null; };
}