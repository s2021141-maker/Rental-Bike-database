document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-pill');
  const pins = document.querySelectorAll('.pin');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;
      pins.forEach((pin) => {
        const isBlue = pin.classList.contains('pin-blue');
        const show = filter === 'all' || (filter === 'adult' && isBlue) || (filter === 'child' && !isBlue);
        pin.style.display = show ? 'block' : 'none';
      });
    });
  });
});
