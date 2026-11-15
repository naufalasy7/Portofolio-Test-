export interface NavLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  icon: string;
  title: string;
  items: string[];
  /** Kelas grid tambahan (opsional) */
  className: string;
}

export interface Project {
  number: string;
  title: string;
  /** Boleh berisi HTML inline (mis. <span> untuk highlight) */
  description: string;
  tags: string[];
  gradient: string;
  image: string;
  imageAlt: string;
  imageOpacity: string;
}

export interface ExperienceItem {
  title: string;
  period: string;
  description: string;
}

export interface BannerSlide {
  src: string;
  alt: string;
  position: string;
}

export interface Achievement {
  emoji: string;
  emojiColor: string;
  title: string;
  organizer: string;
}

export interface Certification {
  issuer: string;
  title: string;
  fullWidth: boolean;
}

export interface EducationItem {
  school: string;
  program: string;
}

export interface Contact {
  label: string;
  value: string;
  href: string;
  icon: string;
  hoverBg: string;
  hoverText: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export type Theme = 'light' | 'dark';
