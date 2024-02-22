export default class Song {
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    audioSrc: string;
    metadata: {
        title: string;
        album: string;
        artist: string;
        coverArtSrc: string;
        types: Array<string>;
    }
 
    
     
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
     id: number,
     audioSrc: string = './',
     metadata: {
         title: string,
         album: string,
         artist: string,
         coverArtSrc: string,
         types: Array<string>,
    } = {
        title: '',
        album: '',
        artist: '',
        coverArtSrc: '',
        types: [],
    }
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = id;
     this.audioSrc = audioSrc;
     this.metadata = metadata;
    }
   }
