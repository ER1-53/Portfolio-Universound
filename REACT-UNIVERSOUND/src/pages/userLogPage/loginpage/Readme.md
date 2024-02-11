# Presentation du code de Login avec API Google

```import React, { useState } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle, IResolveParams } from 'reactjs-social-login';

interface LoginProps {
  handleLogin: (username: string, password: string) => void;
}```

Ceci est la section d’importation où nous importons tous les modules nécessaires. `React` et `useState` sont importés de la bibliothèque React. GoogleLoginButton est importé de `react-social-login-buttons` qui fournit un bouton de connexion Google stylisé. `LoginSocialGoogle` et `IResolveParams` sont importés de `reactjs-social-login` qui fournit une interface pour la connexion sociale Google. `LoginProps` est une interface TypeScript qui définit la structure des props pour le composant `LoginPage`.

```const LoginPage: React.FC<LoginProps> = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');```

Ici, nous définissons le composant `LoginPage`. Il accepte `handleLogin` comme prop, qui est une fonction pour gérer la connexion de l’utilisateur. Nous utilisons également l’hook `useState` pour créer deux états locaux pour stocker le nom d’utilisateur et le mot de passe de l’utilisateur.

  ```const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleLogin(username, password);
  };```

`handleSubmit` est une fonction qui est appelée lorsque l’utilisateur soumet le formulaire de connexion. Elle empêche le comportement par défaut du formulaire (qui est de recharger la page) et appelle la fonction handleLogin avec le nom d’utilisateur et le mot de passe actuels.

  ```const onSignIn = (params: IResolveParams) => {
    if (params.provider && params.data) {
      console.log(params.provider, params.data);
    }
  };```

`onSignIn` est une fonction qui est appelée lorsque l’utilisateur se connecte avec succès via Google. Elle affiche les données de connexion dans la console.

  ```return (
    // ... Reste du code ...
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
    // ... Reste du code ...
  );
};```

Dans la fonction de rendu, nous retournons le JSX qui définit l’interface utilisateur du composant. Nous utilisons le composant LoginSocialGoogle pour permettre à l’utilisateur de se connecter via Google. Nous passons plusieurs props à ce composant, y compris client_id qui est l’ID client de votre application Google, scope qui définit les informations que votre application demande à accéder, onResolve qui est la fonction à appeler lorsque l’utilisateur se connecte avec succès, et onReject qui est la fonction à appeler si une erreur se produit lors de la connexion. À l’intérieur du composant LoginSocialGoogle, nous utilisons le composant GoogleLoginButton pour afficher le bouton de connexion Google.

```export default LoginPage;```

Enfin, nous exportons le composant LoginPage pour qu’il puisse être utilisé dans d’autres parties de l’application.