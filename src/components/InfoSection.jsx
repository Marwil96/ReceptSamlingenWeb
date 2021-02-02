import GatsbyImage from 'gatsby-image'
import React from 'react'
import Container from './Container'
import RightArrow from '../assets/right-arrow.svg'
import { Link } from 'gatsby'

const InfoSection = ({image, title, text, link, reverse, alignPhoneTop}) => {
  return (
    <div className="flex justify-center pb-6 pt-6 lg:pb-7 lg:pt-7" id='create-recipe'>
      <Container className="grid grid-cols-6 lg:grid-cols-12 gap-5 lg:gap-7">
        <div className={`col-span-6 rounded-xl h-15 lg:h-16 bg-yellowish flex justify-center ${alignPhoneTop ? 'pt-0' : 'pt-6'} relative overflow-hidden ${reverse ? 'lg:order-1' : ''}`}>
          <GatsbyImage style={{position:'absolute'}} className={`absolute w-3/4 lg:w-15 ${alignPhoneTop ? ' -top-11 lg:-top-15' : ''}`} fluid={image.fluid} />
        </div>
        <div className="flex flex-col col-span-6 justify-center">
          <h2 className='text-xl mb-1 lg:mb-5 lg:text-1xl'>{title}</h2>
          <span className='mb-3 text-lg lg:mb-5'>{text}</span>
          { link !== undefined && <Link to={link} className='flex items-center text-lg font-extrabold transition duration-450 ease-in-out text-primary cursor-pointer hover:opacity-50'>Läs mer <RightArrow className='ml-1' /></Link>}
        </div>
      </Container>
    </div>
  )
}

export default InfoSection;