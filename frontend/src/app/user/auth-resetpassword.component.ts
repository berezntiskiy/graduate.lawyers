import {Component, OnInit} from '@angular/core';
import {AppState} from '../app.service';
import {ControlMessages} from "../control-messages.component";
import {FormBuilder, Validators} from "@angular/common";
import {ValidationService} from "../validation.service";
import {UserService, AuthFail} from "./user.service";
import {User} from "./user";
import {Observable} from "rxjs/Rx";
import {ResetPassword} from "./resetpassword";


@Component({
    selector: 'auth-resetpassword',
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
    <form [ngFormModel]="resetForm" (submit)="resetPassword()">
        <md-input placeholder="Email" ngControl="email" style="width:100%">
          <md-hint align="end">
              <control-messages control="email"></control-messages>
          </md-hint>
        </md-input>
        <div class="good" *ngIf="success === true">
            Have have sent you on your email reset link.
        </div>
        <div class="bad" *ngIf="success === false">
            Email not found
        </div>
        <button md-raised-button color="primary" type="submit" [disabled]="!resetForm.valid || isLoading">{{isLoading ? 'Trying to send reset link' : 'Submit'}}</button>
    </form>

`
})
export class AuthResetPassword implements OnInit {
    resetForm:any;
    success:boolean = null;
    isLoading:boolean = false;

    constructor(public appState:AppState,
                _builder:FormBuilder,
                private userService:UserService) {
        this.resetForm = _builder.group({
            'email': ['', null && Validators.compose([Validators.required, ValidationService.emailValidator])]
        });

    }

    ngOnInit() {
    }

    resetPassword() {
        this.success = null;
        this.isLoading = true;
        this.userService.passwordReset(<ResetPassword>this.resetForm.value)
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
