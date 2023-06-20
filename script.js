window.addEventListener('DOMContentLoaded', (event) => {
  const lightningContainer = document.getElementById('lightning-container');
  const numParticles = 1;

  function createLightning() {
    const lightning = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    lightning.classList.add('lightning');

    // SVG-Code für den Blitz
    const svgCode = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40">
        <polygon points="10,0 18,30 2,30" />
      </svg>
    `;

    lightning.innerHTML = svgCode;
    lightningContainer.appendChild(lightning);
  }

  function generateLightnings() {
    for (let i = 0; i < numParticles; i++) {
      createLightning();
    }
  }

  generateLightnings();
});
