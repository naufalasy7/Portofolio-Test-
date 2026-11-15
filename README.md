# Naufal Asyam — Portfolio (TypeScript + Vite + Tailwind)

## Menjalankan
```bash
npm install
npm run dev      # development
npm run build    # type-check + build ke /dist
npm run preview  # preview hasil build
```

## Struktur
```
src/
├── main.ts            # entry: render semua section + init script
├── types/             # interface TypeScript
├── data/              # konten (profile, skills, projects, experience, socials, dst.)
├── components/        # fungsi render tiap section
├── scripts/           # theme toggle & banner slider
└── styles/main.css    # Tailwind + CSS kustom (dark/light mode)
```
Ubah konten cukup di folder `src/data/`.
