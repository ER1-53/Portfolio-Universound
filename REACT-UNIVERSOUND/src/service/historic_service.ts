import Song from "../models/song"
import axios from 'axios'
import SongService from "./song_service"


export default class HistoricService {
  static async addUserSong(userid: number, songid: number): Promise<void> {
    try {
      const token = await SongService.upTokenByCookie();
      console.log(`jeton dans historique ${token}`);
      console.log(`dans le service historique utilisateur : ${userid} chanson : ${songid}`);

      const response = await axios.post(
        `http://localhost:4001/api/historic/${userid}/songs/${songid}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(response.data);
      console.log('Chanson ajoutée avec succès');
    } catch (error){
      console.error(`Erreur lors de l'ajout de la chanson : ${error}`);
      throw error;
    }
  }
}
