import { CustomMDX, components} from "./components/mdx";
import { link } from "fs";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Link from "next/link";


const Introduction = (
    <div className="prose intro">
      <h1 className="titles">
        Hi, I am Klifton
      </h1>
      <div className="text-content">
        <p>
          I am a student in the
          <Link href={`https://www.sst.edu.sg/`}>School of Science and Technology, Singapore</Link>
          I have an interest in Science, Technology, Engineering, Art and Math (STEAM) related fields. 
          I have been led to join many programmes with regard to these fields, learning more with each experience.
        </p>
        <p>
          I like exepimenting with new things and learning from them. 
          Any new experience is a learning opportunity for me.
        </p>
      </div>
    </div>
  )


const Experience = (
  <div className="prose">
    <components.h1>My Experience</components.h1>
    <p>
      I have been given many opportunities to learn and grow. 
      Participating in competitions and workshops and 
      having the pleasure to work with industry professionals to further my knowledge. 
    </p>
    <div className="flex flex-col md:flex-row md:space-x-2">
    <components.Card CardContent={{
      text: "Skills",
      imageUrl: "/documents/icons/books.png",
      link: "/mdx/pages/skills",
      description: "The skills that I have picked up over the years."
    }} />
    <components.Card CardContent={{
      text: "Competitions",
      imageUrl: "/documents/icons/bullsye.png",
      link: "/mdx/pages/competitions",
      description: "Competitions that I have participated in"
    }} />
    </div>
  </div>
)

const Development = (
  <div className="prose">
    <components.h1>Personal Development</components.h1>
    <p>
      I have developed many things in my life. 
    </p>
  </div>
)

const Future = (
  <div className="prose">
    <components.h1>Looking to the Future...</components.h1>
    <p>
      In the future, I would like to pursue manufacturing technology and create human-centric products.  
      This is partly inspired from owning a 3D printer and my love for products that combine both function and form.
    </p>
    <p>

    </p>
  </div>
)

const Hobbies = (
  <div className="prose">
    <components.h1>Hobbies</components.h1>
    <CustomMDX source={`    

    `} />
  </div>
)


// ![align-right](/documents/images/personal/christmas.jpeg)
 

export default function Home() {
  return (
    <section className="w-full max-w-xl px-0 md:px-0 prose">

      {/* <Banner BannerContent={{
        text: "Swift Accelerator Programme",
        imageUrl: "/documents/images/SAP/empty seats.jpeg"
      }} /> */}

      {Introduction}
      {Experience}


      <div className="flex flex-col md:flex-row md:space-x-2">
      <components.Card CardContent={{
        text: "Industry Experience",
        imageUrl: "/documents/icons/industry.png",
        link: "/mdx/pages/industry",
        description: "Learning and Working with Companies"
      }} />
      </div>


      {Development}
      <div className="flex flex-col md:flex-row md:space-x-2">
      <components.Card CardContent={{
        text: "Education",
        imageUrl: "/documents/icons/cap.png",
        link: "/mdx/pages/education",
        description: ""
      }} />

      <components.Card CardContent={{
        text: "Leadership",
        imageUrl: "/documents/images/leader/leaderhsip-banner.png",
        link: "/mdx/pages/leadership",
        description: ""
      }} /> 
      </div>

      <div className="flex flex-col md:flex-row md:space-x-2">

      <components.Card CardContent={{
        text: "Global Experience",
        imageUrl: "/documents/icons/globe.png",
        link: "/mdx/pages/global",
        description: ""
      }} />
      </div>

      <components.h1>
        Awards and Achievements
      </components.h1>

      <div className="flex flex-col md:flex-row md:space-x-2">
        <components.Card CardContent={{
          text: "Awards",
          imageUrl: "/documents/icons/trophy.png",
          link: "/mdx/pages/awards",
          description: "Awards from Competitions and Others"
        }} />
      </div>

      {Future}

      <CustomMDX source={"---"} />

      {Hobbies}

    </section>
);
}
