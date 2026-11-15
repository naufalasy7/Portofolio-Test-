import { contacts } from '../data/contacts';
import { socials } from '../data/socials';
import { profile } from '../data/profile';

export function renderFooter(): string {
  const cards = contacts
    .map(
      (c) => `
    <a href="${c.href}" target="_blank" rel="noopener noreferrer"
       class="p-6 rounded-2xl border border-white/5 bg-[#060b19] hover-card flex flex-col items-center text-center group transition-all">
      <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 ${c.hoverBg} transition-colors">
        <iconify-icon icon="${c.icon}" class="text-xl text-white ${c.hoverText}"></iconify-icon>
      </div>
      <h5 class="text-sm font-medium text-white mb-1">${c.label}</h5>
      <p class="text-xs text-slate-500">${c.value}</p>
    </a>`,
    )
    .join('\n');

  const socialRow = socials
    .map(
      (s) => `
      <a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}" title="${s.label}"
         class="social-link w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white">
        <iconify-icon icon="${s.icon}" style="font-size:1.1rem;"></iconify-icon>
      </a>`,
    )
    .join('\n');

  return `
<footer id="contact" class="py-24 px-6 border-t border-white/5 bg-[#020617]">
  <div class="max-w-4xl mx-auto text-center mb-16">
    <h2 class="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
      Let's Build Something <br> Impactful Together.
    </h2>
    <p class="text-sm text-slate-400">
      Hubungi saya untuk diskusi arsitektur teknis, kolaborasi proyek engineer, atau peluang profesional terapan.
    </p>
  </div>

  <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
    ${cards}
  </div>

  <div class="max-w-4xl mx-auto mt-24 text-center border-t border-white/5 pt-8">
    <p class="text-xs text-slate-600">${profile.copyright}</p>

    <!-- Barisan sosial media paling bawah: Instagram, LinkedIn, GitHub -->
    <div class="mt-6 flex items-center justify-center gap-3">
      ${socialRow}
    </div>
  </div>
</footer>`;
}
