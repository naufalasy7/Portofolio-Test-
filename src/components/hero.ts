import { profile } from '../data/profile';

export function renderHero(): string {
  return `
<section class="relative min-h-[90vh] flex items-center justify-center pt-20 px-6 overflow-hidden">
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

  <div class="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
    <div class="mb-8 p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
      <img src="${profile.avatar}" alt="${profile.name}" class="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover">
    </div>

    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-slate-300 mb-8">
      <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
      ${profile.status}
    </div>

    <h1 class="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight mb-6">
      Engineering <br class="hidden md:block">
      <span class="text-slate-500">Intelligent Systems.</span>
    </h1>

    <h2 class="text-lg md:text-xl font-medium text-slate-200 tracking-tight mb-6">
      ${profile.title}
    </h2>

    <p class="text-base text-slate-400 max-w-2xl leading-relaxed">
      ${profile.summary}
    </p>

    <div class="mt-10 flex flex-wrap justify-center gap-4">
      <a href="#projects" class="px-6 py-3 bg-white text-slate-950 font-medium text-sm rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
        View Projects
        <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5"></iconify-icon>
      </a>
      <a href="#contact" class="px-6 py-3 border border-white/10 bg-white/5 text-white font-medium text-sm rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
        Contact Me
      </a>
    </div>
  </div>
</section>`;
}
