import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Semantic tone. @default 'neutral' */
  tone?: 'neutral' | 'accent' | 'cyan' | 'success' | 'warning' | 'error';
  /** Show a leading status dot. */
  dot?: boolean;
  /** Render the label in the monospace family (for code-ish values). */
  mono?: boolean;
}

/** Compact status / count pill mapped to the semantic palette. */
export function Badge(props: BadgeProps): JSX.Element;
