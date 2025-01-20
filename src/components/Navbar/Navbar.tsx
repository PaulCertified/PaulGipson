import React from 'react';
import { Container } from '../layout';
import { HamburgerButton } from './components/HamburgerButton';
import { NavLinks } from './components/NavLinks';
import { MobileMenu } from './components/MobileMenu';
import { useNavbar } from './hooks/useNavbar';
import { navConfig } from './config';

const Navbar = () => {
  const { isOpen, toggle, close } = useNavbar();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A1B]/80 backdrop-blur-sm border-b border-white/5">
      <Container>
        <nav className="relative h-16 flex items-center justify-between md:justify-center">
          <HamburgerButton isOpen={isOpen} toggle={toggle} />
          <NavLinks className="hidden md:flex" />
          <MobileMenu
            isOpen={isOpen}
            links={navConfig.links}
            onLinkClick={close}
          />
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
