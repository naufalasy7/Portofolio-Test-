import { banner } from '../data/banner';

export function renderBanner(): string {
  const slides = banner
    .map(
      (s, i) => `
      <div class="min-w-full relative">
        <img src="${s.src}" class="w-full h-56 md:h-[380px] object-cover ${s.position}" alt="${s.alt || `Banner ${i + 1}`}">
      </div>`,
    )
    .join('\n');

  return `
<div class="mb-12 flex justify-center">
  <div class="w-full max-w-6xl rounded-2xl overflow-hidden border border-white/5 relative group">
    <div class="overflow-hidden">
      <div id="bannerSlider" class="flex transition-transform duration-700 ease-in-out">
        ${slides}
      </div>
    </div>
  </div>
</div>`;
}
