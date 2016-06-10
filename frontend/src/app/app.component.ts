/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation, Query, QueryList} from '@angular/core';
import {RouteConfig, Router, RouterLink} from '@angular/router-deprecated';
import {isPresent} from '@angular/core/src/facade/lang';

import {Home} from './home';
import {AppState} from './app.service';
import {RouterActive} from './router-active';
import {Library} from "./library/library.component";
import {Services} from "./services"
import {Auth} from "./user/auth.component"
import {Chat} from "./chat/chat.component";
import {SessionService} from "./user/session.service";
import {UserService} from "./user/user.service";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  providers: [
    UserService
  ],
  directives: [
    RouterActive
  ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    `html, body {
      height: 100%;
      background: #F4FAFA;
    }
    
    .hw3d0 {
      -webkit-transform: translate3d(0,0,0);
      -moz-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      -o-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
    }
    
    button.active{
      background: #fff;
      color: #009688;
    }
    button.active:hover{
      color: #fff;
    }
    .fill{
      flex: 1 1 auto;
    }
    .app-state{
      margin: 15px;
      flex: 1;
    }
    
    md-toolbar {
        transition: all 800ms ease;
        
        min-height: 0;
    }
    .toolbar-bg-wrap{
        background-size: cover;
        background-position: center;
        background-image: url('assets/img/header.jpg');
    }
    .expanded md-toolbar {
        min-height: 600px !important;
        background: transparent !important;
    }
    .expanded md-toolbar button {
        text-shadow: 0 0 7px #000000;
    }
    .expanded md-toolbar button.active {
        text-shadow: none;
        color: #000;
        background-color: rgba(255, 255, 255, 1);
    }
    
    .home{
      flex: 1;
    }
    md-content{
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    footer{
      flex: 0 0 60px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
    }
    
    .logo-title {
        transition: all 800ms ease;
        font-size: 1em;
    }
    .expanded md-toolbar .logo-title {
        text-shadow: 0 0 7px #000000;
        font-size: 2em;
        margin-top: 15px;
    }
    
    .card-container {
      display: flex;
      flex-direction: column;
    }
`
  ],
  template: `
    <md-content>
        <div class="toolbar-bg-wrap hw3d0" [ngClass]="{expanded: expandHeader}">
          <md-toolbar color="primary" class="hw3d0">
              <span class="logo-title">{{ name }}</span>
              <span class="fill"></span>
              <button md-button router-active [routerLink]=" ['Home'] ">
                Home
              </button>
              <button md-button router-active [routerLink]=" ['Services'] ">
                Services
              </button>
              <button md-button router-active [routerLink]=" ['Library'] ">
                Library
              </button>
              <button md-button router-active [routerLink]=" ['Chat'] ">
                Chat
              </button>
              
              <button md-button router-active [routerLink]=" ['UserAuth'] " *ngIf="!sessionService.auth">
                Login
              </button>
              <button md-button router-active [routerLink]=" ['UserAuth'] " *ngIf="sessionService.auth">
                My account
              </button>
              <button md-button router-active [routerLink]=" ['UserAuth'] " *ngIf="sessionService.auth">
                Logout
              </button>
          </md-toolbar>
        </div>
      
      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>

      <router-outlet></router-outlet>

      <!--<pre class="app-state">{{ appState.state | json }}</pre>-->

      <footer>
        <img [src]="angularclassLogo" width="6%">
        WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a>
      </footer>
      </md-content>
  `
})
@RouteConfig([
  {path: '/', name: 'Home', component: Home, useAsDefault: true},
  {path: '/library', name: 'Library', component: Library},
  {path: '/services', name: 'Services', component: Services},
  {path: '/user/auth', name: 'UserAuth', component: Auth},
  {path: '/chat', name: 'Chat', component: Chat},
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  // {path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About')}
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'PocketLawyer';
  url = 'https://twitter.com/AngularClass';
  expandHeader:boolean;
  sessionService:SessionService;

  constructor(public appState:AppState,
              private router:Router,
              private userService:UserService,
              @Query(RouterLink) public routerLink:QueryList<RouterLink>) {
    this.subscribeForHeaderToggling();
    this.sessionService = SessionService;
  }

  ngOnInit() {
    this.userService.isAuthenticated().subscribe(() => this.appLoaded());
  }


  private _findRootRouter():Router {
    let router:Router = this.router;
    while (isPresent(router.parent)) {
      router = router.parent;
    }
    return router;
  }

  private toggleHeader() {
    const currentUrl = this.router.currentInstruction.toRootUrl();
    const masterUrl = this.router.generate(['/Home']).toRootUrl();
    this.expandHeader = currentUrl == masterUrl;
  }

  private subscribeForHeaderToggling() {
    this.routerLink.changes.subscribe(() => {
      this.toggleHeader();
      this._findRootRouter().subscribe(() => {
        this.toggleHeader();
      });
    });
  }

  appLoaded() {
    document.body.className = document.body.className.replace("app-starting", "");
  }
}
