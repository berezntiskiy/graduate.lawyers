import {Component, Input} from '@angular/core';

@Component({
    selector: 'books-sidebar-item',
    providers: [],
    viewProviders: [],
    directives: [],
    pipes: [],
    template: `
      <div class="books-sidebar-item">
          <div class="title">{{title}}</div>
          <div class="description">{{description}}</div>
      </div>
`,
    styles: [
        `
            .books-sidebar-item {
                padding: 6px 16px;
                font-size: 16px;
            }
            .books-sidebar-item:hover {
                background: rgba(0, 0, 0, 0.04);
            }
            .title {
                font-weight: bold;
                font-size: 1.1em;
            }
            .description {
            }
        `
    ]
})
export class BooksSidebarItem {
    @Input() title:string;
    @Input() description:string;
}
