import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional header title. */
  title?: React.ReactNode;
  /** Optional header subtitle (under the title). */
  subtitle?: React.ReactNode;
  /** Right-aligned header actions. */
  actions?: React.ReactNode;
  /** Body padding. @default 'md' */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Add hover affordance for clickable cards. */
  interactive?: boolean;
  /** Extra styles for the body wrapper. */
  bodyStyle?: React.CSSProperties;
}

/** Generic surface container with an optional header row. */
export function Card(props: CardProps): JSX.Element;
