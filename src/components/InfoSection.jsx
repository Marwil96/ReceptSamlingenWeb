import GatsbyImage from 'gatsby-image'
import React from 'react'
import Container from './Container'
import RightArrow from '../assets/right-arrow.svg'

const InfoSection = ({image}) => {
  return (
    <div className="flex justify-center pb-7 pt-7">
      <Container className="grid grid-cols-12 gap-5">
        <div style={{width:'54rem', height:'54rem'}} className='col-span-6 rounded-xl bg-yellowish flex justify-center pt-6 relative overflow-hidden'>
          <GatsbyImage className='absolute' style={{width:'36rem', position:'absolute'}} fluid={image.fluid} />
        </div>
        <div className="flex flex-col p-5 col-span-6 justify-center">
          <h2 className='mb-5 text-1xl'>Så här lätt skapar man ett recept.</h2>
          <span className='text-lg mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem
            egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non.
            Non commodo volutpat, pharetra, vel.
          </span>
          <a className='flex items-center text-lg font-extrabold transition duration-450 ease-in-out text-primary cursor-pointer hover:opacity-50'>Läs mer <RightArrow className='ml-1' /></a>
        </div>
      </Container>
    </div>
  )
}

export default InfoSection;