import React from 'react'
import AppStoreBadge from "../assets/AppStoreBadge.svg"
import GooglePlayBadge from "../assets/GooglePlayBadge.svg"
import Container from './Container'
import LogoIcon from '../assets/logo_icon.svg'
import { Link } from 'gatsby'

const LinkItem = ({children, href, className}) => (
  <Link to={href} className={`${className} text-base text-white mr-4 cursor-pointer`}>{children}</Link>
)

const Footer = () => {
  return (
    <footer
      className="bg-smoothBlack flex justify-center pt-7 pb-7"
      id="contact"
    >
      <Container className="w-full grid grid-cols-6 lg:grid-cols-12 justify-between items-center">
        <div className="flex flex-col col-span-6 mb-5 lg:mb-0">
          <LogoIcon className="mb-4" />
          <div className="mb-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.williammartinsson.receptsamlingen"
              target="__blank"
            >
              <span className="text-base text-white mr-4 cursor-pointer">Ladda ner Android APK</span>
            </a>
            {/* <LinkItem>Licens</LinkItem> */}
          </div>
          <div className="mb-2 flex flex-wrap">
            <LinkItem href="/">Hem</LinkItem>
            <LinkItem href="/#features">Funktioner</LinkItem>
            <LinkItem href="/create-recipe">Hur man skapar ett recept</LinkItem>
          </div>
          <div className="mb-2 flex flex-wrap">
            <a href="mailto:info@ohhi.se">
              <span className="underline text-base text-white mr-4 cursor-pointer">info@ohhi.se</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:items-end col-span-6">
          <span className="text-base text-white mb-3">Ladda ner appen</span>
          <a href="https://apps.apple.com/se/app/matie-recept-och-matlagning/id1540745967" target="__blank">
            <AppStoreBadge className="mb-3" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.williammartinsson.receptsamlingen"
            target="__blank"
          >
            <GooglePlayBadge />
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;