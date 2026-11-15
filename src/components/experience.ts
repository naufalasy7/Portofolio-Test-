import { experience } from '../data/experience';

export function renderExperience(): string {
  const items = experience
    .map((e, i) => {
      // Item ganjil: kartu di kanan (flex-row-reverse pada desktop)
      const reverse = i % 2 === 0 ? 'md:odd:flex-row-reverse' : '';
      return `
    <div class="relative flex items-center justify-between md:justify-normal ${reverse} group">
      <div class="hidden md:block w-5 h-5 absolute left-1/2 -translate-x-1/2 rounded-full border-[3px] border-slate-900 bg-white shadow"></div>
      <div class="w-full md:w-[calc(50%-2rem)] p-6 rounded-2xl border border-white/5 bg-[#060b19] hover-card">
        <h4 class="text-lg font-medium text-white">${e.title}</h4>
        <span class="text-xs text-slate-500 mt-1">${e.period}</span>
        <p class="text-sm text-slate-400 mt-3">
          ${e.description}
        </p>
      </div>
    </div>`;
    })
    .join('\n');

  return `
<section id="experience" class="py-24 px-6 border-t border-white/5">
  <div class="max-w-4xl mx-auto">
    <h3 class="text-3xl font-medium tracking-tight text-white mb-12">Professional Experience</h3>
    <div class="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
      ${items}
    </div>
  </div>
</section>`;
}
