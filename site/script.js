// Fonction pour afficher la date et l'heure
function displayDateTime() {
    const now = new Date();
    const dateTimeString = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    document.getElementById('dateTimeDisplay').textContent = dateTimeString;
}

// Charger du contenu dynamique
function loadContent() {
    const contentDiv = document.getElementById('dynamicContent');
    contentDiv.innerHTML = '<p>Voici du contenu chargé dynamiquement avec JavaScript !</p>';
}

// Changer la couleur d'arrière-plan
function changeBackgroundColor() {
    document.body.style.backgroundColor = '#f0f8ff';
}

// Ajouter des écouteurs d'événements
document.getElementById('showDateTimeButton').addEventListener('click', displayDateTime);
document.getElementById('loadContentButton').addEventListener('click', loadContent);
document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);
// Example JavaScript code for a basic website

// Function to display current date and time
function displayDateTime() {
    const now = new Date();
    const dateTimeString = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    document.getElementById('dateTimeDisplay').textContent = dateTimeString;
}

// Event listener for button click
document.getElementById('showDateTimeButton').addEventListener('click', displayDateTime);

// Dynamic content loading example
function loadContent() {
    const contentDiv = document.getElementById('dynamicContent');
    contentDiv.innerHTML = '<p>This is dynamically loaded content!</p>';
}

document.getElementById('loadContentButton').addEventListener('click', loadContent);

// Example of changing styles dynamically
function changeBackgroundColor() {
    document.body.style.backgroundColor = '#f0f8ff';
}

document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);

// Function to play sound
function playSound() {
    const audio = new Audio('gogogogogo.mp3'); // Example sound URL
    audio.play();
}

document.getElementById('playSoundButton').addEventListener('click', playSound);