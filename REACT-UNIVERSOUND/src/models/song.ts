export default class Song {
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    track: string;
    album: string;
    artiste: string;
    music: string;
    time: number;
    picture: string;
    video: string;
    types: Array<string>;
 
    
     
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
     id: number,
     track: string = 'track',
     album: string = 'album',
     artiste: string = 'artiste',
     music: string = './',
     time: number = 200,
     picture: string = 'http://...',
     video: string = 'http://...',
     types: Array<string> = ['Rock'],
     
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = id;
     this.track = track;
     this.album = album;
     this.artiste = artiste;
     this.music = music;
     this.time = time;
     this.picture = picture;
     this.video = video;
     this.types = types;
    
    }
   }