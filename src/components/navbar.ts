import { navLinks } from '../data/navigation';
import { profile } from '../data/profile';

export function renderNavbar(): string {
  const links = navLinks
    .map((l) => `<a href="${l.href}" class="hover:text-white transition-colors">${l.label}</a>`)
    .join('\n');

  return `
<nav class="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
  <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="#" class="text-white font-medium tracking-tight text-lg flex items-center gap-2">
      <iconify-icon icon="solar:cpu-bolt-linear" stroke-width="1.5"></iconify-icon>
      ${profile.navName}
    </a>
    <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
      ${links}
      <button id="themeToggle" aria-label="Toggle theme" title="Toggle light/dark mode">
        <iconify-icon id="themeIcon" icon="solar:moon-linear" stroke-width="1.5"></iconify-icon>
      </button>
    </div>
    <button id="themeToggleMobile" aria-label="Toggle theme" class="md:hidden w-9 h-9 rounded-full border flex items-center justify-center" style="border-color:var(--border-subtle);background:var(--skill-pill-bg);color:var(--text-secondary);">
      <iconify-icon id="themeIconMobile" icon="solar:moon-linear" stroke-width="1.5" style="font-size:1.1rem;"></iconify-icon>
    </button>
  </div>
</nav>`;
}
