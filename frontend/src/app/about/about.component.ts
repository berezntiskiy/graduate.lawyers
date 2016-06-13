import {Component} from '@angular/core';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`About` component loaded asynchronously');

@Component({
  selector: 'about',
  styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
    md-card{
      margin: 25px;
    }
  `],
  template: `
  <md-card>
    <md-card-title>О нас</md-card-title>
    <p>Специалисты нашей компании – это адвокаты, которым можно доверять. Они защитят ваши права в
        следственных органах, судах арбитражного типа и общей юрисдикции, предоставят юридическую
        консультацию и полный спектр адвокатских услуг, направленных на защиту интересов обычных
        граждан, юридических лиц, коммерческих и некоммерческих организаций, то есть всех тех, кто нуждается
        в квалифицированной помощи адвоката.</p>
  </md-card>
  <md-card>
    <md-card-title>
        Наши сотрудники
    </md-card-title>
        
    ...
  </md-card>

  `
})
export class About {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `About` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    // this.asyncDataWithWebpack();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
    // setTimeout(() => {
    //
    //   let asyncDataPromise = asyncMockDataPromiseFactory();
    //   asyncDataPromise.then(json => {
    //     console.log('async mockData', json);
    //   });
    //
    // });
  }

}
