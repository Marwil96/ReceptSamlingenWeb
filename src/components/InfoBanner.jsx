import GatsbyImage from 'gatsby-image';
import React from 'react';
import Container from './Container';

const InfoBanner = ({image}) => {
  return (
    <div className="flex justify-center pb-7 pt-7">
      <Container>
        <div className="grid grid-cols-12 gap-5 mb-6">
          <h2 className="text-1xl col-span-6">Gör matlagningen mer social.</h2>
          <span className="col-span-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
            scelerisque at quam congue posuere libero in sit quam. Consequat,
            scelerisque non tincidunt sit lectus senectus.
          </span>
        </div>
        <GatsbyImage className='w-full h-15 rounded-xl' fluid={image.fluid} />
      </Container>
    </div>
  )
}

export default InfoBanner;