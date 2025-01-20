import React from 'react';
import { NavLink } from './NavLink';
import { navConfig } from '../config';

interface NavLinksProps {
  className?: string;
}

export const NavLinks: React.FC<NavLinksProps> = ({ className = '' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    {navConfig.links.map((link) => (
      <NavLink key={link.href} {...link} />
    ))}
  </div>
);
