setTimeout(function () {
  const mask: HTMLElement | null = document.querySelector(
    '#web-player-module-area-mask-panel',
  );
  if (mask) {
    mask.style.display = 'none';
  }
}, 1000);
