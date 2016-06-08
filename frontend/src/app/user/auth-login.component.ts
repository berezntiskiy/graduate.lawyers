import {Component, OnInit} from '@angular/core';
import {AppState} from '../app.service';
import {ControlMessages} from "../control-messages.component";
import {FormBuilder, Validators} from "@angular/common";
import {ValidationService} from "../validation.service";


@Component({
  selector: 'auth-login',
  providers: [],
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
      
      .invalidCredentials {
        color: tomato;
        margin: 5px 0 15px;
      }
      `
  ],
  template: `
    <md-card class="demo-card demo-basic">
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
            
            <div class="invalidCredentials">
                Invalid credentials
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

  constructor(public appState:AppState,
              _builder:FormBuilder) {
    this.authForm = _builder.group({
      'password': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])]
    });

  }

  ngOnInit() {
    setInterval(() => {
      this.invalidCredentials = !this.invalidCredentials;
    }, 2000);
  }

  login() {
    alert('qwe');
  }

}
