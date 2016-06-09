import {Injectable, Inject} from '@angular/core';
import {Http, Response, Request} from '@angular/http';
import {Message} from "./message";

import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'angular2-rest/angular2-rest.ts';
import {Observable} from "rxjs/Observable";
import {CoreClient} from "../../core/CoreConnector";


export class MessageService extends CoreClient {

    public constructor( @Inject(Http) protected http: Http) {
        super(http);
    }

    @GET("chat/messages/")
    public getList( @Query("conversation_id") conversation_id: any): Observable<Message[]> { return null; };


    // @POST("todo")
    // public postTodo( @Body todo: Todo): Observable { return null; };
    //
    // @PUT("todo/{id}")
    // public putTodoById( @Path("id") id: string, @Body todo: Todo): Observable { return null; };
    //
    // @DELETE("todo/{id}")
    // public deleteTodoById( @Path("id") id: string): Observable { return null; };

}