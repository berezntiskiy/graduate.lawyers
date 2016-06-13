import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AppState} from '../app.service';

import {Title} from './title';
import {XLarge} from './x-large';
import {BookService} from "./book.service";
import {Book} from "./book";
import {BooksSidebarItem} from "./sidebar-item.component";
import {BooksSidebarList} from "./sidebar-list.component";
import {SectionService} from "./section.service";
import {Section} from "./section";
import {ChapterService} from "./chapter.service";
import {Chapter} from "./chapter";
import {SessionService} from "../user/session.service";

@Component({
    selector: 'article-list',
    providers: [
        Title,
        BookService,
        SectionService,
        ChapterService
    ],
    viewProviders: [],
    directives: [
        XLarge,
        BooksSidebarList,
        BooksSidebarItem
    ],
    pipes: [],
    template: `
        <div *ngIf="isLoading">
            <md-progress-circle mode="indeterminate" color="primary"></md-progress-circle>
        </div>
        <div *ngIf="!isLoading">
            <books-sidebar-list>
                <books-sidebar-item
                    (like)="like.emit({value: entity})"
                    (unlike)="unlike.emit({value: entity})"
                    [canLike]="SessionService.auth"
                     
                    (click)="emmitOpen(entity)" title="{{entity.title}}"
                    description="{{entity.text}}"
                    likes="{{entity.likes}}"
                    *ngFor="let entity of collection"></books-sidebar-item>
                <div class="no-items" *ngIf="collection && collection.length == 0">No items</div>
            </books-sidebar-list>
        </div>
`
})
export class ArticleList {
    @Input() isLoading:boolean;
    @Input() collection:any[];
    @Output() open: EventEmitter<any> = new EventEmitter();
    @Output() like:EventEmitter<any> = new EventEmitter();
    @Output() unlike:EventEmitter<any> = new EventEmitter();
    private SessionService = SessionService;

    emmitOpen(entity) {
        this.open.emit({value: entity});
    }
}
