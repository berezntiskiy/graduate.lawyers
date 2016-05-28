import {Http, Response, Request} from '@angular/http';

import {Injectable} from '@angular/core';

@Injectable()
export class ServiceConnector {
    http: Http;

    constructor() {
        
    }
    //
    // GET(url: string) {
    //     console.info(this.http);
    //     // this.http.get(url);
    // }
}