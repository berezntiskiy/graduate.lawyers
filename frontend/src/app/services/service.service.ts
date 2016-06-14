import {Injectable, Inject} from '@angular/core';
import {Http, Response, Request} from '@angular/http';

import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'core/angular2-rest.ts';
import {Observable} from "rxjs/Observable";
import {CoreClient} from "../../core/CoreConnector";
import {Service} from "./service";


export class ServiceService extends CoreClient {
    
    public constructor( @Inject(Http) protected http: Http) {
        super(http);
    }

    @GET("service/")
    public getList(): Observable<Service[]> { return null; };

    // @GET("service/{id}")
    // public getOne( @Path("id") id: number): Observable<Service> { return null; };
    //
    // @POST("todo")
    // public postTodo( @Body todo: Todo): Observable<any> { return null; };
    //
    // @PUT("todo/{id}")
    // public putTodoById( @Path("id") id: string, @Body todo: Todo): Observable<any> { return null; };
    //
    // @DELETE("todo/{id}")
    // public deleteTodoById( @Path("id") id: string): Observable<any> { return null; };

}