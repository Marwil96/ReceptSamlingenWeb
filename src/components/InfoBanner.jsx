import GatsbyImage from 'gatsby-image';
import React from 'react';
import Container from './Container';

const InfoBanner = ({image}) => {
  return (
    <div className="flex justify-center pb-6 pt-6 lg:pb-7 lg:pt-7" id='social'>
      <Container>
        <div className="grid grid-cols-6 lg:grid-cols-12 lg:gap-5  mb-5 lg:mb-6">
          <h2 className="col-span-6 text-xl mb-1 lg:mb-0 lg:text-1xl">Gör matlagningen mer social.</h2>
          <span className="col-span-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
            scelerisque at quam congue posuere libero in sit quam. Consequat,
            scelerisque non tincidunt sit lectus senectus.
          </span>
        </div>
        <GatsbyImage className='w-full h-13 lg:h-15 rounded-xl' fluid={image.fluid} />
      </Container>
    </div>
  )
}

export default InfoBanner;