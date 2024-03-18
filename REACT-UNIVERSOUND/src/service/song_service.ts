import Song from "../models/song"
import axios from 'axios'


export default class SongService {

  static async upTokenByCookie(): Promise<string | null> {
    try {
      const cookies = document.cookie.split(',');
      const matchingCookie = cookies.find((item) => item.startsWith('UniverToken='));
      console.log(`est ce que cookie match dans song service ${matchingCookie}`)
      if (matchingCookie) {
        const [_, tokenValue] = matchingCookie.split('=');
        console.log(`value of token in song service uptoken ${tokenValue}`)
        return tokenValue;
      }
    } catch (error) {
      console.error(`Error retrieving token: ${error}`);
    }
    return null;
  }

  static async fetchSongList(username: string, userid: number): Promise<Song[]> {
    const token = await SongService.upTokenByCookie();
    console.log(`je suis le token dans fetchSong ${token}`);
    console.log(`Dans song_service username : ${username}`);
    console.log(`Dans song_service userid : ${userid}`)

    try {
      let url = 'http://localhost:4001/api/songs'; // Default URL for admin

      if (userid && username !== 'admin') { // Check if user is logged in and not admin (ID 1)
        console.log(`Dans song_service apres condition : ${userid}`)
        url = `http://localhost:4001/api/users/${userid}/songs`;
      }
      console.log(`je suis dans song service ${url}`)
      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(`List de musique charger avec succès ${res}`);
      return res.data.data;
    } catch (error) {
      console.error(`Erreur au chargement de la list de musique : ${error}`);
      throw error;
    }
  }

  static async createSong(audioSrc: string, metadata: string): Promise<void> {
    try {
      const token = await SongService.upTokenByCookie();
      const res = await axios.post('http://localhost:4001/api/songs',
        { audioSrc, metadata},
        { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }},
        );
      console.log('Song created successfully');
    } catch (error) {
      console.error(`Error creating song: ${error}`);
      throw error;
    }
  }

  static async deleteSong(songId: string) {
    const token = await SongService.upTokenByCookie();
    try {
      const res = await axios.delete(`http://localhost:4001/api/songs/${songId}`,
      {headers: { Authorization: `Bearer ${token}` }
    });
    } catch (error) {
      console.error(' La musique n\'a pas pu etre supprimé.'+ error)
    }
  }

  static async searchSong(term: string): Promise<Song[]> {
    const token = await SongService.upTokenByCookie();
    try {
      const response = await axios.get(`http://localhost:4001/api/songs?terme=${term}`,
      {headers: { Authorization: `Bearer ${token}` }});
      console.log(response.data.data)
      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}
