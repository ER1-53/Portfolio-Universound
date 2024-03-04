import Song from "../models/song"
import axios from 'axios'


export default class SongService {

  static fetchSongList(): Promise<Song[]> {

    const cookies = document.cookie.split('; ');
    console.log('dans service song les cookies : ' + cookies)
    let token = '';

    const matchingCookie = cookies.find(item => item.startsWith('UniverToken='));
    if (matchingCookie) {
      const [_, tokenValue] = matchingCookie.split('=');
      token = tokenValue;
    }
    console.log('dans songService le token :' + token)
    return axios
      .get('http://localhost:4001/api/songs', {
            headers: { authorization: `Bearer ${token}` }
          })
          .then((res) => {const json = res.data.data;
            console.log(res.data.data);
            return json
          });
    }
}


