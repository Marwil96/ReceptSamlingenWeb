import React from 'react';
import Container from './Container';
import AppStoreBade from '../assets/AppStoreBadge.svg'
import GooglePlayBadge from '../assets/GooglePlayBadge.svg'
import GatsbyImage from 'gatsby-image';

const CatBanner = ({image_1, image_2}) => {
  return (
    <div className="flex justify-center pb-6 pt-6 lg:pb-7 lg:pt-7 bg-yellowish overflow-hidden relative">
      <Container className="w-full grid grid-cols-6 lg:grid-cols-12 lg:gap-8">
        <div className="col-span-6">
          <h2 className=" text-xl lg:text-2xl mb-1">
            Skapa recept direkt från mobilen
          </h2>
          <span className="text-lg mb-6 block">
            Ladda hem appen för att skapa nya recept, organisera recepten och
            dela dem med vänner och bekanta.
          </span>
          <span className="text-lg mb-2 block font-semibold">
            Ladda ner appen
          </span>
          <div className="flex flex-row">
            <a
              href="https://apps.apple.com/se/app/matie-recept-och-matlagning/id1540745967"
              target="__blank"
            >
              <AppStoreBade className="mr-2" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.williammartinsson.receptsamlingen"
              target="__blank"
            >
              <GooglePlayBadge />
            </a>
          </div>
        </div>
        <div className="col-span-6 w-full relative hidden lg:flex">
          <GatsbyImage
            style={{ width: "23rem", position: "absolute", top: "-17rem" }}
            fluid={image_1.fluid}
          />
          <GatsbyImage
            style={{
              width: "23rem",
              position: "absolute",
              right: 0,
              bottom: "-17rem",
            }}
            fluid={image_2.fluid}
          />
        </div>
      </Container>
    </div>
  )
}

export default CatBanner;