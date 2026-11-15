import type { Theme } from '../types';

const STORAGE_KEY = 'theme';
const html = document.documentElement;

function readSaved(): Theme {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

function isLight(): boolean {
  return html.classList.contains('light');
}

function updateIcons(): void {
  const icon = isLight() ? 'solar:sun-linear' : 'solar:moon-linear';
  ['themeIcon', 'themeIconMobile'].forEach((id) => {
    document.getElementById(id)?.setAttribute('icon', icon);
  });
}

function toggle(): void {
  html.classList.toggle('light');
  try {
    localStorage.setItem(STORAGE_KEY, isLight() ? 'light' : 'dark');
  } catch {
    /* storage tidak tersedia */
  }
  updateIcons();
}

/** Terapkan tema tersimpan sedini mungkin (sebelum render) agar tidak berkedip. */
export function applySavedTheme(): void {
  if (readSaved() === 'light') html.classList.add('light');
}

/** Pasang event listener tombol toggle (panggil setelah DOM dirender). */
export function initThemeToggle(): void {
  updateIcons();
  document.getElementById('themeToggle')?.addEventListener('click', toggle);
  document.getElementById('themeToggleMobile')?.addEventListener('click', toggle);
}
