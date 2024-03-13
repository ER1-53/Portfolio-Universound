import Song from "../models/song"
import axios from 'axios'


export default class SongService {

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

  static fetchSongList(): Promise<Song[]> {

    const token = this.upTokenByCookie();

    return axios
      .get('http://localhost:4001/api/songs', {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((res) => {const json = res.data.data;
            console.log(res.data.data);
            return json
          });
    }

    static async createSong(audioSrc: string, metadata: string): Promise<void> {
      try {
        const res = await axios.post('http://localhost:4001/api/songs',
        { audioSrc, metadata},
        { headers: { "Content-Type": "application/json" }},
        );
        console.log('created user')
      } catch (error) {
        console.error(error);
      }
    }
}


