import GatsbyImage from 'gatsby-image';
import React from 'react';
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
    <HeroSectionWrapper id="home">
      <Container className="flex flex-col z-10 items-center pt-8 xs:pt-9 pb-11 2xl:pt-11 pl-3 pr-3 lg:pl-7 lg:pr-7 xl:pl-0 xl:pr-0">
        <div className="flex flex-col items-center mt-2 2xl:mt-8">
          <h1 className="mb-4 lg:text-center text-xl lg:text-2xl max-w-6xl xl:text-3xl xl:max-w-screen-lg 2xl:text-4xl 2xl:max-w-none">
            Hämta, skapa och dela dina recept direkt från din mobil.
          </h1>
          <a href="https://testflight.apple.com/join/gJP0qjVr" className='w-full lg:w-auto' target="__blank">
            <Button className="pl-4 pr-4 pt-2 pb-2 lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3 w-full lg:w-auto">
              Ladda hem app
            </Button>
          </a>
        </div>
      </Container>
      <div className="circle -bottom-22 xs:-bottom-21">
        <GatsbyImage
          style={{
            width: "280px",
            height: "560px",
            objectFit: "contain",
            top: "-100px",
          }}
          fluid={heroMockup.fluid}
          className="absolute -bottom-9"
        />
      </div>
    </HeroSectionWrapper>
  )
}

export default HeroSection;