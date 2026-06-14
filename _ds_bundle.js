/* @ds-bundle: {"format":3,"namespace":"LitDesignSystem_5536fe","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SegmentedTabs","sourcePath":"components/devtools/SegmentedTabs.jsx"},{"name":"StatCard","sourcePath":"components/devtools/StatCard.jsx"},{"name":"StateRow","sourcePath":"components/devtools/StateRow.jsx"},{"name":"TreeNode","sourcePath":"components/devtools/TreeNode.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"cab1b8600fa7","components/core/Button.jsx":"e2eb8b44d1ab","components/core/Card.jsx":"d5b2a56739a8","components/core/Icon.jsx":"eeb3b6366c22","components/core/IconButton.jsx":"19d35217ecc7","components/devtools/SegmentedTabs.jsx":"dc4bd08e3d0f","components/devtools/StatCard.jsx":"0d8b391cc3ec","components/devtools/StateRow.jsx":"2721c56e23da","components/devtools/TreeNode.jsx":"c334ddb1c91e","components/forms/Input.jsx":"c7508f67edcc","components/forms/Switch.jsx":"32398556221a","ui_kits/devtools/DevToolsShell.jsx":"daac2c726d58","ui_kits/devtools/ElementsScreen.jsx":"5a49a24a8e6d","ui_kits/devtools/OverviewScreen.jsx":"676d8185f89c","ui_kits/devtools/RoutesScreen.jsx":"74bcac5aa5e5","ui_kits/devtools/SettingsScreen.jsx":"2376802d6ddc","ui_kits/devtools/TimelineScreen.jsx":"98810d25d836","ui_kits/devtools/data.js":"fde1d0783a01"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LitDesignSystem_5536fe = window.LitDesignSystem_5536fe || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — compact status / count pill. Tones map to the semantic palette.
 * Use `dot` for a leading status dot; `mono` for code-ish values.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  mono = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      bg: 'var(--surface-container-high)',
      fg: 'var(--text-secondary)'
    },
    accent: {
      bg: 'var(--accent-soft)',
      fg: 'var(--accent)'
    },
    cyan: {
      bg: 'hsl(187 100% 47% / 0.16)',
      fg: 'var(--accent-cyan)'
    },
    success: {
      bg: 'var(--success-soft)',
      fg: 'var(--success)'
    },
    warning: {
      bg: 'var(--warning-soft)',
      fg: 'var(--warning)'
    },
    error: {
      bg: 'var(--error-soft)',
      fg: 'var(--error)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `lit-badge lit-badge--${tone}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: 20,
      padding: '0 8px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      font: `var(--weight-semibold) var(--text-2xs)/1 ${mono ? 'var(--font-mono)' : 'var(--font-sans)'}`,
      letterSpacing: mono ? 0 : 'var(--tracking-wide)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.fg,
      flexShrink: 0
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — generic surface container with optional header. Use for panels,
 * setting groups, and content blocks. `interactive` adds hover affordance.
 */
