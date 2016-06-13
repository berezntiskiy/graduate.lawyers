import {Injectable, Inject} from '@angular/core';
import {Http, Response, Request} from '@angular/http';
import {Book} from "./book";

import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'core/angular2-rest.ts';
import {Observable} from "rxjs/Observable";
import {CoreClient} from "../../core/CoreConnector";
import {Article} from "./article";


// Book -> Section -> Chapter -> Article
export class ArticleService extends CoreClient {
    
    public constructor( @Inject(Http) protected http: Http) {
        super(http);
    }

    @GET("article/")
    public getList( @Query("chapter_id") chapterId?: number): Observable<Article[]> { return null; };

    @GET("article/{id}")
    public getOne( @Path("id") id: number): Observable<Article> { return null; };

    @POST("article/like")
    public like( @Body article: Article): Observable { return null; };

    @POST("article/unlike")
    public unlike( @Body article: Article): Observable { return null; };
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