const inputField = document.querySelector('.input-field');
const outputDiv = document.querySelector('.output');

// Funktion, um Befehle zu verarbeiten und die entsprechende Antwort zu generieren
function processCommand(command) {
  let output = '';

  if (command === 'hallo') {
    output = 'Hallo! Wie kann ich dir helfen?';
  } else if (command === 'zeit') {
    const now = new Date();
    output = 'Aktuelle Uhrzeit: ' + now.toLocaleTimeString();
  } else if (command === 'info') {
    output = 'Dies ist ein Beispiel-Terminal.';
  } else {
    output = 'Befehl nicht erkannt: ' + command;
  }

  // Antwort im Terminal anzeigen
  outputDiv.textContent = output;
}

// Event Listener für das Eingabefeld, um den Befehl zu verarbeiten
inputField.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const command = inputField.value.trim();
    processCommand(command);
    inputField.value = ''; // Eingabefeld leeren
  }
});
