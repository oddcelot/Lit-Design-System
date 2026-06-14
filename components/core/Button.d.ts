import * as React from 'react';
import type { IconName } from './Icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Control height. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Leading icon id. */
  icon?: IconName;
  /** Trailing icon id. */
  iconRight?: IconName;
  /** Stretch to fill the container width. */
  full?: boolean;
  disabled?: boolean;
}

/**
 * Primary action control. Flame-blue fill for primary actions, outlined
 * secondary, quiet ghost, and a soft danger variant.
 *
 * @startingPoint section="Core" subtitle="Buttons in every variant & size" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
