import {Component, OnInit} from '@angular/core';
import {AppState} from '../app.service';
import {ControlMessages} from "../control-messages.component";
import {FormBuilder, Validators} from "@angular/common";
import {ValidationService} from "../validation.service";
import {AuthLogin} from "./auth-login.component";


@Component({
  selector: 'auth',
  providers: [],
  viewProviders: [],
  directives: [
    AuthLogin
  ],
  pipes: [],
  styles: [
    `
      md-card{
              margin: 25px;
      }
      `
  ],
  template: `
    <md-card>
      For hot module reloading run
      <pre>npm run start:hmr</pre>
    </md-card>
    <md-card>
      <h3>
        patrick@AngularClass.com
      </h3>
    </md-card>
    <auth-login></auth-login>

`
})
export class Auth implements OnInit {
  userForm:any;
  // TypeScript public modifiers
  constructor(public appState:AppState,
              _builder:FormBuilder
              // public title:Title,
              // public bookService:BookService,
              // public chapterService:ChapterService,
              // public sectionService:SectionService,
              // public articleService:ArticleService
  ) {
    this.userForm = _builder.group({
      'password': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])]
    });

  }

  ngOnInit() {
  }

}
