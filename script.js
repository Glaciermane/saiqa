window.addEventListener('DOMContentLoaded', (event) => {
  const neonFlash = document.getElementById('neonFlash');

  function flashAnimation() {
    neonFlash.style.opacity = 0.8;
    setTimeout(() => {
      neonFlash.style.opacity = 0;
    }, 500);
  }

  setInterval(flashAnimation, 4000);
});
