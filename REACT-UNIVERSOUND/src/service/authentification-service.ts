import axios from "axios";
import { resolve } from "path";


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
                { headers: { "Content-Type": "application/json" }},
                )
              .then((res) => {
                if (res.data) {
                  console.log(`L'utilisateur ${username} s'est authentifié avec succès.`);
                  AuthService.isAuthenticated = true;
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

    static leftSession(): void {
      AuthService.isAuthenticated = false;
      resolve();
    }
    }

