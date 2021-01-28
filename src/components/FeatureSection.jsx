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
      "Hämta hem dina favorit recept från all olika stora svenska recepthemsidor.",
    icon: <Sameapp />,
  },
  {
    title: "Laga mat tillsamans",
    text: "Skapa receptsamlingar tillsamans med familj och bekanta.",
    icon: <Together />,
  },
  {
    title: "Enkel att använda",
    text: "Det är lätt att använda namn vare sig du är gammal eller ung.",
    icon: <Easytouse />,
  },
  {
    title: "Kommentera",
    text: "Tyck till om dina vänners recept och fyll på med tips.",
    icon: <Comment />,
  },
  {
    title: "Better components",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    icon: <Road />,
  },
  {
    title: "Grym Organisering",
    text: "Det finns inget lättare sätt att organisera dina recept än namn.",
    icon: <Organization />,
  },
]

const FeatureSection = () => {
  return (
    <div className="flex justify-center">
      <Container className="pt-7 pb-7 w-full items-center flex flex-col">
        <h2 className="text-center">Unika Funktioner</h2>
        <span className='text-center text-lg block font-normal mb-6 max-w-3xl'>
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </span>
        {/* Feature Items Container */}
        <div className='grid grid-cols-12 w-full gap-5'>
          {FeatureData.map((props) => <FeatureItem {...props}> {props.icon} </FeatureItem>)}
        </div>
      </Container>
    </div>
  )
}

export default FeatureSection;