class Pokemon {
    // 1. Typage des propriétés:
    id: number;
    picture: string;
    metadata: {
      hp: number;
      cp: number;
      name: string;
      types: Array<string>;
      created: Date;
    };
  
    // 2. Définition des valeurs par défaut:
    constructor(
      id: number,
      picture: string = 'http://...',
      metadata: {
        hp: number,
        cp: number,
        name: string ,
        types: Array<string>,
        created: Date,
      } = {
          hp: 0,
          cp: 0,
          name: "",
          types: [],
          created: new Date()
      } 
    ) {
      this.id = id;
      this.picture = picture;
      this.metadata = metadata;
    }
  }
  
  export default Pokemon;
  