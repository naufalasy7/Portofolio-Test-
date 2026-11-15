import { projects } from '../data/projects';

export function renderProjects(): string {
  const cards = projects
    .map(
      (p) => `
    <div class="project-card">
      <div class="w-full h-full bg-[#111827] border border-white/10 rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl">
        <div class="p-10 md:p-16 flex flex-col justify-center">
          <div class="text-xs font-mono text-blue-400 mb-4 tracking-widest">${p.number}</div>
          <h3 class="text-3xl tracking-tight font-medium mb-4">${p.title}</h3>
          <p class="text-sm font-light text-slate-400 leading-relaxed mb-8">
            ${p.description}
          </p>
          <div class="flex flex-wrap gap-2 mt-auto">
            ${p.tags.map((t) => `<span class="text-xs border border-white/20 rounded-full px-4 py-1.5">${t}</span>`).join('\n')}
          </div>
        </div>
        <div class="hidden md:block bg-slate-800 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br ${p.gradient} mix-blend-overlay"></div>
          <img src="${p.image}" alt="${p.imageAlt}" class="w-full h-full object-cover ${p.imageOpacity}">
        </div>
      </div>
    </div>`,
    )
    .join('\n');

  return `
<section id="projects" class="py-24 bg-[#0a0f1d] text-white">
  <div class="max-w-7xl mx-auto px-6 md:px-20 mb-16">
    <div class="flex items-center gap-3 mb-4">
      <div class="h-[1px] w-8 bg-white/30"></div>
      <span class="text-xs uppercase tracking-widest text-white/50">Selected Works</span>
    </div>
    <h2 class="text-4xl md:text-6xl tracking-tight font-medium">Featured Projects</h2>
  </div>
  <div class="stack-container max-w-7xl mx-auto px-6 md:px-20">
    ${cards}
  </div>
</section>`;
}
