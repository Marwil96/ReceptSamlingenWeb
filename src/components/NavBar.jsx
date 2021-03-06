import React, {useEffect, useState} from 'react';
import Logo from "../assets/logo.svg"
import AppStoreBadge from "../assets/AppStoreBadge.svg"
import GooglePlayBadge from "../assets/GooglePlayBadge.svg"
import Hamburger from '../assets/Hamburger.svg'
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components';
import { Link } from 'gatsby';

const LinkItem = ({ className, href, children, closeMenu }) => (
  <Link to={`${href}`} onClick={() => {!href.includes('/') && scrollTo(href); closeMenu()}}>
    <h5 className={`${className} mr-5 cursor-pointer`}>{children}</h5>
  </Link>
)
const HamburgerWrapper = styled.div`
  z-index: 100;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  svg {
    path {
      transition: fill ease 450ms;
      ${props => (props.menuActive ? "stroke: #fff" : "stroke:#000")}
    }
  }
`

const MobileMenu = styled.div`
  height: calc(100%);
  overflow: hidden;
  bottom: 0;
`

const MobileHeader = styled.div`
  svg {
    path {
      transition: fill ease 450ms;
      ${props => (props.menuActive ? "fill: #fff" : "fill: #000")}
    }
  }
`

const NavBar = () => {
  const [pastHero, setPastHero ] = useState(false)
  const [menuActive, setMenuActive] = useState(false)
  const [pathName, setPathName] = useState('/')
  
  useEffect(() => {typeof window !== 'undefined' && window.scrollTo(0, 0); setPathName(window.location.pathname)}, [])
  
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
          <Link
            to="/#home"
            onClick={() => {
              scrollTo("#home")
            }}
          >
            <Logo className="mr-4 cursor-pointer" style={{ height: "28px" }} />
          </Link>

          {pathName === "/" && (
            <LinkItem closeMenu={() => setMenuActive(false)} href="#features">
              Funktioner
            </LinkItem>
          )}
          <LinkItem
            closeMenu={() => setMenuActive(false)}
            href="/create-recipe"
          >
            Hur man skapar ett recept
          </LinkItem>
          <LinkItem closeMenu={() => setMenuActive(false)} href="#contact">
            Kontakta oss
          </LinkItem>
        </div>

        <div className="flex flex-row">
          <a href="https://apps.apple.com/se/app/matie-recept-och-matlagning/id1540745967" target="__blank">
            <AppStoreBadge style={{ width: "145px", height: "40px" }} />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.williammartinsson.receptsamlingen"
            target="__blank"
          >
            <GooglePlayBadge style={{ width: "145px", height: "40px" }} />
          </a>
        </div>
      </div>

      <MobileHeader
        menuActive={menuActive}
        className="flex w-full flex-row pt-4 pb-4 justify-between items-center pl-3 pr-3 lg:hidden"
      >
        <Link to="/#home">
          <Logo className="z-50" style={{ height: "28px" }} />
        </Link>
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
      </MobileHeader>

      <MobileMenu
        className={`fixed p-4 pb-6 top-0 w-full bg-black flex flex-col justify-end h-screen transition ease-in-out duration-500 ${
          menuActive ? "transform translate-x-0" : " transform translate-x-full"
        } lg:hidden`}
      >
        <LinkItem
          closeMenu={() => setMenuActive(false)}
          className="text-white text-1xl font-normal"
          href="/#home"
        >
          Hem
        </LinkItem>
        {pathName === "/" && (
          <LinkItem
            closeMenu={() => setMenuActive(false)}
            className="text-white text-1xl font-normal"
            href="#features"
          >
            Funktioner
          </LinkItem>
        )}
        <LinkItem
          closeMenu={() => setMenuActive(false)}
          className="text-white text-1xl font-normal"
          href="create-recipe"
        >
          Recept
        </LinkItem>
        <LinkItem
          closeMenu={() => setMenuActive(false)}
          className="text-white text-1xl font-normal"
          href="#contact"
        >
          Kontakta oss
        </LinkItem>
        <div className="flex flex-row mt-6">
          <AppStoreBadge style={{ width: "145px", height: "40px" }} />
          <GooglePlayBadge style={{ width: "145px", height: "40px" }} />
        </div>
      </MobileMenu>
    </header>
  )
}

export default NavBar;