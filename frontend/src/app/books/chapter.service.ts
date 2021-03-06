import {Injectable, Inject} from '@angular/core';
import {Http, Response, Request} from '@angular/http';
import {Book} from "./book";

import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'angular2-rest/angular2-rest.ts';
import {Observable} from "rxjs/Observable";
import {CoreClient} from "../../core/CoreConnector";
import {Chapter} from "./chapter";


// Book -> Section -> Chapter -> Article
export class ChapterService extends CoreClient {
    
    public constructor( @Inject(Http) protected http: Http) {
        super(http);
    }

    @GET("chapter/")
    public getList( @Query("section_id") section?: number): Observable<Chapter[]> { return null; };

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