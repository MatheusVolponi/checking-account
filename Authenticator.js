class Authenticator {
    static login(authenticable, password) {
        return authenticable.authenticate(password);
    }
}

export { Authenticator };