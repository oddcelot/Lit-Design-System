import * as React from 'react';

export type IconName =
  | 'info' | 'components' | 'tree' | 'assets' | 'route' | 'timeline'
  | 'graph' | 'search' | 'inspect' | 'settings'
  | 'close' | 'chevron-right' | 'chevron-down' | 'chevron-left' | 'check'
  | 'plus' | 'refresh' | 'code' | 'eye' | 'external-link' | 'target'
  | 'filter' | 'copy' | 'split' | 'star' | 'bulb' | 'map' | 'bug'
  | 'command' | 'zap' | 'file' | 'folder' | 'terminal' | 'github'
  | 'layers' | 'package' | 'link';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon id from the Lit DevTools stroke set. */
  name: IconName;
  /** Pixel size (width & height). Default 18. */
  size?: number;
  /** Stroke width on the 24px grid. Default 2. */
  strokeWidth?: number;
  /** Accessible label; when set the icon is exposed to AT. */
  title?: string;
}

/** Lucide-style stroke icon used across the Lit DevTools surfaces. */
export function Icon(props: IconProps): JSX.Element;

/** All available icon ids. */
export const ICON_NAMES: IconName[];
