class Authenticator {
    static login(authenticable, password) {
        if(Authenticator.isAutenticatable(authenticable)) {
        return authenticable.authenticate(password);
        }
        return false;
    }

    static isAutenticatable(authenticable) {
        return "authenticate" in authenticable && authenticable.authenticate instanceof Function;
    }
}

export { Authenticator };