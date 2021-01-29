import React from 'react'
import AppStoreBade from "../assets/AppStoreBadge.svg"
import GooglePlayBadge from "../assets/GooglePlayBadge.svg"
import Container from './Container'
import Logo from '../assets/logo.svg'

const LinkItem = ({children}) => (
  <span className='text-base text-white mr-4 cursor-pointer'>{children}</span>
)

const Footer = () => {
  return (
    <footer className="bg-smoothBlack flex justify-center pt-7 pb-7" id='contact'>
      <Container className="w-full grid grid-cols-6 lg:grid-cols-12 justify-between items-center">
        <div className="flex flex-col col-span-6 mb-5 lg:mb-0">
          <Logo className="mb-4" />
          <div className="mb-2">
            <LinkItem>Download Now</LinkItem>
            <LinkItem>Licence</LinkItem>
          </div>
          <div className="mb-2 flex flex-wrap">
            <LinkItem>About</LinkItem>
            <LinkItem>Features</LinkItem>
            <LinkItem>Pricing</LinkItem>
            <LinkItem>Career</LinkItem>
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