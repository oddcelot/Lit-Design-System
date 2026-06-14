import React from 'react';

/**
 * Lucide-style stroke icon set (24×24 grid, 2px stroke, round caps/joins).
 * Mirrors the lightweight outline aesthetic of the Vite / Vue DevTools.
 * The lit.dev marketing site itself uses Material Symbols (outlined) — see
 * ICONOGRAPHY in the README — but the DevTools surface is a stroke set.
 */
const PATHS = {
  // ---- DevTools rail ----
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  components: '<path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  tree: '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="6" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h3a2 2 0 0 1 2 2v0"/><path d="M14 18h-2a2 2 0 0 1-2-2V9"/>',
  assets: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
  route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
  timeline: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  graph: '<circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M7 7.5 10.5 16"/><path d="m17 7.5-3.5 8.5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  inspect: '<path d="M5 3v16a2 2 0 0 0 2 2h12"/><path d="M5 3h0"/><circle cx="13" cy="13" r="0"/><path d="m9 9 11 4-4.5 1.5L14 20Z"/>',
  settings: '<line x1="4" y1="7" x2="20" y2="7"/><circle cx="9" cy="7" r="2.4" fill="var(--rail-fill,transparent)"/><line x1="4" y1="17" x2="20" y2="17"/><circle cx="15" cy="17" r="2.4" fill="var(--rail-fill,transparent)"/>',

  // ---- Actions / chrome ----
  close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'chevron-right': '<path d="m9 6 6 6-6 6"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  'external-link': '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.5"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4-2v-4Z"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  split: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16"/>',
  star: '<path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.2l5.9-.9Z"/>',
  bulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z"/>',
  map: '<path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14"/><path d="M15 6v14"/>',
  bug: '<path d="M8 9V6a4 4 0 0 1 8 0v3"/><rect x="6" y="9" width="12" height="10" rx="6"/><path d="M3 13h3M18 13h3M4 8l2 1M20 8l-2 1M4 18l2-1M20 18l-2-1M12 9v10"/>',
  command: '<path d="M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3Z"/>',
  zap: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  terminal: '<path d="m5 8 4 4-4 4"/><path d="M12 16h7"/>',
  github: '<path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 5v-3.5a3 3 0 0 0-.9-2.5c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.2 1.7 5.1 2 5.1 2a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 3.5 9c0 5 3 6.2 6 6.5a3 3 0 0 0-.9 2.5V21"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
  package: '<path d="m12 2 9 5v10l-9 5-9-5V7Z"/><path d="m12 12 9-5M12 12v10M12 12 3 7"/>',
  link: '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
};

export function Icon({ name, size = 18, strokeWidth = 2, className = '', style = {}, title, ...rest }) {
  const inner = PATHS[name];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: 'block', flexShrink: 0, ...style }}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {inner ? <g dangerouslySetInnerHTML={{ __html: inner }} /> : null}
    </svg>
  );
}

export const ICON_NAMES = Object.keys(PATHS);
