import GatsbyImage from 'gatsby-image';
import React from 'React';
import styled from 'styled-components';
import Button from './Button';
import Container from './Container';

const HeroSectionWrapper = styled.section`
  background: linear-gradient(180deg,rgb(242 247 255) 0%,rgba(242,247,255,0) 100%);
  /* backdrop-filter: blur(100px); */
  /* background-color: white; */
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;

  .circle {
    width: 120rem;
    height: 120rem;
    border-radius: 100%;
    background-color: var(--yellowish);
    bottom: -100rem; 
    position: absolute;
    display: flex;
    justify-content: center;

    img {
      object-fit: contain;
    }

  }
`

const HeroSection = ({heroMockup}) => {
  return (
    <HeroSectionWrapper>
      <Container className="flex flex-col p-7 pt-10 z-10 items-center pb-11 2xl:pt-11">
        <div className="flex flex-col items-center mt-2 2xl:mt-8">
          <h1 className="mb-5 text-center text-2xl max-w-6xl 2xl:text-4xl 2xl:max-w-none">Hämta, skapa och dela dina recept direkt från din mobil.</h1>
          <Button >Se video</Button>
        </div>
      </Container>
      <div className='circle'>
          <GatsbyImage
          style={{ width:'280px', height: '560px', objectFit: "contain", top: '-100px' }}
          fluid={heroMockup.fluid}
          className='absolute -bottom-9'
        />
        </div>
    </HeroSectionWrapper>
  )
}

export default HeroSection;