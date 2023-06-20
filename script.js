window.addEventListener('DOMContentLoaded', (event) => {
  const lightningContainer = document.getElementById('lightning-container');
  const numParticles = 100;

  function createLightning() {
    const lightning = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    lightning.classList.add('lightning');

    // Lade die externe SVG-Datei
    fetch('crack.svg')
      .then(response => response.text())
      .then(svgData => {
        lightning.innerHTML = svgData;
        lightningContainer.appendChild(lightning);
      });
  }

  function generateLightnings() {
    for (let i = 0; i < numParticles; i++) {
      createLightning();
    }
  }

  generateLightnings();
});
