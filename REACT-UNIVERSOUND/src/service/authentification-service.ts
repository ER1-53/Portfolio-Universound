import axios from "axios";


export default class AuthService {
    static fetchSongList() {
      throw new Error("Method not implemented.");
    }
    static isAuthenticated: boolean = false;

    static login(username: string, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            axios
              .post(
                "http://localhost:4001/api/login",
                { username: username, password: password },
                { headers: { "content-type": "application/json" }},
                )
              .then((res) => {
                if (res.data) {
                  console.log(`L'utilisateur ${username} s'est authentifié avec succès.`);
                  AuthService.isAuthenticated = true;
                  console.log('je suis dans auth:' + res.data.token);
                  resolve(res.data.token);
                  document.cookie = "UniverToken" + "=" + res.data.token;
                  const cookies = document.cookie.split('; ');
                  console.log(cookies)
                } else {
                  console.log(`L'authentification a échoué pour l'utilisateur ${username}.`);
                  resolve(false);
                }
              })
              .catch((error) => {
                console.error(`Erreur lors de l'authentification : ${error}`);
                reject(`Erreur lors de l'authentification : ${error}`);
              });
          });
        }
    }

