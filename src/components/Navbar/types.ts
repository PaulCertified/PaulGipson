export interface NavbarWrapperProps {
  children: React.ReactNode;
}

export interface GradientTextProps {
  children: React.ReactNode;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface NavLinkProps extends NavItem {
  onClick?: () => void;
  className?: string;
}
