import React, { useState } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle, IResolveParams  } from 'reactjs-social-login';
import Footer from '../../../components/footer/footer';
import LogoHeader from '../../../components/header/logoheader';
import styles from './login.module.css'
import Header from '../../../components/header/headerLog';
import { Link } from 'react-router-dom';

interface LoginProps {
  handleLogin: (username: string, password: string) => void;
}

const LoginPage: React.FC<LoginProps> = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleLogin(username, password);
  };

  const onSignIn = (params: IResolveParams) => {
    if (params.provider && params.data) {
      console.log(params.provider, params.data);
    }
  };

  return (
    <div>
      <div className={styles.title}>
          <LogoHeader />
      </div>
      <div className={styles.big_box}>
        <main className={styles.main}>
          <h2>J'ai un compte</h2><h2> UniverSound</h2>
          
          <hr />
          <form action="/submit" method="post" className={styles.field} onSubmit={handleSubmit}>
            <label htmlFor="username">Adresse e-mail :</label>
            <input type="text" id="username" name="username" required />

            <label htmlFor="password">Mot de passe :</label>
            <input type="password" id="password" name="password" required />

            <label>
              <input type="checkbox" name="remember" id="remember" className={styles.remember} />
              <p className={styles.Remem}>Se souvenir de moi</p>
            </label>
            <div className={styles.buttonSubmit}>
              <button type="submit">Se Connecter</button>
            </div>
              <Link to="/">Mot de passe oublié ?</Link>
            
          </form>
          <LoginSocialGoogle
            client_id="368574400224-oj4fctha2pfjqg0m5h0p99u7kjaluuad.apps.googleusercontent.com"
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={onSignIn}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
