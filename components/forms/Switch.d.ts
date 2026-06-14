import * as React from 'react';

export interface SwitchProps {
  /** On/off state (controlled). */
  checked?: boolean;
  /** Called with the next boolean value. */
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Optional trailing text label (renders a clickable <label>). */
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Boolean toggle used throughout DevTools settings. */
export function Switch(props: SwitchProps): JSX.Element;
