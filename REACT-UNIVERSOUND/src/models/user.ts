export default class User {
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    mail: string;
    password: string;

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
     id: number,
     firstname: string = 'Dupond',
     lastname: string = 'Henri',
     username: string = 'The artist',
     mail: string = 'henri@yopmail.com',
     password: string = 'pefzdadzfqfe'
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = id;
     this.firstname = firstname;
     this.lastname = lastname;
     this.username = username;
     this.mail = mail;
     this.password = password;
    }
   }
