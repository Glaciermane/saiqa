function displayOutput(output) {
  const outputElement = document.getElementById('output');
  const isScrolledToBottom = outputElement.scrollHeight - outputElement.clientHeight <= outputElement.scrollTop + 1; // Überprüfen, ob die Scrollbar am Ende ist

  const outputItem = document.createElement('div');
  outputItem.className = 'output-item';

  const timestampSpan = document.createElement('span');
  timestampSpan.className = 'timestamp';
  timestampSpan.textContent = getTimestamp();
  outputItem.appendChild(timestampSpan);

  let currentIndex = 0;
  const typingSpeed = 40;

  const typingInterval = setInterval(() => {
    if (currentIndex === output.length) {
      clearInterval(typingInterval);

      if (isScrolledToBottom) {
        outputElement.scrollTop = outputElement.scrollHeight; // Scrollbar zum Ende des Outputs setzen
      }
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

  if (isScrolledToBottom) {
    outputElement.scrollTop = outputElement.scrollHeight; // Scrollbar zum Ende des Outputs setzen
  }
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
  } else if (command === 'saiqa') {
        output = ' ' + ' ' + '│' + ' ' + ' ' + 'type in superuser password...';
  } else {
        output = ' ' + ' ' + '│ <span class="yellow">unknown cmd:</span> ' + command;
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



