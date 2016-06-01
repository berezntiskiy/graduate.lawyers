import {Component} from '@angular/core';
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
    selector: 'library-main',
    providers: [
        Title,
        BookService,
        SectionService,
        ChapterService
    ],
    viewProviders: [],
    directives: [
    ],
    pipes: [],
    template: `
        <div style="border: 1px solid red;">
            <ng-content></ng-content>
        </div>
    `
})
export class LibraryMain {
}
