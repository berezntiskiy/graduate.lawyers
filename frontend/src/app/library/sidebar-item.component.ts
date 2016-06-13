import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'books-sidebar-item',
    providers: [],
    viewProviders: [],
    directives: [],
    pipes: [],
    template: `
        <span style="float:right" *ngIf="canLike" [ngSwitch]="likes">
            <button md-button (click)="unlike.emit()" *ngSwitchWhen="'true'" color="accent">
               Unlike
            </button>
            <button md-button (click)="like.emit()" *ngSwitchWhen="'false'" color="accent">
               Like
            </button>
        </span>
      <div class="books-sidebar-item" (click)="open.emit()">
        <div class="title">
            {{title}}
        </div>
        <div class="description">{{description ? description : "&nbsp;"}}</div>
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
    @Input() likes:boolean;
    @Input() canLike:boolean;
    @Output() like:EventEmitter<any> = new EventEmitter();
    @Output() unlike:EventEmitter<any> = new EventEmitter();
    @Output() open:EventEmitter<any> = new EventEmitter();
}
