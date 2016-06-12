import {Inject, Injectable} from "@angular/core";
import {CookieService} from "angular2-cookie/core";

@Injectable()
export class LangService {
    private _lang;

    constructor(@Inject(CookieService) protected cookie: CookieService) {
        let activeLang = this.cookie.get('lang');
        if (!activeLang)
            activeLang = 'ru';
        this._lang = activeLang;
    }

    get lang() {
        return this._lang;
    }

    set lang(lang) {
        if (lang == this._lang) return;
        this._lang = lang;
        this.cookie.put('lang', lang);
        location.reload();
    }
}