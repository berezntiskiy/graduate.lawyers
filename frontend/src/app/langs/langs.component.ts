/*
 * Angular 2 decorators and services
 */
import {Component} from '@angular/core';
import {LangService} from "./langs.service";
import {CookieService} from "angular2-cookie/core";


/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'langs',
    pipes: [],
    providers: [
        LangService,
        CookieService
    ],
    directives: [
    ],
    styles: [
        `
        .active {
            background: #009688 !important;
            color: white !important;
        }
`
    ],
    template: `
    <div>
        <button md-button color="primary" [ngClass]="{active: isActive('en')}" (click)="setLang('en')">EN</button>
        <button md-button color="primary" [ngClass]="{active: isActive('ru')}" (click)="setLang('ru')">RU</button>
        <button md-button color="primary" [ngClass]="{active: isActive('md')}"  (click)="setLang('md')">MD</button>
    </div>
  `
})
export class Langs {
    constructor(private _langService: LangService) {
    }

    setLang(lang) {
        this._langService.lang = lang;
    }

    isActive(lang) {
        return this._langService.lang === lang;
    }
}
