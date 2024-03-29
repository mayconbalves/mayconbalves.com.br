import { GiHamburgerMenu } from 'react-icons/gi'
import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-around;
  height: 70px;
  width: 100%;
`

export const NavLogo = styled.ul`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-left: 100px;
  width: 100%;
`

export const NavList = styled.ul`
  display: none;

  @media(min-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin-right: 100px;
    width: 100%;
  }
`

export const NavBurger = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-right: 100px;

  @media(min-width: 768px) {
    display: none;
  }
`

export const BurgerIcon = styled(GiHamburgerMenu)`
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  height: 30px;
  padding: 5px;
  width: 30px;

  &:hover path {
    fill: orange;
    background-position: 100% 0;
    -o-transition: all .5s ease-in-out;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
  }
`