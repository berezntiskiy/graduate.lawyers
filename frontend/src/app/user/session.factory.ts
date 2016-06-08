export class SessionFactory {
    static get csrfToken() {
        return localStorage.getItem('csrf');
    }

    static set csrfToken(csrf) {
        localStorage.setItem('csrf', csrf);
    }
}