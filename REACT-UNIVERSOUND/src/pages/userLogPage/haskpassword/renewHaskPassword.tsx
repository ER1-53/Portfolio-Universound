import React, { FunctionComponent, useState } from 'react'
import LogoHeader from '../../../components/header/logoheader'
import styles from './renewHaskPassword.module.css'
import { Link } from 'react-router-dom';
import UserService from '../../../service/user_service'

type Field = {
  value?: any,
  error?: string,
  isValid?: Boolean
}

type RenewInfos = {
  mail: Field,
}

const RenewHaskPage: FunctionComponent = () => {

  const [renewInfos, setRenewInfos] = useState<RenewInfos>({
    mail: {value: ''},
  });

  const [message, setMessage] = useState<String>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setRenewInfos({ ...renewInfos, ...newField});
  }

  const handleSubmitMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page
    const isFormValid = validateForm();
    if(isFormValid) {
      const token = UserService.RequestPasswordReset(renewInfos.mail.value);
      setMessage('Envoi d\'un mail de récupération.')
      return token;
  };
  }

  const validateForm = () => {
    let newRenewInfos: RenewInfos = renewInfos;

     if (renewInfos.mail.value.length < 6) {
      const errorMsg: string = 'Votre E-mail doit faire au moins 6 caractères de long.'
      const newField: Field = {value: renewInfos.mail.value, error: errorMsg, isValid: false}
      newRenewInfos = { ...newRenewInfos, ...{mail: newField}}
     } else {
      const newField: Field = { value: renewInfos.mail.value, error: '', isValid: true}
      newRenewInfos = { ...newRenewInfos, ...{mail: newField}}
     }

     setRenewInfos(newRenewInfos);

     return newRenewInfos.mail.isValid;
  }
  //Renew Password page

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
              <Link to='/login' className='return'>Retour</Link>
          </form>
        </main>
      </div>
    )
  }

  export default RenewHaskPage;
