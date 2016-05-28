// App
export * from './app.component';
export * from './app.service';

import {AppState} from './app.service';
import {HTTP_PROVIDERS} from "@angular/http"

// Application wide providers
export const APP_PROVIDERS = [
    AppState,
    HTTP_PROVIDERS
];
