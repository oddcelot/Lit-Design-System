import * as React from 'react';
import type { IconName } from './Icon';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon id to render. */
  icon: IconName;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** @default 'ghost' */
  variant?: 'ghost' | 'solid' | 'accent';
  /** Selected state — used for the active DevTools rail tab. */
  active?: boolean;
  /** Accessible label + tooltip text. */
  label?: string;
}

/** Square icon-only control for rails, toolbars, and panel headers. */
export function IconButton(props: IconButtonProps): JSX.Element;
