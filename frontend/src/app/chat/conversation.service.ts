import {Injectable, Inject} from '@angular/core';
import {Http, Response, Request} from '@angular/http';
import {Conversation} from "./conversation";

import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'core/angular2-rest.ts';
import {Observable} from "rxjs/Observable";
import {CoreClient} from "../../core/CoreConnector";


// Conversation -> Section -> Chapter -> Article
export class ConversationService extends CoreClient {

    public constructor( @Inject(Http) protected http: Http) {
        super(http);
    }

    @GET("chat/conversations/")
    public getList( @Query("sort") sort?: string): Observable<Conversation[]> { return null; };

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