import {Injectable, Inject} from '@angular/core';
import {Http, Response, Request} from '@angular/http';

import {
    RESTClient,
    GET,
    PUT,
    POST,
    DELETE,
    BaseUrl,
    Headers,
    DefaultHeaders,
    Path,
    Body,
    Query
} from 'angular2-rest/angular2-rest.ts';
import {Observable} from "rxjs/Observable";
import {CoreClient} from "../../core/CoreConnector";
import {User} from "./user";
import {Auth} from "./auth";

export interface AuthFail {
    ERROR_CODE:string,
    ATTEMPTS_LEFT?:number,
    LOCKOUT_TIME?:number
    RETRY_AFTER?:number
}

// Book -> Section -> Chapter -> Article
export class UserService extends CoreClient {

    public constructor(@Inject(Http) protected http:Http) {
        super(http);
    }

    @POST("user/login")
    public login(@Body loginRequest:Auth):Observable<User> {
        return null;
    };

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