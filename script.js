const icons = document.querySelectorAll('.icon');
const statusBar = document.getElementById('status-bar');

icons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    const info = icon.getAttribute('data-info');
    statusBar.innerText = `> DETECTADO: ${info}`;
  });

  icon.addEventListener('mouseleave', () => {
    statusBar.innerText = 'ESPERANDO ACCIÓN...';
  });
});
