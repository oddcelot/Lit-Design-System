import * as React from 'react';

export interface TreeNodeProps {
  /** Element/component tag name, rendered between angle brackets. */
  tag: string;
  /** Indentation depth (0 = root). */
  depth?: number;
  /** Has children & shows an expand chevron. */
  expandable?: boolean;
  /** Expanded state (controlled). */
  expanded?: boolean;
  /** Selected/highlighted row. */
  selected?: boolean;
  /** Trailing text (e.g. instance count). */
  badge?: React.ReactNode;
  /** Toggle handler for the chevron. */
  onToggle?: () => void;
  /** Row click handler. */
  onSelect?: () => void;
  /** Nested TreeNodes — rendered only when expanded. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** One row of the custom-element inspector tree. */
export function TreeNode(props: TreeNodeProps): JSX.Element;
