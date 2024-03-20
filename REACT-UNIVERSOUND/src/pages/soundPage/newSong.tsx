import React, { FunctionComponent, useState } from 'react';
import LogoHeader from '../../components/header/logoheader';
import styles from './newSong.module.css'
import { Link } from 'react-router-dom';
import SongService from '../../service/song_service';

interface SongProps {
  handleSignup: (audioSrc: string, metadata: string) => void;
}

const UpSong: FunctionComponent<SongProps> = ({ handleSignup }) => {
  const [audioSrc, setAudioSrc] = useState('');
  const [metadata, setMetadata] = useState({
    title: '',
    artist: '',
    album: '',
    types: []
  });
  const [message, setMessage] = useState('');
  const [formSubmit, setFormSubmit] = useState<Boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    SongService.createSong(audioSrc, metadata);
    const formIsValid = true
    if(formIsValid) {
      setFormSubmit(true);
      setMessage("La chanson a été ajouter à votre list d'écoute !");
    }
  };

  return (
    <div className={styles.FullPage}>
      <div className={styles.title}>
          <LogoHeader />
      </div>
      <div className={styles.big_box}>
        <main className={styles.signBox}>
          <div className={styles.decorateBox}>
            <h1 className={styles.accroche}>Profiter d'un large choix de titre audio de qualitée</h1>
          </div>
          <div>
              {formSubmit ? (
                <h1>{message}</h1>
              ) : (
                <div className={styles.infosLog}>
            <h2>Ajouter une nouvelle musique</h2>
            <Link to="/login"><h6>J'ai déjà un compte ...</h6></Link>
            <hr />
            <form action="/submit" method="post" className={styles.field} onSubmit={handleSubmit}>
              <label htmlFor="audioSrc">audioSrc :</label>
              <input type="text" id="audioSrc" name="audioSrc" required placeholder="audioSrc" value={audioSrc} onChange={e => setAudioSrc(e.target.value)} />

              <label htmlFor="metadata">metadata :</label>
              <input type="text" id="metadata" name="metadata" required placeholder="metadata" value={metadata} onChange={e => setMetadata(e.target.value)} />

              <div className={styles.buttonSubmit}>
              <button type="submit">créer un compte</button>
              </div>
            </form>
          </div>
          )}
            </div>
        </main>
      </div>
    </div>
  );
};

export default UpSong;
