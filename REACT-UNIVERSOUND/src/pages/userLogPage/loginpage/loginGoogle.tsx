import React, { FunctionComponent, useEffect, useState } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';

const logIn: FunctionComponent = () => {
    const [login, setlogin] = useState([]);
  
   
  
    
  
    return (
        <div>
        <LoginSocialGoogle
          client_id={
            "368574400224-oj4fctha2pfjqg0m5h0p99u7kjaluuad.apps.googleusercontent.com"
        }
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }) => {
            console.log(provider, data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
      </div>
    );
  }
  
  export default logIn;
  