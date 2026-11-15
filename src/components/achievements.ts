import { achievements } from '../data/achievements';

export function renderAchievements(): string {
  const cards = achievements
    .map(
      (a) => `
    <div class="p-6 rounded-2xl border border-white/5 bg-[#060b19] hover-card flex items-start gap-4">
      <div class="${a.emojiColor} text-2xl mt-0.5">${a.emoji}</div>
      <div>
        <h5 class="text-sm font-medium text-white leading-snug">${a.title}</h5>
        <p class="text-xs text-slate-500 mt-1">${a.organizer}</p>
      </div>
    </div>`,
    )
    .join('\n');

  return `
<section class="py-24 px-6 border-t border-white/5">
  <div class="max-w-6xl mx-auto">
    <h3 class="text-3xl font-medium tracking-tight text-white mb-12 flex items-center gap-3">
      <iconify-icon icon="solar:cup-star-linear" stroke-width="1.5"></iconify-icon>
      Achievements &amp; Awards
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      ${cards}
    </div>
  </div>
</section>`;
}
