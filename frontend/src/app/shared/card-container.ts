import {Component} from '@angular/core';

@Component({
    selector: 'card-container',
    providers: [
    ],
    viewProviders: [],
    directives: [
    ],
    pipes: [
    ],
    styles: [
        `
    .card-container {
      display: flex;
      flex-direction: column;
      margin: 15px;
    
    }
`
    ],
    template: `
    <div class="card-container">
        <ng-content></ng-content>
    </div>
`
})
export class CardContainer {

    constructor() {
    }

}