function Card({
  children,
  title,
  subtitle,
  actions,
  padding = 'md',
  interactive = false,
  style = {},
  bodyStyle = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--space-5)',
    md: 'var(--space-7)',
    lg: 'var(--space-9)'
  };
  const pad = pads[padding] ?? pads.md;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "lit-card",
    style: {
      background: 'var(--surface-container)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      transition: interactive ? 'border-color var(--dur-fast) var(--ease-standard), background var(--dur-fast)' : undefined,
      cursor: interactive ? 'pointer' : undefined,
      ...style
    }
  }, rest), (title || actions) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      padding: '12px 16px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)',
      color: 'var(--text)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      font: 'var(--weight-regular) var(--text-xs)/1.4 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, subtitle)), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexShrink: 0
    }
  }, actions) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad,
      ...bodyStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  link: '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>'
};
function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  className = '',
  style = {},
  title,
  ...rest
}) {
  const inner = PATHS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    "aria-hidden": title ? undefined : true,
    role: title ? 'img' : undefined
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, inner ? /*#__PURE__*/React.createElement("g", {
    dangerouslySetInnerHTML: {
      __html: inner
    }
  }) : null);
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action control for the Lit system.
 * Variants: primary (flame blue), secondary (outlined), ghost, danger.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  disabled = false,
  full = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 28,
      padding: '0 10px',
      font: 'var(--text-xs)',
      gap: 6,
      icon: 15
    },
    md: {
      height: 34,
      padding: '0 14px',
      font: 'var(--text-sm)',
      gap: 7,
      icon: 17
    },
    lg: {
      height: 42,
      padding: '0 20px',
      font: 'var(--text-md)',
      gap: 8,
      icon: 19
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--error-soft)',
      color: 'var(--error)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    className: `lit-btn lit-btn--${variant}`,
    style: {
      display: full ? 'flex' : 'inline-flex',
      width: full ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      font: `var(--weight-semibold) ${s.font}/1 var(--font-sans)`,
      letterSpacing: 'var(--tracking-snug)',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      whiteSpace: 'nowrap',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast), transform var(--dur-instant)',
      ...v,
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square, icon-only control. Used heavily in the DevTools
 * rail, panel headers, and toolbars. Set `active` for the selected rail tab.
 */
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  active = false,
  label,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 26,
    md: 32,
    lg: 40
  };
  const box = sizes[size] || sizes.md;
  const iconSize = Math.round(box * 0.56);
  const base = {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid transparent'
  };
  const variants = {
    ghost: base,
    solid: {
      background: 'var(--surface-container-high)',
      color: 'var(--text)',
      border: '1px solid var(--border)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      border: '1px solid transparent'
    }
  };
  const v = active ? {
    background: 'var(--accent-soft)',
    color: 'var(--accent)',
    border: '1px solid transparent'
  } : variants[variant] || base;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    className: `lit-iconbtn${active ? ' is-active' : ''}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: box,
      height: box,
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast)',
      ...v,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/devtools/SegmentedTabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SegmentedTabs — inline segmented control for switching panels/views.
 * `items` is [{ id, label }], controlled via `value` + `onChange(id)`.
 */
function SegmentedTabs({
  items = [],
  value,
  onChange,
  size = 'md',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      h: 26,
      font: 'var(--text-xs)',
      pad: '0 10px'
    },
    md: {
      h: 32,
      font: 'var(--text-sm)',
      pad: '0 14px'
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "lit-segtabs",
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 2,
      padding: 3,
      background: 'var(--surface-low)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, rest), items.map(it => {
    const active = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(it.id),
      style: {
        height: s.h,
        padding: s.pad,
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        background: active ? 'var(--surface-elevated)' : 'transparent',
        color: active ? 'var(--text-strong)' : 'var(--text-secondary)',
        boxShadow: active ? 'var(--shadow-xs)' : 'none',
        font: `var(--weight-semibold) ${s.font}/1 var(--font-sans)`,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { SegmentedTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/devtools/SegmentedTabs.jsx", error: String((e && e.message) || e) }); }

// components/devtools/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCard — the large overview tiles on the DevTools home screen
 * (Lit version · pages · custom elements). Icon on top, value, label.
 */
function StatCard({
  icon,
  value,
  label,
  accent = false,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    className: "lit-statcard",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-5)',
      padding: '28px 24px',
      background: 'var(--surface-container)',
      border: `1px solid ${accent ? 'var(--accent-soft)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-lg)',
      cursor: onClick ? 'pointer' : 'default',
      textAlign: 'center',
      transition: 'border-color var(--dur-fast) var(--ease-standard), background var(--dur-fast)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 30,
    strokeWidth: 1.75,
    style: {
      color: accent ? 'var(--accent)' : 'var(--text-secondary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-extrabold) var(--text-2xl)/1 var(--font-sans)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-medium) var(--text-sm)/1 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/devtools/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/devtools/StateRow.jsx
try { (() => {
const COLORS = {
  string: 'var(--code-string)',
  number: 'var(--code-number)',
  boolean: 'var(--code-keyword)',
  ref: 'var(--code-tag)',
  object: 'var(--text-secondary)',
  function: 'var(--code-callee)',
  null: 'var(--text-muted)'
};
function renderValue(value, type) {
  const t = type || (typeof value === 'number' ? 'number' : typeof value === 'boolean' ? 'boolean' : 'string');
  let text = value;
  if (t === 'string') text = `"${value}"`;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: COLORS[t] || 'var(--text)',
      fontWeight: 'var(--weight-medium)'
    }
  }, text);
}

/**
 * StateRow — one key : value line in the state inspector. Auto-colors the
 * value by `type`. For objects/reactives set `expandable` and nest StateRows
 * as children.
 */
function StateRow({
  name,
  value,
  type = 'string',
  depth = 0,
  expandable = false,
  expanded = false,
  badge,
  onToggle,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => expandable && onToggle && onToggle(),
    className: "lit-staterow",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      minHeight: 24,
      paddingRight: 10,
      paddingLeft: 6 + depth * 16,
      borderRadius: 'var(--radius-xs)',
      cursor: expandable ? 'pointer' : 'default',
      font: 'var(--weight-regular) var(--text-sm)/1.5 var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 14,
      height: 14,
      flexShrink: 0,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: expandable ? 0.7 : 0,
      transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)',
      transition: 'transform var(--dur-fast) var(--ease-standard)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 12
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--code-property)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      margin: '0 2px'
    }
  }, ":"), expandable ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, value, badge != null ? null : '') : renderValue(value, type), badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      font: 'var(--weight-semibold) var(--text-2xs)/1 var(--font-sans)',
      color: 'var(--accent-cyan)'
    }
  }, badge)), expandable && expanded ? children : null);
}
Object.assign(__ds_scope, { StateRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/devtools/StateRow.jsx", error: String((e && e.message) || e) }); }

// components/devtools/TreeNode.jsx
try { (() => {
/**
 * TreeNode — one row in the custom-element / component tree. Renders an
 * angle-bracket tag label like `<my-element>`. Handles indentation,
 * the expand chevron, selection highlight, and nested children.
 */
function TreeNode({
  tag,
  depth = 0,
  expandable = false,
  expanded = false,
  selected = false,
  badge,
  onToggle,
  onSelect,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    role: "treeitem",
    "aria-selected": selected,
    "aria-expanded": expandable ? expanded : undefined,
    onClick: () => onSelect && onSelect(),
    className: `lit-treenode${selected ? ' is-selected' : ''}`,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      height: 26,
      paddingRight: 10,
      paddingLeft: 8 + depth * 16,
      borderRadius: 'var(--radius-sm)',
      background: selected ? 'var(--accent)' : 'transparent',
      color: selected ? 'var(--on-accent)' : 'var(--text)',
      cursor: 'pointer',
      userSelect: 'none',
      transition: 'background var(--dur-instant) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      expandable && onToggle && onToggle();
    },
    style: {
      display: 'inline-flex',
      width: 16,
      height: 16,
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      opacity: expandable ? 1 : 0,
      transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)',
      transition: 'transform var(--dur-fast) var(--ease-standard)',
      color: 'currentColor'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--text-sm)/1 var(--font-mono)',
      whiteSpace: 'nowrap',
      color: selected ? 'var(--on-accent)' : 'var(--code-tag)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.55
    }
  }, "<"), tag, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.55
    }
  }, ">")), badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--weight-semibold) var(--text-2xs)/1 var(--font-mono)',
      color: selected ? 'var(--on-accent)' : 'var(--text-muted)',
      opacity: selected ? 0.8 : 1
    }
  }, badge)), expandable && expanded ? children : null);
}
Object.assign(__ds_scope, { TreeNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/devtools/TreeNode.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field. Pass `icon` for a leading glyph (e.g. the
 * "Find components…" / "Filter state…" search fields in the DevTools).
 */
function Input({
  icon,
  size = 'md',
  full = true,
  invalid = false,
  trailing,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 28,
      font: 'var(--text-xs)',
      pad: 8,
      icon: 15
    },
    md: {
      height: 34,
      font: 'var(--text-sm)',
      pad: 10,
      icon: 16
    },
    lg: {
      height: 40,
      font: 'var(--text-md)',
      pad: 12,
      icon: 18
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("div", {
    className: "lit-input",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      width: full ? '100%' : undefined,
      height: s.height,
      padding: `0 ${s.pad}px`,
      background: 'var(--surface-low)',
      border: `1px solid ${invalid ? 'var(--error)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-md)',
      color: 'var(--text)',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast)',
      ...wrapStyle
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon,
    style: {
      color: 'var(--text-muted)'
    }
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'inherit',
      font: `var(--weight-medium) ${s.font}/1 var(--font-sans)`,
      ...style
    }
  }, rest)), trailing ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      color: 'var(--text-muted)'
    }
  }, trailing) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — boolean toggle. Controlled via `checked` + `onChange(next)`.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      w: 30,
      h: 18,
      k: 12
    },
    md: {
      w: 38,
      h: 22,
      k: 16
    }
  };
  const s = sizes[size] || sizes.md;
  const pad = (s.h - s.k) / 2;
  const toggle = /*#__PURE__*/React.createElement("span", _extends({
    role: "switch",
    "aria-checked": checked,
    "aria-disabled": disabled || undefined,
    tabIndex: disabled ? -1 : 0,
    onClick: () => !disabled && onChange && onChange(!checked),
    onKeyDown: e => {
      if (disabled) return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        onChange && onChange(!checked);
      }
    },
    className: `lit-switch${checked ? ' is-on' : ''}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      width: s.w,
      height: s.h,
      flexShrink: 0,
      padding: pad,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent)' : 'var(--surface-elevated)',
      border: `1px solid ${checked ? 'transparent' : 'var(--border-strong)'}`,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.k,
      height: s.k,
      borderRadius: '50%',
      background: checked ? 'var(--on-accent)' : 'var(--text-secondary)',
      transform: `translateX(${checked ? s.w - s.k - pad * 2 : 0}px)`,
      transition: 'transform var(--dur-fast) var(--ease-emphasized), background var(--dur-fast)'
    }
  }));
  if (!label) return toggle;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, toggle, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--text-sm)/1 var(--font-sans)',
      color: 'var(--text)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/devtools/DevToolsShell.jsx
