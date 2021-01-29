import React from 'react'
import AppStoreBade from "../assets/AppStoreBadge.svg"
import GooglePlayBadge from "../assets/GooglePlayBadge.svg"
import Container from './Container'
import Logo from '../assets/logo.svg'
import scrollTo from 'gatsby-plugin-smoothscroll'

const LinkItem = ({children, href, className}) => (
  <span onClick={() => {scrollTo(href)}} className={`${className} text-base text-white mr-4 cursor-pointer`}>{children}</span>
)

const Footer = () => {
  return (
    <footer
      className="bg-smoothBlack flex justify-center pt-7 pb-7"
      id="contact"
    >
      <Container className="w-full grid grid-cols-6 lg:grid-cols-12 justify-between items-center">
        <div className="flex flex-col col-span-6 mb-5 lg:mb-0">
          <Logo className="mb-4" />
          <div className="mb-2">
            <LinkItem>Download Now</LinkItem>
            <LinkItem>Licence</LinkItem>
          </div>
          <div className="mb-2 flex flex-wrap">
            <LinkItem href="#home">Hem</LinkItem>
            <LinkItem href="#features">Funktioner</LinkItem>
            <LinkItem href="#create-recipe">Hur man skapar ett recept</LinkItem>
            <LinkItem href="#social">Socialt</LinkItem>
          </div>
          <div className="mb-2 flex flex-wrap">
            <a href='mailto:info@ohhi.se'>
              <LinkItem className='underline'>info@ohhi.se</LinkItem>
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:items-end col-span-6">
          <span className="text-base text-white mb-3">Ladda ner appen</span>
          <AppStoreBade className="mb-3" />
          <GooglePlayBadge />
        </div>
      </Container>
    </footer>
  )
}

export default Footer;