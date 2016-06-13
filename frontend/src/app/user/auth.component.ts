import {Component, OnInit} from '@angular/core';
import {AppState} from '../app.service';
import {ControlMessages} from "../control-messages.component";
import {FormBuilder, Validators} from "@angular/common";
import {ValidationService} from "../validation.service";
import {AuthLogin} from "./auth-login.component";
import {AuthResetPassword} from "./auth-resetpassword.component";
import {AuthRegistration} from "./auth-registration.component";


@Component({
    selector: 'auth',
    providers: [],
    viewProviders: [],
    directives: [
        AuthLogin,
        AuthResetPassword,
        AuthRegistration
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
      <md-card-content>
        <h1>Log in</h1>
        <auth-login></auth-login>
      </md-card-content>
    </md-card>
    <md-card>
      <md-card-content>
        <h1>Reset password</h1>
        <auth-resetpassword></auth-resetpassword>
      </md-card-content>
    </md-card>
    <md-card>
      <md-card-content>
        <h1>Registration</h1>
        <auth-registration></auth-registration>
      </md-card-content>
    </md-card>
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
