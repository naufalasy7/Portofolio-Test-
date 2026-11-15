import { skills } from '../data/skills';

export function renderSkills(): string {
  const cards = skills
    .map(
      (cat) => `
    <div class="p-6 rounded-2xl border border-white/5 bg-[#060b19] hover-card ${cat.className}">
      <div class="flex items-center gap-3 mb-6">
        <iconify-icon icon="${cat.icon}" stroke-width="1.5" class="text-xl text-slate-300"></iconify-icon>
        <h4 class="text-base font-medium text-white tracking-tight">${cat.title}</h4>
      </div>
      <div class="flex flex-wrap gap-2">
        ${cat.items.map((i) => `<span class="skill-pill px-3 py-1.5 text-xs text-slate-300">${i}</span>`).join('\n')}
      </div>
    </div>`,
    )
    .join('\n');

  return `
<section id="skills" class="py-24 px-6 border-t border-white/5">
  <div class="max-w-6xl mx-auto">
    <h3 class="text-3xl font-medium tracking-tight text-white mb-12">Technical Expertise</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${cards}
    </div>
  </div>
</section>`;
}
