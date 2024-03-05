import React, { FunctionComponent, useState } from 'react';
import LogoHeader from '../../../components/header/logoheader';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle, IResolveParams } from 'reactjs-social-login';
import styles from './signup.module.css'
import { Link } from 'react-router-dom';


interface SignupProps {
  handleSignup: (username: string, password: string, email: string, fistname: string, lastname: string) => void;
}

const SignUp: FunctionComponent<SignupProps> = ({ handleSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas!');
      return;
    }
    handleSignup(username, password, email, firstname, lastname);
  };

  const onSignIn = (params: IResolveParams) => {
    if (params.provider && params.data) {
      console.log(params.provider, params.data);
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
          <div className={styles.infosLog}>
            <h2>Create my Univers of Sound</h2>
            <Link to="/login"><h6>J'ai déjà un compte ...</h6></Link>

            <hr />
            <form action="/submit" method="post" className={styles.field} onSubmit={handleSubmit}>
              <label htmlFor="firstname">Firstname :</label>
              <input type="text" id="firstname" name="firstname" required placeholder="nom" value={firstname} onChange={e => setUsername(e.target.value)} />

              <label htmlFor="lastname">Lastname :</label>
              <input type="text" id="lastname" name="lastname" required placeholder="nom" value={lastname} onChange={e => setUsername(e.target.value)} />

              <label htmlFor="e-mail">Address e-mail :</label>
              <input type="text" id="email" name="email" required placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)} />

              <label htmlFor="username">Username :</label>
              <input type="text" id="username" name="username" required placeholder="nom" value={username} onChange={e => setUsername(e.target.value)} />


              <label htmlFor="password">Password :</label>
              <input type="password" id="passwordSignUp" name="passwordSignUp" required placeholder="mot de passe" value={password} onChange={e => setPassword(e.target.value)} />

              <label htmlFor="password">checking password :</label>
              <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="mot de passe" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
              <div className={styles.buttonSubmit}>
              <button type="submit">créer un compte</button>
              </div>
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignUp;
