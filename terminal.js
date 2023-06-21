document.addEventListener("DOMContentLoaded", function() {
  var svg = document.querySelector("svg");
  var width = window.innerWidth;
  var height = window.innerHeight;
  var numberOfTriangles = 200; // Anzahl der Dreiecke, die generiert werden sollen

  for (var i = 0; i < numberOfTriangles; i++) {
    var triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    var x1 = Math.random() * (width - 50) + 25; // x-Koordinate in der Mitte des Bildschirms
    var y1 = Math.random() * (height - 50) + 25; // y-Koordinate in der Mitte des Bildschirms
    var x2 = x1 + Math.random() * 20 - 10;
    var y2 = y1 + Math.random() * 20 - 10;
    var x3 = x1 + Math.random() * 20 - 10;
    var y3 = y1 + Math.random() * 20 - 10;
    triangle.setAttribute("points", x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3);
    triangle.classList.add("triangle");
    svg.appendChild(triangle);
  }
});
