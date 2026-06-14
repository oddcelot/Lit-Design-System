import * as React from 'react';
import type { IconName } from '../core/Icon';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Leading icon id (e.g. 'search'). */
  icon?: IconName;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to fill the container. @default true */
  full?: boolean;
  /** Error styling. */
  invalid?: boolean;
  /** Trailing adornment (kbd hint, clear button, etc.). */
  trailing?: React.ReactNode;
  /** Styles for the outer wrapper (the bordered box). */
  wrapStyle?: React.CSSProperties;
}

/** Single-line text field with optional leading icon & trailing adornment. */
export function Input(props: InputProps): JSX.Element;
