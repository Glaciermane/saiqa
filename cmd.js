function displayOutput(output) {
  const outputElement = document.getElementById('output');
  const timestamp = getTimestamp();

  const outputItem = document.createElement('div');
  outputItem.className = 'output-item';

  const timestampSpan = document.createElement('span');
  timestampSpan.className = 'timestamp';
  timestampSpan.textContent = timestamp;
  outputItem.appendChild(timestampSpan);

  let currentIndex = 0;
  const typingSpeed = 40;

  const typingInterval = setInterval(() => {
    if (currentIndex === output.length) {
      clearInterval(typingInterval);
    } else if (output[currentIndex] === '<') {
      const endIndex = output.indexOf('>', currentIndex) + 1;
      const tag = output.substring(currentIndex, endIndex);

      const tagSpan = document.createElement('span');
      tagSpan.innerHTML = tag;

      outputItem.appendChild(tagSpan);
      currentIndex = endIndex;
    } else {
      const char = output[currentIndex];
      const span = document.createElement('span');
      span.textContent = char;

      if (output.substring(currentIndex, currentIndex + 9) === 'unknown cmd') {
        span.classList.add('yellow');
        currentIndex += 8;
      }

      outputItem.appendChild(span);
      currentIndex++;
    }
  }, typingSpeed);

  outputElement.appendChild(outputItem);
}




function getTimestamp() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `[${hours}:${minutes}:${seconds}]`;
}
// Funktion zum Verarbeiten des eingegebenen Befehls
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
    output = ' ' + '│' + ' ' + ' ' + 'unkown cmd:' + '  ' + command;
  }

  displayOutput(output);
}

document.addEventListener('DOMContentLoaded', function() {
  var inputField = document.getElementById('input-field');

  inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      var command = inputField.value.trim();
      processCommand(command);
      inputField.value = ''; // Eingabefeld leeren
    }
  });
});



