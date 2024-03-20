import React, { FunctionComponent, useState } from 'react';
import LogoHeader from '../../../components/header/logoheader';
import styles from './renewPassword.module.css'
import { Link } from 'react-router-dom';
import UserService from '../../../service/user_service';

// Interface defining the structure of a form field
type Field = {
  value?: any,
  error?: string,
  isValid?: Boolean
}

// Interface defining the structure of new password information
type NewPassInfos = {
  mail: Field,
  password: Field,
}

const RenewPassPage: FunctionComponent = () => {

  // State variable to store new password information
  const [newPassInfos, setLoginInfos] = useState<NewPassInfos>({
    mail: {value: '' },
    password: {value: '' }
  });

  // State variable to store a message for the user
  const [message, setMessage] = useState<String>('')

  // Function to handle changes in form input fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    // Update newPassInfos state with the changed field
    setLoginInfos({ ...newPassInfos, ...newField});
  }

  // Function to validate the form
  const validateForm = () => {
    let tempNewPassInfos: NewPassInfos = newPassInfos;

    // Validate email field
    if (newPassInfos.mail.value.length < 3) {
      const errorMsg: string = 'Votre identifiant doit faire au moins 3 caractères de long.'
      const newField: Field = {value: newPassInfos.mail.value, error: errorMsg, isValid: false}
      tempNewPassInfos = { ...tempNewPassInfos, ...{mail: newField}}
     } else {
      const newField: Field = { value: newPassInfos.mail.value, error: '', isValid: true}
      tempNewPassInfos = { ...tempNewPassInfos, ...{mail: newField}}
     }

     // Validate password field
     if (newPassInfos.password.value.length < 4) {
      const errorMsg: string = 'Votre mot de passe doit faire au moins 6 caractères de long.'
      const newField: Field = {value: newPassInfos.password.value, error: errorMsg, isValid: false}
      tempNewPassInfos = { ...tempNewPassInfos, ...{password: newField}}
     } else {
      const newField: Field = { value: newPassInfos.password.value, error: '', isValid: true}
      tempNewPassInfos = { ...tempNewPassInfos, ...{password: newField}}
     }

     // Update newPassInfos state with validation results
     setLoginInfos(tempNewPassInfos);

     // Return true if both email and password are valid
     return tempNewPassInfos.mail.isValid && tempNewPassInfos.password.isValid;
  }

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if(isFormValid) {
      setMessage('Envoi de la demande.');
      try {

        // Call user service to change password
        const newpass = await UserService.ChangePassword(newPassInfos.mail.value, newPassInfos.password.value)
        if(newpass){
          setMessage('Modification du mot de passe effectuée.')
        } else {
          setMessage('Echec de modification')
        }

        } catch (error) {
          console.error(error)
          setMessage('Le renouvellement du mot de passe a échoué. Réessayez dans quelques instants.');

        }
        }
      }

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
            <label htmlFor="mail">E-mail :</label>
            <input type="text" id="mail" name="mail" required value={newPassInfos.mail.value} onChange={(e) => handleInputChange(e)}/>
            {newPassInfos.mail.error &&
            <div className={styles.errorMessage}>
              {newPassInfos.mail.error}
            </div>
            }
            <label htmlFor="password">Nouveau mot de passe :</label>
            <input type="password" id="password" name="password" required value={newPassInfos.password.value} onChange={(e) => handleInputChange(e)}/>
            {newPassInfos.password.error &&
            <div className={styles.errorMessage}>
              {newPassInfos.password.error}
            </div>
            }
            <div className={styles.boxMessage}>
              {message && <div className={styles.infosMessage}>
                {message}
              </div> }
            </div>
            <div className={styles.buttonSubmit}>
              <button type="submit">Valider</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default RenewPassPage;
