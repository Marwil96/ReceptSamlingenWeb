import React from 'react';
import Button from '../components/Button';
import CatBanner from '../components/CatBanner';
import Container from '../components/Container';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import NavBar from '../components/NavBar';
import SEO from '../components/seo';

const CreateRecipe = ({data}) => {

  function isOdd(n) {
    return Math.abs(n % 2) === 1
  }

  const infoBlocks = [
    {
      title: "Välj sätt att skapa recept.",
      text:
        "Om du väljer att hämta recept från internet då lägger du till länken till receptet du vill hämta  i textfältet. Då försöker Matie hämta receptet och lägga in all information på rättställe.",
      image: data.create_recipe_mockup,
    },
    {
      title: "Ge receptet ett fint namn och bild.",
      text:
        "Här behöver du inte vara så kreativ om du inte vill, men det är alltid roligare att läsa ett recept som heter något speciellt t.ex Moster Gretas lunch pankakor istället för bara pankakor. Fina bilder på dina recept gör din kokbok finare och förbättrar också chansen att andra kokar vill testa på dina recept.",
      image: data.choose_name,
    },
    {
      title: "Ge information om receptet.",
      text:
        "I det här steget ger du information om receptet. Hur lång tid det tar, hur svårt det är samt hur många portioner det blir av receptet.",
      image: data.time_recipe_mock,
      alignPhoneTop: true
    },
    {
      title: "Fyll i vilka ingredienser som behövs och hur mycket.",
      text: "",
      image: data.ingredient_mock,
    },
    {
      title: "Beskriv stegvis hur du gör din rätt, antingen med text eller bild.",
      text: "",
      image: data.recipesteps_mock,
    },
    {
      title: "Berätta historien bakom rätten eller dela några bra tips...",
      text: "",
      image: data.chief_notes_mock,
    },
    {
      title: "Publicera receptet till valda samlingar.",
      text: "",
      image: data.choose_collection_mock,
    },
  ]
  return (
    <div id="home">
      <SEO title='Hur recept skapas' />
      <NavBar />
      <div className="flex justify-center overflow-hidden relative w-full">
        <Container className="w-full flex flex-col z-10 items-center pt-8 xs:pt-9 pb-11 2xl:pt-11 pl-3 pr-3 lg:pl-7 lg:pr-7 xl:pl-0 xl:pr-0">
          <div className="w-full flex flex-col items-start mt-2 2xl:mt-8">
            <h1 className="mb-4 lg:text-left text-xl lg:text-2xl max-w-6xl xl:text-3xl xl:max-w-screen-lg 2xl:text-4xl 2xl:max-w-none">
              Så här lätt är det att skapa ett recept med Matie.
            </h1>
            <Button className="pl-4 pr-4 pt-2 pb-2 lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3 w-full lg:w-auto">
              Ladda hem app
            </Button>
          </div>
        </Container>
        <div className="w-16 h-16 -right-14 -bottom-13 lg:w-23 lg:h-23 rounded-full bg-yellowish absolute lg:-right-17 lg:-bottom-17"></div>
      </div>
      {infoBlocks.map((props, index) => (
        <InfoSection {...props} reverse={isOdd(index)} />
      ))}
      <CatBanner image_1={data.CommentsMock} image_2={data.HomepageMock} />
      <Footer />
    </div>
  )
}

export const query = graphql`
  {
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

    chief_notes_mock: imageSharp(
      fixed: { originalName: { eq: "chief_notes_mock.png" } }
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

    choose_name: imageSharp(
      fixed: { originalName: { eq: "choose_name.png" } }
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

    choose_collection_mock: imageSharp(
      fixed: { originalName: { eq: "choose_collection_mock.png" } }
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

    ingredient_mock: imageSharp(
      fixed: { originalName: { eq: "ingredient_mock.png" } }
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

    recipesteps_mock: imageSharp(
      fixed: { originalName: { eq: "recipesteps_mock.png" } }
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

    time_recipe_mock: imageSharp(
      fixed: { originalName: { eq: "time_recipe_mock.png" } }
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

export default CreateRecipe;