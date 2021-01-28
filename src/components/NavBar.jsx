import React, {useState, useEffect} from 'react';
import { AppleStoreButton, GoogleStoreButton, SvgLogo } from '../AppStoreBadges';

const LinkItem = ({children}) => (
  <h5 className='mr-5'>
    {children}
  </h5>
)

const NavBar = () => {
  const [pastHero, setPastHero ] = useState(false)
  
  if(window !== undefined){
    window.addEventListener("scroll", () => {
      window.pageYOffset > 88 ? setPastHero(true) : setPastHero(false) 
    })
  }

  return (
    <header className={`flex flex-row fixed z-50 justify-center w-full items-center ${pastHero ? 'bg-white' : 'bg-transparent'} transition ease-in-out duration-750`}>
      <div
        className="flex flex-row pt-4 pb-4 justify-between items-center"
        style={{ maxWidth: "120rem", width: "100%" }}
      >
        <div className="flex flex-row items-center">
          <SvgLogo className='mr-4' width="105px" height="28px" />
          <LinkItem>About</LinkItem>
          <LinkItem>Pricing</LinkItem>
          <LinkItem>Jobs</LinkItem>
          <LinkItem>Blog</LinkItem>
        </div>

        <div className="flex flex-row">
          <AppleStoreButton width="145px" height="40px" />
          <GoogleStoreButton width="145px" height="40px" />
        </div>
      </div>
    </header>
  )
}

export default NavBar;