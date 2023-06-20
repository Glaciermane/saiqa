// DOM-Elemente abrufen
const terminalContainer = document.getElementById("terminal-container");
const commandInput = document.getElementById("command-input");

// Funktion zum Senden des Befehls
function sendCommand() {
  const command = commandInput.value;
  // Hier kannst du den erhaltenen Befehl verarbeiten oder anzeigen lassen
  console.log("Command:", command);
  // Leere das Eingabefeld
  commandInput.value = "";
}

// Fokus auf das Eingabefeld setzen
commandInput.focus();
