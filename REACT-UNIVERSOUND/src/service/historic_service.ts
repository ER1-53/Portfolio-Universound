import Song from "../models/song"
import axios from 'axios'
import SongService from "./song_service"


export default class HistoricService {
  // Add a user's song to the historical records
  static async addUserSong(userid: number, songid: number): Promise<void> {
    try {
      // Retrieve an authentication token
      const token = await SongService.upTokenByCookie();

      // Make a POST request to add the song
      const response = await axios.post(
        `http://localhost:4001/api/historic/${userid}/songs/${songid}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log('Chanson ajoutée avec succès');
    } catch (error){
      console.error(`Erreur lors de l'ajout de la chanson : ${error}`);
      throw error;
    }
  }
}
