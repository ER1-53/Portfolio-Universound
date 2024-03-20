import Song from "../models/song"
import axios from 'axios'

//SongService Class
export default class SongService {

  //Method to get the token from the cookie
  static async upTokenByCookie(): Promise<string | null> {
    try {
      const cookies = document.cookie.split(',');
      const matchingCookie = cookies.find((item) => item.startsWith('UniverToken='));

      if (matchingCookie) {
        const [_, tokenValue] = matchingCookie.split('=');
        return tokenValue;
      }
    } catch (error) {
      console.error(`Error retrieving token: ${error}`);
    }
    return null;
  }

  // Method to fetch the list of songs
  static async fetchSongList(username: string, userid: number): Promise<Song[]> {
    const token = await SongService.upTokenByCookie();

    try {
      let url = 'http://localhost:4001/api/songs'; // Default URL for admin

      // If the user is logged in and not an admin, update the URL
      if (userid && username !== 'admin') {
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

  // Method to create a new song
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

  // Method to delete a song
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

  // Method to search for a song
  static async searchSong(term: string): Promise<Song[]> {
    const token = await SongService.upTokenByCookie();
    try {
      const response = await axios.get(`http://localhost:4001/api/songs?terme=${term}`,
      {headers: { Authorization: `Bearer ${token}` }});
      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}
