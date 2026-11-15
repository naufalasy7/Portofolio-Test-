import 'iconify-icon';
import './styles/main.css';

import { renderNavbar } from './components/navbar';
import { renderHero } from './components/hero';
import { renderAbout } from './components/about';
import { renderSkills } from './components/skills';
import { renderProjects } from './components/projects';
import { renderExperience } from './components/experience';
import { renderBanner } from './components/banner';
import { renderAchievements } from './components/achievements';
import { renderEducation } from './components/education';
import { renderFooter } from './components/footer';

import { applySavedTheme, initThemeToggle } from './scripts/theme';
import { initBannerSlider } from './scripts/slider';

applySavedTheme();

const app = document.getElementById('app');
if (!app) throw new Error('Elemen #app tidak ditemukan');

app.innerHTML = `
${renderNavbar()}
<main class="w-full">
  ${renderHero()}
  ${renderAbout()}
  ${renderSkills()}
  ${renderProjects()}
  ${renderExperience()}
  ${renderBanner()}
  ${renderAchievements()}
  ${renderEducation()}
</main>
${renderFooter()}
`;

initThemeToggle();
initBannerSlider();
