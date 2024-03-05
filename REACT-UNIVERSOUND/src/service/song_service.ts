import Song from "../models/song"
import axios from 'axios'


export default class SongService {

  static fetchSongList(): Promise<Song[]> {

    const cookies = document.cookie.split(',');
    let token = '';

    const matchingCookie = cookies.find(item => item.startsWith('UniverToken='));
    console.log(matchingCookie)
    if(matchingCookie) {
      const [_, tokenValue] = matchingCookie.split('=');
      token = tokenValue;
      
    }
    return axios
      .get('http://localhost:4001/api/songs', {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((res) => {const json = res.data.data;
            console.log(res.data.data);
            return json
          });
    }
}


