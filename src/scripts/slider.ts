const INTERVAL_MS = 5000;
const SWIPE_THRESHOLD = 50;

export function initBannerSlider(): void {
  const slider = document.getElementById('bannerSlider');
  if (!slider) return;

  const total = slider.children.length;
  let index = 0;

  const show = (i: number): void => {
    slider.style.transform = `translateX(-${i * 100}%)`;
    slider.style.transition = 'transform 0.6s ease';
  };

  const next = (): void => {
    index = (index + 1) % total;
    show(index);
  };

  const prev = (): void => {
    index = (index - 1 + total) % total;
    show(index);
  };

  window.setInterval(next, INTERVAL_MS);

  let startX = 0;
  slider.addEventListener('touchstart', (e: TouchEvent) => {
    startX = e.touches[0].clientX;
  });
  slider.addEventListener('touchend', (e: TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > SWIPE_THRESHOLD) next();
    else if (endX - startX > SWIPE_THRESHOLD) prev();
  });
}
