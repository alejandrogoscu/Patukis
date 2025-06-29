import React from 'react';
import NavbarDesktop from './NavbarDesktop/NavbarDesktop';
import NavbarMobile from './NavbarMobile/NavbarMobile';
import useWindowWidth from '../../hooks/useWindowWidth';

export function NavbarContainer() {
  const width = useWindowWidth();
  const breakpoint = 768;

  return <>{width >= breakpoint ? <NavbarDesktop /> : <NavbarMobile />}</>;
}
