import axios from "axios";
import { resolve } from "path";
import { useState } from "react";


export default class AuthService {

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
                  console.log(`L'utilisateur ${username} s'est authentifié avec succès.${res.data.data.id}`);
                  AuthService.isAuthenticated = true;
                  console.log(res.data.token)
                  resolve(res.data.token);
                  document.cookie = "UniverToken" + "=" + res.data.token;
                  const cookies = document.cookie.split('; ');
                  console.log(`je suis dans authen-service ${cookies}`)
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

    static async UserIdInfo(username: string, password: string): Promise<number | undefined> {
      try {
        const response = await axios.post(
          "http://localhost:4001/api/login",
          { username, password },
          { headers: { "Content-Type": "application/json" } }
        );

        if (response.data) {
          console.log(`Dans userInfo L'utilisateur ${username} s'est authentifié avec succès.${response.data.data.id}`);
          return response.data.data.id;
        }

        // Implicitly handle cases where response.data is false or undefined
        return undefined;
      } catch (error) {
        console.error(`Erreur lors de l'authentification : ${error}`);
        throw error; // Re-throw for handling at call site
      }
    }

    static leftSession(): void {
      AuthService.isAuthenticated = false;
      resolve();
    }
    }

