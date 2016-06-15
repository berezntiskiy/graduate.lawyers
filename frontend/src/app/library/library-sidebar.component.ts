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
    selector: 'library-sidebar',
    providers: [
        Title,
        BookService,
        SectionService,
        ChapterService,
        SessionService
    ],
    viewProviders: [],
    directives: [
        XLarge,
        BooksSidebarList,
        BooksSidebarItem
    ],
    styles: [`
    .active >>> .title, .active >>> .description {
        color: tomato;
        // outline: 3px solid tomato;
        // background: #999 !important;
        // border: red 1px solid !important;
    }
`],
    pipes: [],
    template: `
        <div *ngIf="isLoading">
            <md-progress-circle mode="indeterminate" color="primary"></md-progress-circle>
        </div>
        <div *ngIf="!isLoading">
            <books-sidebar-list>
                <books-sidebar-item
                    [ngClass]="{active: activeEntity == entity}"
                    (like)="like.emit({value: entity})"
                    (unlike)="unlike.emit({value: entity})"
                    [canLike]="SessionService.auth"
                    (open)="emmitOpen(entity)"
                    title="{{entity.name}}"
                    likes="{{entity.likes}}"
                    description="{{entity.description}}"
                    *ngFor="let entity of collection"></books-sidebar-item>
            </books-sidebar-list>
        </div>
`
})
export class LibrarySidebar {
    @Input() isLoading:boolean;
    @Input() collection:any[];
    @Input() activeEntity:any;
    @Output() open:EventEmitter<any> = new EventEmitter();
    @Output() like:EventEmitter<any> = new EventEmitter();
    @Output() unlike:EventEmitter<any> = new EventEmitter();
    private SessionService = SessionService;

    // constructor(private sessionService:SessionService) {}

    emmitOpen(entity) {
        this.open.emit({value: entity});
    }
}
