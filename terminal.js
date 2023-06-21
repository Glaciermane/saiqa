    function generateTriangles() {
      var svg = document.querySelector("svg");
      var width = window.innerWidth;
      var height = window.innerHeight;
      var numberOfTriangles = 500; // Anzahl der Dreiecke, die generiert werden sollen

      svg.innerHTML = ""; // Vorherige Dreiecke löschen

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

    function updateVisibility() {
      var triangles = document.querySelectorAll(".triangle");
      for (var i = 0; i < triangles.length; i++) {
        var triangle = triangles[i];
        var isVisible = Math.random() < 0.5; // Zufällige Entscheidung, ob das Dreieck ein- oder ausgeblendet wird
        if (isVisible) {
          triangle.style.opacity = 1;
        }
