function updateVisibility() {
  var triangles = document.querySelectorAll(".triangle");
  for (var i = 0; i < triangles.length; i++) {
    var triangle = triangles[i];
    var isVisible = Math.random() < 0.5; // Zufällige Entscheidung, ob das Dreieck ein- oder ausgeblendet wird

    if (isVisible) {
      triangle.style.animation = "fadeIn 2s ease-in-out"; // Animation für Einblendung
      triangle.style.opacity = 1;
    } else {
      triangle.style.animation = "fadeOut 2s ease-in-out"; // Animation für Ausblendung
    }

    var x1 = Math.random() * window.innerWidth;
    var y1 = Math.random() * window.innerHeight;
    var x2 = x1 + Math.random() * 2 - 1;
    var y2 = y1 + Math.random() * 2 - 1;
    var x3 = x1 + Math.random() * 2 - 1;
    var y3 = y1 + Math.random() * 2 - 1;
    triangle.setAttribute("points", x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  generateTriangles(); // Dreiecke initial generieren
  setInterval(updateVisibility, 2000); // Einblendung, Ausblendung und Position aktualisieren (alle 2 Sekunden)
  setInterval(generateTriangles, 10000); // Dreiecke regelmäßig neu generieren (alle 10 Sekunden)
});
