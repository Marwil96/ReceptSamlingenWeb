import React from 'react';
import Container from './Container';
import FeatureItem from './FeatureItem';
import Road from "../assets/road.svg"
import Comment from "../assets/comment.svg"
import Easytouse from "../assets/easytouse.svg"
import Organization from "../assets/organization.svg"
import Sameapp from "../assets/sameapp.svg"
import Together from "../assets/together.svg"



const FeatureData = [
  {
    title: "Allt i samma app",
    text:
      "Hämta hem dina favorit recept från olika stora svenska recept hemsidor.",
    icon: <Sameapp />,
  },
  {
    title: "Laga mat tillsamans",
    text: "Skapa receptsamlingar tillsamans med familj och bekanta.",
    icon: <Together />,
  },
  {
    title: "Enkel att använda",
    text: "Det är lätt att använda Matie vare sig du är gammal eller ung.",
    icon: <Easytouse />,
  },
  {
    title: "Kommentera",
    text: "Tyck till om dina vänners recept och fyll på med tips.",
    icon: <Comment />,
  },
  {
    title: "Veckoplanering",
    text: "Planera veckans middagar tillsammans med din partner eller roomie.",
    icon: <Road />,
  },
  {
    title: "Grym Organisering",
    text: "Det finns inget lättare sätt att organisera dina recept än Matie.",
    icon: <Organization />,
  },
]

const FeatureSection = () => {
  return (
    <div className="flex justify-center" id="features">
      <Container className="pb-6 pt-7 lg:pb-7 lg:pt-7 w-full items-center flex flex-col pl-3 pr-3 lg:pl-7 lg:pr-7 xl:pl-0 xl:pr-0">
        <h2 className="text-center text-xl lg:text-2xl">Unika Funktioner</h2>
        <span className="text-center text-base lg:text-lg block font-normal mb-6 max-w-3xl">
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </span>
        {/* Feature Items Container */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 lg:grid-cols-12 w-full lg:gap-5">
          {FeatureData.map(props => (
            <FeatureItem {...props}> {props.icon} </FeatureItem>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default FeatureSection;