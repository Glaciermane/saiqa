function generateTriangles() {
  var svg = document.querySelector("svg");
  var width = window.innerWidth;
  var height = window.innerHeight;
  var numberOfTriangles = 500;

  svg.innerHTML = "";

  for (var i = 0; i < numberOfTriangles; i++) {
    var triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    var x1 = Math.random() * width;
    var y1 = Math.random() * height;
    var x2 = x1 + Math.random() * 2 - 1;
    var y2 = y1 + Math.random() * 2 - 1;
    var x3 = x1 + Math.random() * 2 - 1;
    var y3 = y1 + Math.random() * 2 - 1;
    triangle.setAttribute("points", x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3);
    triangle.classList.add("triangle");
    svg.appendChild(triangle);
  }
}

function animateTriangle(triangle, isVisible) {
  var opacityKeyframes = [{ opacity: isVisible ? 0 : 1 }, { opacity: isVisible ? 1 : 0 }];
  var options = { duration: 2000, easing: "ease-in-out" };

  triangle.style.pointerEvents = isVisible ? "auto" : "none";
  triangle.animate(opacityKeyframes, options);
}

function updateVisibility() {
  var triangles = document.querySelectorAll(".triangle");
  for (var i = 0; i < triangles.length; i++) {
    var triangle = triangles[i];
    var isVisible = Math.random() < 0.5;
    animateTriangle(triangle, isVisible);

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
  setInterval(updateVisibility, 6000); // Einblendung, Ausblendung und Position aktualisieren (alle 2 Sekunden)
  setInterval(generateTriangles, 10000); // Dreiecke regelmäßig neu generieren (alle 10 Sekunden)
});
