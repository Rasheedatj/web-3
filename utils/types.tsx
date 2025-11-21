import { ReactNode } from 'react';

export interface IconButtonI {
  icon: ReactNode;
  size?: 'small' | 'medium' | 'large';
  title?: string;
}
