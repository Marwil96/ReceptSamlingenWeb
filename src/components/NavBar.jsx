import React, {useState, useEffect} from 'react';
import Logo from "../assets/logo.svg"
import AppStoreBadge from "../assets/AppStoreBadge.svg"
import GooglePlayBadge from "../assets/GooglePlayBadge.svg"
import Hamburger from '../assets/Hamburger.svg'
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components';

const LinkItem = ({ className, href, children, closeMenu }) => (
  <a onClick={() => {scrollTo(href); closeMenu()}}>
    <h5 className={`${className} mr-5 cursor-pointer`}>{children}</h5>
  </a>
)
const HamburgerWrapper = styled.div`
  z-index: 100;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  svg {
    path {
      ${props => (props.menuActive ? "stroke: #fff" : "stroke:#000")}
    }
  }
`

const MobileMenu = styled.div`
  height: calc(100%);
  overflow: hidden;
  bottom: 0;
`

const NavBar = () => {
  const [pastHero, setPastHero ] = useState(false)
  const [menuActive, setMenuActive] = useState(false)
  
  if(typeof window !== 'undefined'){
    window.addEventListener("scroll", () => {
      window.pageYOffset > 88 ? setPastHero(true) : setPastHero(false) 
    })
  }

  return (
    <header
      className={`flex flex-row fixed z-50 justify-center w-full items-center ${
        pastHero ? "bg-white" : "bg-transparent"
      } transition ease-in-out duration-750`}
    >
      <div
        className="hidden flex-row pt-4 pb-4 justify-between items-center pl-3 pr-3 lg:flex lg:pl-7 lg:pr-7 xl:pl-5 xl:pr-5"
        style={{ maxWidth: "128rem", width: "100%" }}
      >
        <div className="flex flex-row items-center">
          <a onClick={() => scrollTo("#home")}>
            <Logo
              className="mr-4 cursor-pointer"
              style={{height:"28px"}}
            />
          </a>
          <LinkItem closeMenu={() => setMenuActive(false)} href="#features">Funktioner</LinkItem>
          <LinkItem closeMenu={() => setMenuActive(false)} href="#create-recipe">Hur man skapar ett recept</LinkItem>
          <LinkItem closeMenu={() => setMenuActive(false)} href="#social">Socialt</LinkItem>
          <LinkItem closeMenu={() => setMenuActive(false)} href="#contact">Kontakta oss</LinkItem>
        </div>

        <div className="flex flex-row">
          <AppStoreBadge style={{width: '145px', height:"40px"}} />
          <GooglePlayBadge style={{width: '145px', height:"40px"}} />
        </div>
      </div>

      <div className="flex w-full flex-row pt-4 pb-4 justify-between items-center pl-3 pr-3 lg:hidden">
        <Logo
              className="z-50"
              style={{height:"28px"}}
            />
        <HamburgerWrapper
          menuActive={menuActive}
          onClick={() => setMenuActive(!menuActive)}
        >
          <Hamburger
            className={`z-50 ${
              menuActive
                ? "stroke-current text-clearBlue"
                : "stroke-current  text-clearBlue"
            }`}
            style={{ stroke: "green" }}
          />
        </HamburgerWrapper>
      </div>

      <MobileMenu
        className={`fixed p-4 pb-6 top-0 w-full bg-black flex flex-col justify-end h-screen transition ease-in-out duration-500 ${
          menuActive ? "transform translate-x-0" : " transform translate-x-full"
        } lg:hidden`}
      >
        <LinkItem closeMenu={() => setMenuActive(false)} className="text-white text-1xl font-normal" href="#home">Hem</LinkItem>
        <LinkItem closeMenu={() => setMenuActive(false)} className="text-white text-1xl font-normal" href="#features">Funktioner</LinkItem>
        <LinkItem closeMenu={() => setMenuActive(false)} className="text-white text-1xl font-normal" href="#create-recipe">Recept</LinkItem>
        <LinkItem closeMenu={() => setMenuActive(false)} className="text-white text-1xl font-normal" href="#social">Socialt</LinkItem>
        <LinkItem closeMenu={() => setMenuActive(false)} className="text-white text-1xl font-normal" href="#contact">Kontakta oss</LinkItem>
        <div className="flex flex-row mt-6">
          <AppStoreBadge style={{width: '145px', height:"40px"}} />
          <GooglePlayBadge style={{width: '145px', height:"40px"}} />
        </div>
      </MobileMenu>
    </header>
  )
}

export default NavBar;