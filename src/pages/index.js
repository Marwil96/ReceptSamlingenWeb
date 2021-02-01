import React from "react"
import '../styles/base.css';
import { graphql } from "gatsby"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import FeatureSection from "../components/FeatureSection";
import InfoSection from "../components/InfoSection";
import InfoBanner from "../components/InfoBanner";
import CatBanner from "../components/CatBanner";
import Footer from "../components/Footer";

const IndexPage = ({ data }) => (
  <div>
    <SEO title="Home" />
    <NavBar />
    <HeroSection heroMockup={data.hero_mockup} />
    <FeatureSection />
    <InfoSection image={data.create_recipe_mockup} />
    <InfoBanner image={data.social_image} />
    <CatBanner image_1={data.CommentsMock} image_2={data.HomepageMock} />
    <Footer />
  </div>
)


export const query = graphql`
  {
    hero_mockup: imageSharp(
      fixed: { originalName: { eq: "HeroSectionMockup.png" } }
    ) {
      fluid {
        base64
        tracedSVG
        srcWebp
        srcSetWebp
        originalImg
        originalName
        srcSet
        src
        sizes
        presentationWidth
        presentationHeight
        aspectRatio
      }
    }

    create_recipe_mockup: imageSharp(
      fixed: { originalName: { eq: "CreateRecipe.png" } }
    ) {
      fluid {
        base64
        tracedSVG
        srcWebp
        srcSetWebp
        originalImg
        originalName
        srcSet
        src
        sizes
        presentationWidth
        presentationHeight
        aspectRatio
      }
    }

    social_image: imageSharp(
      fixed: { originalName: { eq: "social_image.png" } }
    ) {
      fluid {
        base64
        tracedSVG
        srcWebp
        srcSetWebp
        originalImg
        originalName
        srcSet
        src
        sizes
        presentationWidth
        presentationHeight
        aspectRatio
      }
    }

    CommentsMock: imageSharp(
      fixed: { originalName: { eq: "CommentsMock.png" } }
    ) {
      fluid {
        base64
        tracedSVG
        srcWebp
        srcSetWebp
        originalImg
        originalName
        srcSet
        src
        sizes
        presentationWidth
        presentationHeight
        aspectRatio
      }
    }

    HomepageMock: imageSharp(
      fixed: { originalName: { eq: "HomepageMock.png" } }
    ) {
      fluid {
        base64
        tracedSVG
        srcWebp
        srcSetWebp
        originalImg
        originalName
        srcSet
        src
        sizes
        presentationWidth
        presentationHeight
        aspectRatio
      }
    }
  }
`

export default IndexPage
