import {Component} from '@angular/core';
import {StaffService} from "../shared/services/staff.service";
import {User} from "../user/user";

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`About` component loaded asynchronously');

@Component({
  selector: 'about',
  providers: [
      StaffService
  ],
  styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
    md-card{
      margin: 25px;
    }
  `],
  template: `
  <md-card style="margin:0">
    <md-card-title>О нас</md-card-title>
    <p>Специалисты нашей компании – это адвокаты, которым можно доверять. Они защитят ваши права в
        следственных органах, судах арбитражного типа и общей юрисдикции, предоставят юридическую
        консультацию и полный спектр адвокатских услуг, направленных на защиту интересов обычных
        граждан, юридических лиц, коммерческих и некоммерческих организаций, то есть всех тех, кто нуждается
        в квалифицированной помощи адвоката.</p>
  </md-card>
  <md-card *ngFor="let person of staff">
    <md-card-title>
        {{person.name}}
    </md-card-title>
    {{person.about}}
  </md-card>
  `
})
export class About {
  staff:User[];
  constructor(private staffService:StaffService) {

  }

  ngOnInit() {
    this.staffService.getList().subscribe((data) => {
      this.staff = data;
    });
  }

}
