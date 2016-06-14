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
    <form [ngFormModel]="registrationForm" (submit)="resetPassword()">
        <md-input placeholder="Name" ngControl="name" style="width:100%">
          <md-hint align="end">
              <control-messages control="name"></control-messages>
          </md-hint>
        </md-input>
        <md-input placeholder="Email" ngControl="email" style="width:100%">
          <md-hint align="end">
              <control-messages control="email"></control-messages>
          </md-hint>
        </md-input>
        <md-input placeholder="Password" ngControl="password" style="width:100%">
          <md-hint align="end">
              <control-messages control="password"></control-messages>
          </md-hint>
        </md-input>
        <md-input placeholder="Phone (optional)" ngControl="phone" style="width:100%">
          <md-hint align="end">
              <control-messages control="phone"></control-messages>
          </md-hint>
        </md-input>
        <button md-raised-button color="primary" type="submit" [disabled]="!registrationForm.valid || isLoading">{{isLoading ? 'Trying to register' : 'Register'}}</button>
    </form>

`
})
export class UserEdit implements OnInit {
    registrationForm:any;
    success:boolean = null;
    isLoading:boolean = false;

    constructor(public appState:AppState,
                _builder:FormBuilder,
                private userService:UserService) {
        this.registrationForm = _builder.group({
            'name': ['', null && Validators.compose([Validators.required, ValidationService.emailValidator])],
            'email': ['', null && Validators.compose([Validators.required, ValidationService.emailValidator])],
            'phone': ['', null && Validators.compose([Validators.required, ValidationService.emailValidator])],
            'password': ['', null && Validators.compose([Validators.required, ValidationService.emailValidator])],
        });
    }

    ngOnInit() {
        // setInterval(() => {
        //     this.userService.isAuthenticated().subscribe();
        // }, 3000);
    }

    resetPassword() {
        this.success = null;
        this.isLoading = true;
        // hotfix
        this.registrationForm.value['password_confirmation'] = this.registrationForm.value.password;
        this.userService.register(<User>this.registrationForm.value)
            .subscribe(
                (data) => {
                    this.isLoading = false;
                    this.success = true;
                },
                (err:AuthFail) => {
                    this.isLoading = false;
                    this.success = false;
                }
            );
    }

}
