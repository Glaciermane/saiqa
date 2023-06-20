window.addEventListener('DOMContentLoaded', (event) => {
  const lightningContainer = document.getElementById('lightning-container');
  const numParticles = 100;

  function createLightning() {
    const lightning = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    lightning.classList.add('lightning');
    lightning.setAttribute('viewBox', '0 0 100 100');

    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', '10,0 90,0 50,100');

    lightning.appendChild(polygon);
    lightningContainer.appendChild(lightning);
  }

  function generateLightnings() {
    for (let i = 0; i < numParticles; i++) {
      createLightning();
    }
  }

  generateLightnings();
});
