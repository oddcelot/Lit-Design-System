import * as React from 'react';

export type StateValueType = 'string' | 'number' | 'boolean' | 'ref' | 'object' | 'function' | 'null';

export interface StateRowProps {
  /** Property / key name. */
  name: React.ReactNode;
  /** Value to display. For objects, pass a type label like "Reactive". */
  value?: React.ReactNode;
  /** Value type → drives syntax color. @default 'string' */
  type?: StateValueType;
  /** Indentation depth. */
  depth?: number;
  /** Expandable object/reactive row. */
  expandable?: boolean;
  expanded?: boolean;
  /** Trailing annotation (e.g. "(Ref)", "Reactive"). */
  badge?: React.ReactNode;
  onToggle?: () => void;
  /** Nested StateRows, shown when expanded. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** One `key : value` line in the DevTools state inspector. */
export function StateRow(props: StateRowProps): JSX.Element;
