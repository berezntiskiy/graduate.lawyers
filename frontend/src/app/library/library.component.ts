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
import {LibrarySidebar} from "./library-sidebar.component";
import {Article} from "./article";
import {ArticleService} from "./article.service";
import {LibraryMain} from "./library-main.component";
import {ArticleList} from "./article-list.component";

@Component({
    selector: 'library',
    providers: [
        Title,
        BookService,
        SectionService,
        ChapterService,
        ArticleService
    ],
    viewProviders: [],
    directives: [
        XLarge,
        BooksSidebarList,
        BooksSidebarItem,
        LibrarySidebar,
        LibraryMain,
        ArticleList
    ],
    pipes: [],
    styles:[`
    .container {
        display:flex; 
        flex-direction: row; 
        flex-wrap: nowrap; 
        width: 100%;
        align-content: center; 
        align-items: stretch; 
        margin: 0; 
        padding: 0; 
    }
    .transition {
        transition: all 0.3s ease;
    }
    
    .hidden {max-width: 0;}
    
    .size-1 {
        // max-width: 20%;
        flex-grow: 1;
    }
    .size-2 {
        flex-grow: 1;
        // max-width: 20%; 
    }
    .size-3 {
        flex-grow: 1;
        // max-width: 25%;
    }
    .size-4 {
        flex-grow: 10;
        min-width: 500px;
        // max-width: 35%;
    }
`],
    template: require('./library.html')
})
export class Library {
    // Set our default values
    localState = {value: ''};
    books:Book[];
    sections:Section[];
    chapters:Chapter[];
    articles:Article[];

    loadingBooks:boolean;
    loadingSections:boolean;
    loadingChapters:boolean;
    loadingArticles:boolean;

    activeBook:Book;
    activeSection:Section;
    // activeArticle:Article;
    activeChapter:Chapter;

    booksObservable: any;
    chaptersObservable: any;
    sectionsObservable: any;
    articlesObservable: any;

    // TypeScript public modifiers
    constructor(public appState:AppState,
                public title:Title,
                public bookService:BookService,
                public chapterService:ChapterService,
                public sectionService:SectionService,
                public articleService:ArticleService) {

    }

    ngOnInit() {
        this.fetchBooks();
    }

    fetchBooks() {
        this.loadingBooks = true;
        if (this.booksObservable) this.booksObservable.unsubscribe();
        this.booksObservable = this.bookService.getList().subscribe(data => {
            this.books = data;
            this.loadingBooks = false;
        });
    }

    fetchSections() {
        this.loadingSections = true;
        if (this.sectionsObservable) this.sectionsObservable.unsubscribe();
        this.sectionsObservable = this.sectionService.getList(this.activeBook.id).subscribe(data => {
            this.sections = data;
            this.loadingSections = false;
        });
    }

    fetchChapters() {
        this.loadingChapters = true;
        if (this.chaptersObservable) this.chaptersObservable.unsubscribe();
        this.chaptersObservable = this.chapterService.getList(this.activeSection.id).subscribe(data => {
            this.chapters = data;
            this.loadingChapters = false;
        });
    }

    fetchArticles() {
        this.loadingArticles = true;
        if (this.articlesObservable) this.articlesObservable.unsubscribe();
        this.articlesObservable = this.articleService.getList(this.activeChapter.id).subscribe(data => {
            this.articles = data;
            this.loadingArticles = false;
        });
    }

    openBook(book:Book) {
        if (this.activeBook == book) return;
        if (this.booksObservable) this.booksObservable.unsubscribe();
        if (this.sectionsObservable) this.sectionsObservable.unsubscribe();
        if (this.chaptersObservable) this.chaptersObservable.unsubscribe();
        this.loadingBooks = false;
        this.loadingSections = false;
        this.loadingChapters = false;
        this.activeBook = book;
        this.sections = null;
        this.chapters = null;
        this.articles = null;
        this.fetchSections();
    }

    openSection(section:Section) {
        if (this.activeSection == section) return;
        if (this.sectionsObservable) this.sectionsObservable.unsubscribe();
        if (this.chaptersObservable) this.chaptersObservable.unsubscribe();
        this.loadingBooks = false;
        this.loadingSections = false;
        this.loadingChapters = false;
        this.activeSection = section;
        this.chapters = null;
        this.articles = null;
        this.fetchChapters();
    }

    openChapter(chapter:Chapter) {
        this.activeChapter = chapter;
        this.articles = null;
        this.fetchArticles();
    }

    // openArticle(e) {
    //     console.info(e);
    // }

    submitState(value) {
        console.log('submitState', value);
        this.appState.set('value', value);
    }

    likeBook(event) {
        this.bookService.like(event.value).subscribe(() => {event.value.likes = true;});
    }

    unlikeBook(event) {
        this.bookService.unlike(event.value).subscribe(() => {event.value.likes = false;});
    }

    likeSection(event) {
        this.sectionService.like(event.value).subscribe(() => {event.value.likes = true;});
    }

    unlikeSection(event) {
        this.sectionService.unlike(event.value).subscribe(() => {event.value.likes = false;});
    }

    likeChapter(event) {
        this.chapterService.like(event.value).subscribe(() => {event.value.likes = true;});
    }

    unlikeChapter(event) {
        this.chapterService.unlike(event.value).subscribe(() => {event.value.likes = false;});
    }

    likeArticle(event) {
        this.articleService.like(event.value).subscribe(() => {event.value.likes = true;});
    }

    unlikeArticle(event) {
        this.articleService.unlike(event.value).subscribe(() => {event.value.likes = false;});
    }

}
