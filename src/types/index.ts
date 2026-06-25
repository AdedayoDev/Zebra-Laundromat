import type { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export interface LogoProps {
  onNavigate?: () => void;
}
