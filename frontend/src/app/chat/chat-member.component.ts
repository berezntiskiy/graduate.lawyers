import {Component, OnInit} from '@angular/core';
import {AppState} from '../app.service';


@Component({
    selector: 'chat-member',
    providers: [
    ],
    viewProviders: [],
    directives: [

    ],
    pipes: [],
    template: `
    
`
})
export class Chat implements OnInit {
    // Set our default values
    // localState = {value: ''};
    // books:Book[];
    // sections:Section[];
    // chapters:Chapter[];
    // articles:Article[];
    //
    // loadingBooks:boolean;
    // loadingSections:boolean;
    // loadingChapters:boolean;
    // loadingArticles:boolean;
    //
    // activeBook:Book;
    // activeSection:Section;
    // // activeArticle:Article;
    // activeChapter:Chapter;
    //
    // booksObservable: any;
    // chaptersObservable: any;
    // sectionsObservable: any;
    // articlesObservable: any;

    // TypeScript public modifiers
    constructor(public appState:AppState
                // public title:Title,
                // public bookService:BookService,
                // public chapterService:ChapterService,
                // public sectionService:SectionService,
                // public articleService:ArticleService
                ) {

    }

    ngOnInit() {
    }

}