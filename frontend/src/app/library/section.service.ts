import {Injectable, Inject} from '@angular/core';
import {Http, Response, Request} from '@angular/http';

import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'angular2-rest/angular2-rest.ts';
import {Observable} from "rxjs/Observable";
import {CoreClient} from "../../core/CoreConnector";
import {Section} from "./section";
import {Book} from "./book";


// Book -> Section -> Chapter -> Article
export class SectionService extends CoreClient {
    
    public constructor( @Inject(Http) protected http: Http) {
        super(http);
    }

    @GET("section/")
    public getList( @Query("book_id") book_id?: number): Observable<Section[]> { return null; };

    // @GET("todo/{id}")
    // public getTodoById( @Path("id") id: string): Observable { return null; };
    //
    // @POST("todo")
    // public postTodo( @Body todo: Todo): Observable { return null; };
    //
    // @PUT("todo/{id}")
    // public putTodoById( @Path("id") id: string, @Body todo: Todo): Observable { return null; };
    //
    // @DELETE("todo/{id}")
    // public deleteTodoById( @Path("id") id: string): Observable { return null; };

}