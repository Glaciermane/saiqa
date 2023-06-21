function generateTriangles() {
  var svg = document.querySelector("svg");
  var width = window.innerWidth;
  var height = window.innerHeight;
  var triangles = document.querySelectorAll(".triangle");

  triangles.forEach(function(triangle) {
    var isVisible = parseFloat(triangle.style.opacity) > 0;
    if (isVisible) {
      triangle.style.opacity = "0";
      triangle.style.transition = "opacity 1s ease-in-out";
      triangle.addEventListener("transitionend", function() {
        triangle.parentNode.removeChild(triangle);
      });
    }
  });

  var numberOfTriangles = 1000 - triangles.length;

  for (var i = 0; i < numberOfTriangles; i++) {
    var triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    var x1 = Math.random() * width;
    var y1 = Math.random() * height;
    var x2 = x1 + Math.random() * 2.5 - 1.25;
    var y2 = y1 + Math.random() * 2.5 - 1.25;
    var x3 = x1 + Math.random() * 2.5 - 1.25;
    var y3 = y1 + Math.random() * 2.5 - 1.25;
    triangle.setAttribute("points", x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3);
    triangle.classList.add("triangle");
    svg.appendChild(triangle);
  }
}

function updateVisibility() {
  var triangles = document.querySelectorAll(".triangle");
  triangles.forEach(function(triangle) {
    var isVisible = Math.random() < 0.5;
    if (isVisible) {
      triangle.style.opacity = "1";
      triangle.style.transition = "opacity 2s ease-in-out";
    } else {
      triangle.style.opacity = "0";
      triangle.style.transition = "opacity 2s ease-in-out";
    }
  });
}

function updatePositions() {
  var triangles = document.querySelectorAll(".triangle");
  triangles.forEach(function(triangle) {
    var isVisible = parseFloat(triangle.style.opacity) > 0;
    if (isVisible) {
      var x1 = Math.random() * window.innerWidth;
      var y1 = Math.random() * window.innerHeight;
      var x2 = x1 + Math.random() * 2.5 - 1.25;
      var y2 = y1 + Math.random() * 2.5 - 1.25;
      var x3 = x1 + Math.random() * 2.5 - 1.25;
      var y3 = y1 + Math.random() * 2.5 - 1.25;
      triangle.setAttribute("points", x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3);
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  generateTriangles(); // Dreiecke initial generieren
  setInterval(updateVisibility, 2000); // Einblendung, Ausblendung aktualisieren (alle 2 Sekunden)
  setInterval(updatePositions, 5000); // Positionswechsel aktualisieren (alle 5 Sekunden)
  setInterval(generateTriangles, 10000); // Dreiecke regelmäßig neu generieren (alle 10 Sekunden)
});


document.addEventListener("DOMContentLoaded", function() {
  // ...

  var inputField = document.getElementById("input-field");
  inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      var command = inputField.value;
      // Hier kannst du den eingegebenen Befehl verarbeiten
      console.log("Command entered: " + command);
      inputField.value = ""; // Zurücksetzen des Eingabefelds
    }
  });

  // ...
});
