import React, { FunctionComponent, useState } from 'react';
/* import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle, IResolveParams  } from 'reactjs-social-login'; */
import LogoHeader from '../../../components/header/logoheader';
import styles from './login.module.css';
import { useHistory, Link } from 'react-router-dom';
import AuthService from '../../../service/authentification-service';
import {  useDispatch } from 'react-redux';

// Defining the types for the fields
type Field = {
  value?: any,
  error?: string,
  isValid?: Boolean
}

// Defining the types for the login information
type LoginInfos = {
  username: Field,
  password: Field,
}

// LoginPage component
const LoginPage: FunctionComponent = () => {

  // Defining the state variables and hooks
  const history = useHistory()
  const dispatch = useDispatch();
  const [message, setMessage] = useState<String>('')

  // recuperation des inforamtions pour le social login
  /* const onSignIn = (params: IResolveParams) => {
    if (params.provider && params.data) {
      console.log(params.provider, params.data);
    }
  }; */

  const [loginInfos, setLoginInfos] = useState<LoginInfos>({
    username: {value: '' },
    password: {value: '' }
  });

  // Function to handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setLoginInfos({ ...loginInfos, ...newField});
  }

  // Function to validate the form
  const validateForm = () => {
    let newLoginInfos: LoginInfos = loginInfos;

    // Validating the username
    if (loginInfos.username.value.length < 3) {
      const errorMsg: string = 'Votre identifiant doit faire au moins 3 caractères de long.'
      const newField: Field = {value: loginInfos.username.value, error: errorMsg, isValid: false}
      newLoginInfos = { ...newLoginInfos, ...{username: newField}}
     } else {
      const newField: Field = { value: loginInfos.username.value, error: '', isValid: true}
      newLoginInfos = { ...newLoginInfos, ...{username: newField}}
     }

     // Validating the password
     if (loginInfos.password.value.length < 4) {
      const errorMsg: string = 'Votre mot de passe doit faire au moins 4 caractères de long.'
      const newField: Field = {value: loginInfos.password.value, error: errorMsg, isValid: false}
      newLoginInfos = { ...newLoginInfos, ...{password: newField}}
     } else {
      const newField: Field = { value: loginInfos.password.value, error: '', isValid: true}
      newLoginInfos = { ...newLoginInfos, ...{password: newField}}
     }

     setLoginInfos(newLoginInfos);

     return newLoginInfos.username.isValid && newLoginInfos.password.isValid;
  }

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if(isFormValid) {
      setMessage('Tentative de connexion en cours ...');

      await AuthService.login(loginInfos.username.value, loginInfos.password.value).then(
         async isAuthenticated => {
          if(!isAuthenticated) {
            setMessage('Identifiant ou mot de passe incorrect.');
            return;
          } else {
          const user = await AuthService.UserIdInfo(loginInfos.username.value, loginInfos.password.value);
          if(user){
            dispatch({
              type: "user/sendUser",
              payload: user,
            });
          }

        history.push('/songpage')
      }
      })
    }
  }





  // Rendering the LoginPage component
  return (
    <div>
      <div className={styles.title}>
          <LogoHeader />
      </div>
      <div className={styles.big_box}>
        <main className={styles.main}>
          <h2>J'ai un compte</h2><h2> UniverSound</h2>

          <hr />

          <form action="/submit" method="post" className={styles.field} onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="username">Identifiant :</label>
            <input type="text" id="username" name="username" required value={loginInfos.username.value} onChange={(e) => handleInputChange(e)}/>
            {loginInfos.username.error &&
            <div className={styles.errorMessage}>
              {loginInfos.username.error}
            </div>
            }
            <label htmlFor="password">Mot de passe :</label>
            <input type="password" id="password" name="password" required value={loginInfos.password.value} onChange={(e) => handleInputChange(e)}/>
            {loginInfos.password.error &&
            <div className={styles.errorMessage}>
              {loginInfos.password.error}
            </div>
            }
            <div className={styles.boxMessage}>
              {message && <div className={styles.infosMessage}>
                {message}
              </div> }
            </div>
            <label>
              <input type="checkbox" name="remember" id="remember" className={styles.remember} />
              <p className={styles.Remem}>Se souvenir de moi</p>
            </label>
            <div className={styles.buttonSubmit}>
              <button type="submit">Se Connecter</button>
            </div>
              <Link to='/renewPage'>Mot de passe oublié ?</Link>
            <hr/>
              <Link to='/signup'>Créer un compte !</Link>
          </form>

          {/* <LoginSocialGoogle
            client_id="368574400224-oj4fctha2pfjqg0m5h0p99u7kjaluuad.apps.googleusercontent.com"
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={onSignIn}
            onReject={(err) => {
              console.log(err);
            }}>
            <GoogleLoginButton />
          </LoginSocialGoogle> */}
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
