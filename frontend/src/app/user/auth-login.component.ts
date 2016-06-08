import {Component, OnInit} from '@angular/core';
import {AppState} from '../app.service';
import {ControlMessages} from "../control-messages.component";
import {FormBuilder, Validators} from "@angular/common";
import {ValidationService} from "../validation.service";
import {UserService, AuthFail} from "./user.service";
import {User} from "./user";
import {Observable} from "rxjs/Rx";
import {DurationPipe} from "angular2-moment/index";


@Component({
    selector: 'auth-login',
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
      `
    ],
    template: `
    <md-card>
      <md-card-content>
        <form [ngFormModel]="authForm" (submit)="login()">
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
            <div class="bad" *ngIf="attemptsLeft < 1 && retryAfter - (retryAfter$ | async) > 0">
                You have locked out for {{retryAfter - (retryAfter$ | async)}} seconds
            </div>
            <div class="bad" *ngIf="invalidCredentials">
                Invalid credentials. <span *ngIf="attemptsLeft != null">Attempts left: {{attemptsLeft}}</span><br>
                Lockout time is {{lockoutTime}} seconds.
            </div>
            <button md-raised-button color="primary" type="submit" [disabled]="!authForm.valid">Submit</button>
        </form>
      </md-card-content>
    </md-card>

`
})
export class AuthLogin implements OnInit {
    authForm:any;
    invalidCredentials:boolean = false;
    attemptsLeft:number = 1;
    lockoutTime:number = 1;
    retryAfter$:any;
    retryAfter:number;

    constructor(public appState:AppState,
                _builder:FormBuilder,
                private userService:UserService) {
        this.authForm = _builder.group({
            'password': ['', null && Validators.compose([Validators.required, Validators.minLength(6)])],
            'email': ['', null && Validators.compose([Validators.required, ValidationService.emailValidator])]
        });

    }

    ngOnInit() {
    }

    login() {
        this.userService.login(this.authForm.value)
            .subscribe(
                (data) => {
                    this.invalidCredentials = false;
                },
                (err:AuthFail) => {
                    this.attemptsLeft = err.ATTEMPTS_LEFT + 1;
                    this.invalidCredentials = err.ERROR_CODE == 'WRONG_CREDENTIALS';
                    this.lockoutTime = err.LOCKOUT_TIME;
                    if (err.RETRY_AFTER) {
                        this.retryAfter = err.RETRY_AFTER;
                        this.retryAfter$ = Observable.range(0, err.RETRY_AFTER + 1).zip(Observable.timer(0, 1000), function (x) {
                            return x;
                        });
                    } else {
                        this.retryAfter = 0;
                        this.retryAfter$ = null;
                    }
                }
            );
    }

}
