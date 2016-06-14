import {Component, OnInit} from '@angular/core';
import {AppState} from '../app.service';
import {ControlMessages} from "../control-messages.component";
import {FormBuilder, Validators, ControlGroup} from "@angular/common";
import {ValidationService} from "../validation.service";
import {UserService, AuthFail} from "./user.service";
import {User} from "./user";
import {Observable} from "rxjs/Rx";
import {ResetPassword} from "./resetpassword";


@Component({
    selector: 'auth-registration',
    providers: [
        UserService
    ],
    viewProviders: [],
    directives: [
        ControlMessages
    ],
    pipes: [],
    styles: [
        `
      md-card{
              margin: 25px;
      }
      
      .bad {
        color: tomato;
        margin: 5px 0 15px;
      }
      
      .good {
        color: limegreen;
        margin: 5px 0 15px;
      }
      `
    ],
    template: `
    <md-card>
        <span *ngIf="!loading">
             Session is closed   
        </span>
        <span *ngIf="loading">
             Closing session
        </span>
    </md-card>
`
})
export class UserLogout implements OnInit {
    loading = false;
    constructor(public userService:UserService) {
    }

    ngOnInit() {
        this.loading = true;
        this.userService.logout().subscribe(() => {
            this.loading = false;
        });
    }
}
