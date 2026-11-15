import { profile } from '../data/profile';

export function renderAbout(): string {
  const columns = profile.about
    .map(
      (col) => `
    <div class="space-y-6 text-sm text-slate-400 leading-relaxed">
      ${col.map((p) => `<p>${p}</p>`).join('\n')}
    </div>`,
    )
    .join('\n');

  return `
<section id="about" class="py-24 px-6 border-t border-white/5 bg-[#030816]">
  <div class="max-w-4xl mx-auto">
    <h3 class="text-3xl font-medium tracking-tight text-white mb-8">Background &amp; Philosophy</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      ${columns}
    </div>
  </div>
</section>`;
}
