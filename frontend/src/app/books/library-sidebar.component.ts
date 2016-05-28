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

@Component({
    selector: 'library-sidebar',
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
                <books-sidebar-item (click)="emmitOpen(entity)" title="{{entity.name}}"
                                    description="{{entity.description}}"
                                    *ngFor="let entity of collection"></books-sidebar-item>
            </books-sidebar-list>
        </div>
`
})
export class LibrarySidebar {
    @Input() isLoading:boolean;
    @Input() collection:Array;
    @Output() open:EventEmitter<any> = new EventEmitter();

    emmitOpen(entity) {
        this.open.emit({value: entity});
    }
}
