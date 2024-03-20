import React, { FunctionComponent, useState } from 'react'
import LogoHeader from '../../../components/header/logoheader'
import styles from './renewHaskPassword.module.css'
import { Link } from 'react-router-dom';
import UserService from '../../../service/user_service'

// Interface defining a form field structure
type Field = {
  value?: any,
  error?: string,
  isValid?: Boolean
}

// Interface defining structure for password reset information
type RenewInfos = {
  mail: Field,
}

const RenewHaskPage: FunctionComponent = () => {

  // State variable to store password reset information
  const [renewInfos, setRenewInfos] = useState<RenewInfos>({
    mail: {value: ''},
  });

  // State variable to store a message for the user
  const [message, setMessage] = useState<String>('')

  // Function to handle changes in form input fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    // Update renewInfos state with the changed field
    setRenewInfos({ ...renewInfos, ...newField});
  }

  // Function to handle form submission for requesting password reset email
  const handleSubmitMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    const isFormValid = validateForm();
    if(isFormValid) {
      // Call user service to request password reset
      const token = UserService.RequestPasswordReset(renewInfos.mail.value);
      setMessage('Envoi d\'un mail de récupération.')
      return token;
  };
  }

  // Function to validate the form
  const validateForm = () => {
    let newRenewInfos: RenewInfos = renewInfos;

    // Validate email field
     if (renewInfos.mail.value.length < 6) {
      const errorMsg: string = 'Votre E-mail doit faire au moins 6 caractères de long.'
      const newField: Field = {value: renewInfos.mail.value, error: errorMsg, isValid: false}
      newRenewInfos = { ...newRenewInfos, ...{mail: newField}}
     } else {
      const newField: Field = { value: renewInfos.mail.value, error: '', isValid: true}
      newRenewInfos = { ...newRenewInfos, ...{mail: newField}}
     }

     // Update renewInfos state with validation results
     setRenewInfos(newRenewInfos);

     // Return true if email is valid
     return newRenewInfos.mail.isValid;
  }

  // Renew Password page
  return (
    <div>
    <div className={styles.title}>
        <LogoHeader />
    </div>
    <main className={styles.mainMail}>
        <h2>Récupérer votre compte</h2>
        <h2>UniverSound</h2>
        <form action="/submit" method="post" className={styles.fieldMail} onSubmit={(e) => handleSubmitMail(e)}>
          <label htmlFor="mail">E-mail :</label>
          <input type="text" id="mail" name="mail" required value={renewInfos.mail.value} onChange={(e) => handleInputChange(e)}/>
          {renewInfos.mail.error &&
          <div className={styles.errorMessage}>
            {renewInfos.mail.error}
          </div>
          }
          <div className={styles.boxMessage}>
            {message && <div className={styles.infosMessage}>
              {message}
            </div> }
          </div>
          <div className={styles.buttonSubmit}>
            <button type="submit">Submit</button>
          </div>
            <Link to='/login' className={styles.returnLogin}>Retour</Link>
        </form>
      </main>
    </div>
  )
}

  export default RenewHaskPage;
