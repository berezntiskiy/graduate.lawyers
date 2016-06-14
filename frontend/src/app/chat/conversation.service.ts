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

    @POST("chat/conversations/createNew")
    public create( @Body body): Observable<any> { return null; };

    @POST("chat/conversations/markAsRead")
    public markAsRead( @Body body): Observable<any> { return null; };

}