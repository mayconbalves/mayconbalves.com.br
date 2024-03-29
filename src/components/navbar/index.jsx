import React from 'react'
import { BurgerIcon, Nav, NavBurger, NavList, NavLogo } from './styles'

const Navbar = () => {
  return (
    <Nav>
      <NavLogo>
        <li>Logo</li>
      </NavLogo>
      <NavList>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </NavList>
      <NavBurger>
        <BurgerIcon />
      </NavBurger>
    </Nav>
  )
}

export default Navbar
