import GatsbyImage from 'gatsby-image'
import React from 'react'
import Container from './Container'
import RightArrow from '../assets/right-arrow.svg'

const InfoSection = ({image}) => {
  return (
    <div className="flex justify-center pb-6 pt-6 lg:pb-7 lg:pt-7" id='create-recipe'>
      <Container className="grid grid-cols-6 lg:grid-cols-12 gap-5">
        <div className='col-span-6 rounded-xl h-15 lg:h-16 bg-yellowish flex justify-center pt-6 relative overflow-hidden'>
          <GatsbyImage style={{position:'absolute'}} className='absolute w-3/4 lg:w-15' fluid={image.fluid} />
        </div>
        <div className="flex flex-col lg:p-5 col-span-6 justify-center">
          <h2 className='text-xl mb-1 lg:mb-5 lg:text-1xl'>Så här lätt skapar man ett recept.</h2>
          <span className='mb-3 text-lg lg:mb-5'>
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