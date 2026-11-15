import { formalEducation, nonFormalEducation } from '../data/education';
import { certifications } from '../data/certifications';

export function renderEducation(): string {
  const formal = formalEducation
    .map(
      (e) => `
        <div class="p-5 border-l-2 border-white/20 pl-6 bg-[#060b19] rounded-r-xl">
          <h4 class="text-base font-medium text-white">${e.school}</h4>
          <p class="text-sm text-slate-400">${e.program}</p>
        </div>`,
    )
    .join('\n');

  const certs = certifications
    .map(
      (c) => `
        <div class="p-5 rounded-xl border border-white/5 bg-[#060b19] hover-card flex flex-col justify-center${c.fullWidth ? ' sm:col-span-2' : ''}">
          <div class="text-[10px] text-slate-500 uppercase tracking-wider mb-2">${c.issuer}</div>
          <h5 class="text-sm font-medium text-white">${c.title}</h5>
        </div>`,
    )
    .join('\n');

  const nf = nonFormalEducation;

  return `
<section class="py-24 px-6 border-t border-white/5 bg-[#030816]">
  <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

    <div>
      <h3 class="text-2xl font-medium tracking-tight text-white mb-8 flex items-center gap-3">
        <iconify-icon icon="solar:diploma-linear" stroke-width="1.5"></iconify-icon>
        Education Matrix
      </h3>
      <div class="space-y-8">
        <div>
          <h4 class="text-[10px] font-medium text-slate-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">Formal Education</h4>
          <div class="space-y-4">${formal}</div>
        </div>
        <div>
          <h4 class="text-[10px] font-medium text-slate-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">Non-Formal Education</h4>
          <div class="p-5 border-l-2 border-blue-500/50 pl-6 bg-[#060b19] rounded-r-xl relative overflow-hidden">
            <div class="absolute inset-0 bg-blue-500/5 mix-blend-overlay"></div>
            <h4 class="text-base font-medium text-white relative z-10">${nf.school}</h4>
            <p class="text-sm font-medium text-blue-400 mb-2 relative z-10">${nf.program}</p>
            <p class="text-xs text-slate-400 leading-relaxed relative z-10">${nf.description}</p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-2xl font-medium tracking-tight text-white mb-8 flex items-center gap-3">
        <iconify-icon icon="solar:verified-check-linear" stroke-width="1.5"></iconify-icon>
        Professional Certifications
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${certs}</div>
    </div>

  </div>
</section>`;
}
