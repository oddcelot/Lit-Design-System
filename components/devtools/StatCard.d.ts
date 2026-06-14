import * as React from 'react';
import type { IconName } from '../core/Icon';

export interface StatCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon id rendered at the top. */
  icon: IconName;
  /** Large primary value (e.g. "v3.2.1", "8", "24"). */
  value: React.ReactNode;
  /** Caption under the value. */
  label: React.ReactNode;
  /** Accent border + icon tint. */
  accent?: boolean;
}

/** Large overview tile for the DevTools home dashboard. */
export function StatCard(props: StatCardProps): JSX.Element;
