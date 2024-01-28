/*document.addEventListener("DOMContentLoaded", function() {
    var heartbeatAudio = document.getElementById('heartbeatAudio');
    heartbeatAudio.play();

    // Le rythme du battement de cœur en millisecondes
    var heartbeatInterval = 2000;

    // Animation de battement de cœur
    function heartbeat() {
        var logo = document.querySelector(".logo-container");
        logo.classList.remove("heartbeat-animation");
        void logo.offsetWidth; // Force a reflow
        logo.classList.add("heartbeat-animation");
    }

    // Démarrez l'animation à intervalles réguliers
    setInterval(heartbeat, heartbeatInterval);
});*/
    // Utilisation de setTimeout pour déclencher la redirection après 8 secondes
setTimeout(function() {
  // Remplacez "nouvelle-page.html" par le chemin de la nouvelle page
    window.location.href = "page_principale.html";
}, 8000); // 8000 millisecondes équivalent à 8 secondes
