export class SessionService {
    static get csrfToken() {
        return sessionStorage.getItem('csrf');
    }

    static set csrfToken(csrf) {
        sessionStorage.setItem('csrf', csrf);
    }

    static get auth() {
        return sessionStorage.getItem('auth') == 'true';
    }

    static set auth(state) {
        sessionStorage.setItem('auth', state ? 'true' : 'false');
    }
}