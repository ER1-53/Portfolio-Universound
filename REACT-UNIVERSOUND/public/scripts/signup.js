// Fonction appelée lorsque la connexion Google réussit
function onSignIn(googleUser) {
    // Obtenir les informations de l'utilisateur
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // Vous pouvez ajouter ici le code pour gérer l'authentification côté client
    // ou envoyer les informations de connexion au serveur pour une authentification côté serveur.
}
