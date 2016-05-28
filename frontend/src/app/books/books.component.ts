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
    selector: 'books',
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
    template: require('./books.html')
})
export class Books {
    // Set our default values
    localState = {value: ''};
    books:Book[];
    activeBook:Book;
    activeSection:Section;
    loadingBooks:boolean;
    loadingSections:boolean;
    loadingChapters:boolean;
    sections:Section[];
    chapters:Chapter[];

    // TypeScript public modifiers
    constructor(public appState:AppState,
                public title:Title,
                public bookService:BookService,
                public chapterService:ChapterService,
                public sectionService:SectionService) {

    }

    ngOnInit() {
        this.fetchBooks();
    }

    fetchBooks() {
        // this.bookService.getList().subscribe((data) => this.books = data);
        this.loadingBooks = true;
        this.bookService.getList().subscribe(data => {
            this.books = data;
            this.loadingBooks = false;
        });
    }

    fetchSections() {
        this.loadingSections = true;
        this.sectionService.getList(this.activeBook.id).subscribe(data => {
            this.sections = data;
            this.loadingSections = false;
        });
    }

    fetchChapters() {
        this.loadingChapters = true;
        this.chapterService.getList(this.activeSection.id).subscribe(data => {
            this.chapters = data;
            this.loadingChapters = false;
        });
    }

    openSection(book:Book) {
        console.info(book);
        this.activeBook = book;
        this.fetchSections();
    }

    openChapter(section:Section) {
        console.info(section);
        this.activeSection = section;
        this.fetchChapters();
    }

    submitState(value) {
        console.log('submitState', value);
        this.appState.set('value', value);
    }

}
