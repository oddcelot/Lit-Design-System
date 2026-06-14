import * as React from 'react';

export interface SegmentedTabItem {
  id: string;
  label: React.ReactNode;
}

export interface SegmentedTabsProps {
  /** Tab definitions. */
  items: SegmentedTabItem[];
  /** Active tab id (controlled). */
  value: string;
  /** Called with the selected tab id. */
  onChange?: (id: string) => void;
  /** @default 'md' */
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

/** Inline segmented control for switching between views. */
export function SegmentedTabs(props: SegmentedTabsProps): JSX.Element;
