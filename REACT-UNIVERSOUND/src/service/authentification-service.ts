export default class AuthService {
    static isAuthenticated: boolean = false;

    static login(username: string, password: string): Promise<boolean> {
        const isAuthenticated = (username === 'admin' && password === 'admin');

        return new Promise(resolve => {
            setTimeout(() => {
                this.isAuthenticated = isAuthenticated;
                resolve(isAuthenticated);
            }, 1000);
        })
    }
}