try { (() => {
// DevTools window shell — rail + content router + floating pill
const {
  IconButton: SH_IconButton,
  Icon: SH_Icon
} = window.LitDesignSystem_5536fe;
const RAIL_TOP = [{
  id: 'overview',
  icon: 'info',
  label: 'Overview'
}, {
  id: 'elements',
  icon: 'components',
  label: 'Elements'
}, {
  id: 'tree',
  icon: 'tree',
  label: 'Render tree'
}, {
  id: 'assets',
  icon: 'assets',
  label: 'Assets'
}, {
  id: 'routes',
  icon: 'route',
  label: 'Pages'
}, {
  id: 'timeline',
  icon: 'timeline',
  label: 'Timeline'
}, {
  id: 'graph',
  icon: 'graph',
  label: 'Graph'
}, {
  id: 'inspect',
  icon: 'search',
  label: 'Inspect'
}];
function EmptyState({
  icon,
  title,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      color: 'var(--text-muted)',
      textAlign: 'center',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement(SH_Icon, {
    name: icon,
    size: 44,
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-bold) var(--text-lg)/1 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-regular) var(--text-sm)/1.5 var(--font-sans)',
      maxWidth: 320
    }
  }, desc));
}
function DevToolsShell() {
  const data = window.LIT_DEMO;
  const [tab, setTab] = React.useState('overview');
  const [theme, setTheme] = React.useState('theme-dark');
  let content;
  if (tab === 'overview') content = /*#__PURE__*/React.createElement(OverviewScreen, {
    data: data,
    onNavigate: setTab
  });else if (tab === 'elements' || tab === 'tree') content = /*#__PURE__*/React.createElement(ElementsScreen, {
    data: data
  });else if (tab === 'routes') content = /*#__PURE__*/React.createElement(RoutesScreen, {
    data: data
  });else if (tab === 'timeline') content = /*#__PURE__*/React.createElement(TimelineScreen, {
    data: data
  });else if (tab === 'settings') content = /*#__PURE__*/React.createElement(SettingsScreen, {
    theme: theme,
    setTheme: setTheme
  });else if (tab === 'assets') content = /*#__PURE__*/React.createElement(EmptyState, {
    icon: "assets",
    title: "Assets",
    desc: "Browse project files served by Vite. Pick a file to preview it with quick actions."
  });else if (tab === 'graph') content = /*#__PURE__*/React.createElement(EmptyState, {
    icon: "graph",
    title: "Module graph",
    desc: "Visualise the import relationships between your modules and custom elements."
  });else content = /*#__PURE__*/React.createElement(EmptyState, {
    icon: "search",
    title: "Inspect",
    desc: "Step through Vite's transform pipeline for any module in your app."
  });
  const railBtn = t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    title: t.label,
    "aria-label": t.label,
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      border: 'none',
      cursor: 'pointer',
      background: tab === t.id ? 'var(--accent-soft)' : 'transparent',
      color: tab === t.id ? 'var(--accent)' : 'var(--text-secondary)',
      transition: 'background var(--dur-fast), color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement(SH_Icon, {
    name: t.icon,
    size: 21,
    strokeWidth: 1.9
  }), tab === t.id && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -8,
      top: 11,
      width: 3,
      height: 18,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--accent)'
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: theme,
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg)',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-window)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 'var(--rail-width)',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      padding: '12px 0',
      borderRight: '1px solid var(--border-subtle)',
      background: 'var(--surface-low)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab('overview'),
    title: "Lit DevTools",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 4,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/flame.svg",
    width: "26",
    alt: "Lit"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 1,
      background: 'var(--border)',
      margin: '2px 0 8px'
    }
  }), RAIL_TOP.map(railBtn), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }), railBtn({
    id: 'settings',
    icon: 'settings',
    label: 'Settings'
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      background: 'var(--surface)',
      position: 'relative'
    }
  }, content)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/flame.svg",
    width: "16",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: 'var(--border)'
    }
  }), /*#__PURE__*/React.createElement(SH_Icon, {
    name: "target",
    size: 16,
    style: {
      color: 'var(--accent-cyan)'
    }
  })));
}
window.DevToolsShell = DevToolsShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/devtools/DevToolsShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/devtools/ElementsScreen.jsx
try { (() => {
// Elements inspector — component tree + state panel
const {
  Input: EL_Input,
  TreeNode: EL_TreeNode,
  StateRow: EL_StateRow,
  IconButton: EL_IconButton,
  Badge: EL_Badge,
  Icon: EL_Icon
} = window.LitDesignSystem_5536fe;
function flattenSelectable(nodes, acc = []) {
  nodes.forEach(n => {
    acc.push(n);
    if (n.children) flattenSelectable(n.children, acc);
  });
  return acc;
}
function ElTree({
  nodes,
  expanded,
  selected,
  onToggle,
  onSelect
}) {
  return nodes.map(n => /*#__PURE__*/React.createElement(EL_TreeNode, {
    key: n.id,
    tag: n.tag,
    depth: n.depth,
    expandable: !!n.expandable,
    expanded: expanded[n.id] !== false,
    selected: selected === n.id,
    badge: n.count != null ? n.count : undefined,
    onToggle: () => onToggle(n.id),
    onSelect: () => onSelect(n.id)
  }, n.children ? /*#__PURE__*/React.createElement(ElTree, {
    nodes: n.children,
    expanded: expanded,
    selected: selected,
    onToggle: onToggle,
    onSelect: onSelect
  }) : null));
}
const SECTION_META = {
  props: {
    label: 'reactive properties',
    badge: '@property',
    tone: 'accent'
  },
  internal: {
    label: 'internal state',
    badge: '@state',
    tone: 'cyan'
  },
  attributes: {
    label: 'attributes',
    badge: null,
    tone: 'neutral'
  },
  events: {
    label: 'events',
    badge: null,
    tone: 'neutral'
  }
};
function StateSection({
  id,
  rows,
  openSections,
  toggleSection
}) {
  const meta = SECTION_META[id];
  const open = openSections[id] !== false;
  if (!rows || !rows.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => toggleSection(id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 6px',
      cursor: 'pointer',
      font: 'var(--weight-bold) var(--text-xs)/1 var(--font-sans)',
      color: 'var(--text)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      transform: open ? 'rotate(0)' : 'rotate(-90deg)',
      transition: 'transform var(--dur-fast) var(--ease-standard)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(EL_Icon, {
    name: "chevron-down",
    size: 13
  })), meta.label, meta.badge && /*#__PURE__*/React.createElement(EL_Badge, {
    tone: meta.tone
  }, meta.badge)), open && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 2
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement(EL_StateRow, {
    key: i,
    name: r.name,
    value: r.value,
    type: r.type,
    depth: 1,
    badge: r.type === 'ref' ? '⚡' : undefined
  }))));
}
function ElementsScreen({
  data
}) {
  const [expanded, setExpanded] = React.useState({});
  const [selected, setSelected] = React.useState('item2');
  const [openSections, setOpenSections] = React.useState({});
  const [filter, setFilter] = React.useState('');
  const toggle = id => setExpanded(e => ({
    ...e,
    [id]: e[id] === false ? true : false
  }));
  const toggleSection = id => setOpenSections(s => ({
    ...s,
    [id]: s[id] === false ? true : false
  }));
  const all = flattenSelectable(data.tree);
  const selNode = all.find(n => n.id === selected) || all[0];
  const st = data.state[selected] || data.state.item2;
  const filtered = rows => !filter ? rows : rows.filter(r => r.name.toLowerCase().includes(filter.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      borderRight: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '12px 14px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(EL_Input, {
    icon: "search",
    placeholder: "Find components\u2026"
  }), /*#__PURE__*/React.createElement(EL_IconButton, {
    icon: "target",
    label: "Select element in page",
    variant: "ghost"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '0 8px 8px'
    }
  }, /*#__PURE__*/React.createElement(ElTree, {
    nodes: data.tree,
    expanded: expanded,
    selected: selected,
    onToggle: toggle,
    onSelect: setSelected
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '12px 14px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--text-sm)/1 var(--font-mono)',
      color: 'var(--code-tag)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.55
    }
  }, "<"), selNode.tag, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.55
    }
  }, ">")), /*#__PURE__*/React.createElement(EL_Input, {
    icon: "filter",
    placeholder: "Filter state\u2026",
    value: filter,
    onChange: e => setFilter(e.target.value)
  }), /*#__PURE__*/React.createElement(EL_IconButton, {
    icon: "eye",
    label: "Inspect in console"
  }), /*#__PURE__*/React.createElement(EL_IconButton, {
    icon: "code",
    label: "View source"
  }), /*#__PURE__*/React.createElement(EL_IconButton, {
    icon: "external-link",
    label: "Open in new window"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '4px 14px 14px'
    }
  }, /*#__PURE__*/React.createElement(StateSection, {
    id: "props",
    rows: filtered(st.props),
    openSections: openSections,
    toggleSection: toggleSection
  }), /*#__PURE__*/React.createElement(StateSection, {
    id: "internal",
    rows: filtered(st.internal),
    openSections: openSections,
    toggleSection: toggleSection
  }), /*#__PURE__*/React.createElement(StateSection, {
    id: "attributes",
    rows: filtered(st.attributes),
    openSections: openSections,
    toggleSection: toggleSection
  }), /*#__PURE__*/React.createElement(StateSection, {
    id: "events",
    rows: filtered(st.events),
    openSections: openSections,
    toggleSection: toggleSection
  }))));
}
window.ElementsScreen = ElementsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/devtools/ElementsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/devtools/OverviewScreen.jsx
try { (() => {
// Overview / home dashboard
const {
  StatCard: OV_StatCard,
  Icon: OV_Icon
} = window.LitDesignSystem_5536fe;
function OverviewScreen({
  data,
  onNavigate
}) {
  const links = [{
    icon: 'star',
    label: 'Star on GitHub'
  }, {
    icon: 'bulb',
    label: 'Ideas & Suggestions'
  }, {
    icon: 'map',
    label: 'Project Roadmap'
  }, {
    icon: 'bug',
    label: 'Bug Reports'
  }, {
    icon: 'settings',
    label: 'Settings',
    go: 'settings'
  }];
  const kbd = txt => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '4px 9px',
      background: 'var(--surface-container-high)',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--weight-semibold) var(--text-xs)/1 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, txt);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 48px',
      gap: 0,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/flame.svg",
    height: "56",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-extrabold) var(--text-4xl)/1 var(--font-sans)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "DevTools")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-medium) var(--text-sm)/1 var(--font-mono)',
      color: 'var(--text-secondary)',
      marginBottom: 36
    }
  }, "Lit DevTools v1.0.0"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(170px, 220px))',
      gap: 16,
      width: '100%',
      maxWidth: 720,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(OV_StatCard, {
    icon: "package",
    value: 'v' + data.version,
    label: "Lit",
    accent: true,
    onClick: () => onNavigate('elements')
  }), /*#__PURE__*/React.createElement(OV_StatCard, {
    icon: "route",
    value: String(data.routes.length),
    label: "pages",
    onClick: () => onNavigate('routes')
  }), /*#__PURE__*/React.createElement(OV_StatCard, {
    icon: "components",
    value: "24",
    label: "custom elements",
    onClick: () => onNavigate('elements')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 28,
      marginBottom: 40
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.label,
    onClick: () => l.go && onNavigate(l.go),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      font: 'var(--weight-medium) var(--text-sm)/1 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(OV_Icon, {
    name: l.icon,
    size: 17
  }), " ", l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--text-muted)',
      font: 'var(--weight-medium) var(--text-sm)/1 var(--font-sans)'
    }
  }, "Press ", kbd('⌘ Command'), " + ", kbd('K'), " to toggle Command Palette"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--text-muted)',
      font: 'var(--weight-medium) var(--text-sm)/1 var(--font-sans)'
    }
  }, "Press ", kbd('⇧ Shift'), " + ", kbd('⌥ Option'), " + ", kbd('D'), " to toggle DevTools")));
}
window.OverviewScreen = OverviewScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/devtools/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/devtools/RoutesScreen.jsx
try { (() => {
// Routes / Pages tab
const {
  Input: RT_Input,
  Badge: RT_Badge,
  StateRow: RT_StateRow
} = window.LitDesignSystem_5536fe;
function RoutesScreen({
  data
}) {
  const [sel, setSel] = React.useState(0);
  const route = data.routes[sel];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      borderRight: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement(RT_Input, {
    icon: "search",
    placeholder: "/active",
    defaultValue: "/"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '0 8px 8px'
    }
  }, data.routes.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.path,
    onClick: () => setSel(i),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 34,
      padding: '0 10px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      background: sel === i ? 'var(--accent)' : 'transparent',
      color: sel === i ? 'var(--on-accent)' : 'var(--text)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--text-sm)/1 var(--font-mono)'
    }
  }, r.path), r.active && /*#__PURE__*/React.createElement(RT_Badge, {
    tone: sel === i ? 'neutral' : 'success',
    dot: true
  }, "active"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--weight-regular) var(--text-xs)/1 var(--font-sans)',
      opacity: 0.7
    }
  }, r.name))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      font: 'var(--weight-bold) var(--text-sm)/1 var(--font-sans)',
      color: 'var(--text)'
    }
  }, "Route detail"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '4px 16px 16px'
    }
  }, /*#__PURE__*/React.createElement(RT_StateRow, {
    name: "path",
    value: route.path,
    type: "string"
  }), /*#__PURE__*/React.createElement(RT_StateRow, {
    name: "name",
    value: route.name,
    type: "string"
  }), /*#__PURE__*/React.createElement(RT_StateRow, {
    name: "matched",
    value: route.matched,
    type: "ref"
  }), /*#__PURE__*/React.createElement(RT_StateRow, {
    name: "active",
    value: !!route.active,
    type: "boolean"
  }), /*#__PURE__*/React.createElement(RT_StateRow, {
    name: "params",
    value: "Object",
    expandable: true,
    expanded: true
  }, /*#__PURE__*/React.createElement(RT_StateRow, {
    name: "id",
    value: "\u2014",
    type: "null",
    depth: 1
  })))));
}
window.RoutesScreen = RoutesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/devtools/RoutesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/devtools/SettingsScreen.jsx
try { (() => {
// Settings tab
const {
  Switch: SET_Switch,
  SegmentedTabs: SET_Tabs,
  Card: SET_Card
} = window.LitDesignSystem_5536fe;
function SettingRow({
  title,
  desc,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 4px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)',
      color: 'var(--text)'
    }
  }, title), desc && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      font: 'var(--weight-regular) var(--text-xs)/1.4 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, children));
}
function SettingsScreen({
  theme,
  setTheme
}) {
  const [s, setS] = React.useState({
    highlight: true,
    byFile: false,
    expand: true,
    palette: true,
    scroll: false
  });
  const set = k => v => setS(o => ({
    ...o,
    [k]: v
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflow: 'auto',
      padding: '24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SET_Card, {
    title: "Appearance"
  }, /*#__PURE__*/React.createElement(SettingRow, {
    title: "Theme",
    desc: "Match the editor or pin a mode."
  }, /*#__PURE__*/React.createElement(SET_Tabs, {
    value: theme,
    onChange: setTheme,
    size: "sm",
    items: [{
      id: 'theme-dark',
      label: 'Dark'
    }, {
      id: 'theme-light',
      label: 'Light'
    }]
  })), /*#__PURE__*/React.createElement(SettingRow, {
    title: "Expand state by default",
    desc: "Open reactive property groups on select."
  }, /*#__PURE__*/React.createElement(SET_Switch, {
    checked: s.expand,
    onChange: set('expand')
  }))), /*#__PURE__*/React.createElement(SET_Card, {
    title: "Inspector"
  }, /*#__PURE__*/React.createElement(SettingRow, {
    title: "Highlight updates",
    desc: "Flash elements in the page when they re-render."
  }, /*#__PURE__*/React.createElement(SET_Switch, {
    checked: s.highlight,
    onChange: set('highlight')
  })), /*#__PURE__*/React.createElement(SettingRow, {
    title: "Group components by file",
    desc: "Organise the tree by source module."
  }, /*#__PURE__*/React.createElement(SET_Switch, {
    checked: s.byFile,
    onChange: set('byFile')
  })), /*#__PURE__*/React.createElement(SettingRow, {
    title: "Scroll to selected element",
    desc: "Bring the element into view on select."
  }, /*#__PURE__*/React.createElement(SET_Switch, {
    checked: s.scroll,
    onChange: set('scroll')
  }))), /*#__PURE__*/React.createElement(SET_Card, {
    title: "General"
  }, /*#__PURE__*/React.createElement(SettingRow, {
    title: "Command palette",
    desc: "Enable the \u2318K quick actions overlay."
  }, /*#__PURE__*/React.createElement(SET_Switch, {
    checked: s.palette,
    onChange: set('palette')
  })))));
}
window.SettingsScreen = SettingsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/devtools/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/devtools/TimelineScreen.jsx
try { (() => {
// Timeline — reactive update / lifecycle events
const {
  SegmentedTabs: TL_Tabs,
  Badge: TL_Badge,
  Icon: TL_Icon
} = window.LitDesignSystem_5536fe;
const KIND_TONE = {
  update: 'accent',
  mount: 'success',
  unmount: 'error',
  event: 'cyan'
};
function TimelineScreen({
  data
}) {
  const [filter, setFilter] = React.useState('all');
  const [sel, setSel] = React.useState(3);
  const items = data.timeline.filter(e => filter === 'all' || e.kind === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(TL_Tabs, {
    value: filter,
    onChange: setFilter,
    size: "sm",
    items: [{
      id: 'all',
      label: 'All'
    }, {
      id: 'update',
      label: 'Updates'
    }, {
      id: 'mount',
      label: 'Mount'
    }, {
      id: 'event',
      label: 'Events'
    }]
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--weight-medium) var(--text-xs)/1 var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, items.length, " events \xB7 16.6ms frame budget")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 26,
      margin: '8px 16px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, [0, 0.25, 0.5, 0.75, 1].map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      position: 'absolute',
      left: `${p * 100}%`,
      top: 4,
      transform: 'translateX(-50%)',
      font: 'var(--weight-regular) 10px/1 var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, Math.round(p * 1000), "ms"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '6px 16px 16px'
    }
  }, items.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    onClick: () => setSel(e.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '7px 10px',
      borderRadius: 'var(--radius-sm)',
      background: sel === e.id ? 'var(--surface-active)' : 'transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(TL_Badge, {
    tone: KIND_TONE[e.kind],
    dot: true
  }, e.kind), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--text-sm)/1 var(--font-mono)',
      color: 'var(--code-tag)',
      width: 110,
      flexShrink: 0
    }
  }, "<", e.el, ">"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 0',
      top: 1,
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-container-high)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${e.t * 100}%`,
      top: 1,
      width: 7,
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: `var(--${KIND_TONE[e.kind] === 'accent' ? 'accent' : KIND_TONE[e.kind] === 'cyan' ? 'accent-cyan' : KIND_TONE[e.kind]})`
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--text-xs)/1 var(--font-sans)',
      color: 'var(--text-secondary)',
      width: 160,
      flexShrink: 0,
      textAlign: 'right',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, e.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--text-xs)/1 var(--font-mono)',
      color: 'var(--text-muted)',
      width: 48,
      flexShrink: 0,
      textAlign: 'right'
    }
  }, e.dur)))));
}
window.TimelineScreen = TimelineScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/devtools/TimelineScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/devtools/data.js
try { (() => {
// Fake Lit app data powering the DevTools UI kit demo.
window.LIT_DEMO = {
  version: '3.2.1',
  appName: 'todo-app',
  // Custom-element instance tree
  tree: [{
    id: 'app',
    tag: 'todo-app',
    depth: 0,
    expandable: true,
    children: [{
      id: 'header',
      tag: 'todo-header',
      depth: 1
    }, {
      id: 'input',
      tag: 'todo-input',
      depth: 1
    }, {
      id: 'list',
      tag: 'todo-list',
      depth: 1,
      expandable: true,
      count: 3,
      children: [{
        id: 'item1',
        tag: 'todo-item',
        depth: 2
      }, {
        id: 'item2',
        tag: 'todo-item',
        depth: 2
      }, {
        id: 'item3',
        tag: 'todo-item',
        depth: 2
      }]
    }, {
      id: 'footer',
      tag: 'todo-footer',
      depth: 1
    }]
  }],
  // State per element id
  state: {
    app: {
      props: [{
        name: 'heading',
        value: 'Things to do',
        type: 'string'
      }, {
        name: 'remaining',
        value: 2,
        type: 'number'
      }, {
        name: 'darkMode',
        value: true,
        type: 'boolean'
      }],
      internal: [{
        name: '_filter',
        value: 'all',
        type: 'string'
      }],
      attributes: [{
        name: 'app-version',
        value: '3.2.1',
        type: 'string'
      }],
      events: [{
        name: 'todo-added',
        value: 'CustomEvent',
        type: 'ref'
      }, {
        name: 'todo-cleared',
        value: 'CustomEvent',
        type: 'ref'
      }]
    },
    item2: {
      props: [{
        name: 'label',
        value: 'Buy oat milk',
        type: 'string'
      }, {
        name: 'done',
        value: false,
        type: 'boolean'
      }, {
        name: 'index',
        value: 1,
        type: 'number'
      }, {
        name: 'priority',
        value: 'high',
        type: 'string'
      }],
      internal: [{
        name: '_editing',
        value: false,
        type: 'boolean'
      }, {
        name: '_hovered',
        value: true,
        type: 'boolean'
      }],
      attributes: [{
        name: 'role',
        value: 'listitem',
        type: 'string'
      }, {
        name: 'data-id',
        value: 't-1042',
        type: 'string'
      }],
      events: [{
        name: 'toggle',
        value: 'CustomEvent',
        type: 'ref'
      }, {
        name: 'remove',
        value: 'CustomEvent',
        type: 'ref'
      }]
    }
  },
  // Timeline of reactive updates
  timeline: [{
    id: 1,
    el: 'todo-item',
    kind: 'update',
    label: 'done: false → true',
    t: 0.08,
    dur: '0.4ms'
  }, {
    id: 2,
    el: 'todo-list',
    kind: 'update',
    label: 'items changed',
    t: 0.10,
    dur: '1.2ms'
  }, {
    id: 3,
    el: 'todo-app',
    kind: 'update',
    label: 'remaining: 3 → 2',
    t: 0.12,
    dur: '0.6ms'
  }, {
    id: 4,
    el: 'todo-footer',
    kind: 'update',
    label: 'count re-render',
    t: 0.14,
    dur: '0.3ms'
  }, {
    id: 5,
    el: 'todo-item',
    kind: 'mount',
    label: 'connectedCallback',
    t: 0.42,
    dur: '2.1ms'
  }, {
    id: 6,
    el: 'todo-input',
    kind: 'event',
    label: 'input → keydown',
    t: 0.55,
    dur: '0.2ms'
  }, {
    id: 7,
    el: 'todo-list',
    kind: 'update',
    label: 'items changed',
    t: 0.58,
    dur: '1.0ms'
  }, {
    id: 8,
    el: 'todo-item',
    kind: 'unmount',
    label: 'disconnectedCallback',
    t: 0.74,
    dur: '0.5ms'
  }],
  routes: [{
    path: '/',
    name: 'all',
    active: true,
    matched: 'todo-app'
  }, {
    path: '/active',
    name: 'active',
    matched: 'todo-app'
  }, {
    path: '/completed',
    name: 'completed',
    matched: 'todo-app'
  }, {
    path: '/settings',
    name: 'settings',
    matched: 'settings-view'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/devtools/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SegmentedTabs = __ds_scope.SegmentedTabs;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.StateRow = __ds_scope.StateRow;

__ds_ns.TreeNode = __ds_scope.TreeNode;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

})();
