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
        <text>I am a student in the </text>
          <Link href={`https://www.sst.edu.sg/`}>School of Science and Technology, Singapore</Link>
          <text> I have an interest in Science, Technology, Engineering, Art and Math (STEAM) related fields. </text>
          I have been led to join many programmes with regard to these fields, learning more with each experience.
        </p>
        {/* <p>
          I like exepimenting with new things and learning from them. 
          Any new experience is a learning opportunity for me. 
        </p> */}
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

    <CustomMDX source={`
      I am currently working with [Magorium](/mdx/projects/capstone-project), a company dealing with bringing new life to plastics, 
      to develop and improve a plastic recycling machine that uses injection moulding.
      `}/>

    <CustomMDX source={`
      I have also taken a liking to other manufacturing techniques like [3D Printing](/mdx/areas/3d-printing/3d-printing) and acquired the [Ender-3 Pro](/mdx/areas/3d-printing/ender-3-pro) in Secondary 3 to learn and exeperiment with this manufacturing technique. 
      Since obtaining a 3D Printer, some of my projects have benefitted from the use of highly customisable parts. 
      `}/>
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
      link: "/mdx/pages/awards-competitions",
      description: "Competitions that I have participated in"
    }} />
    </div>
    
    <div className="flex flex-col md:flex-row md:space-x-2">
      <components.Card CardContent={{
        text: "Industry Experience",
        imageUrl: "/documents/icons/industry.png",
        link: "/mdx/pages/industry",
        description: "Learning and Working with Companies"
      }} />
      </div>
  </div>
)

const Development = (
  <div className="prose">
    <components.h2>Personal Development</components.h2>
    <p>
      As a person, I like to improve myself and believe that learning and growing is a continuous process. 
      In my education, I have held various leadership positions and have been given the opportunity to learn from different cultures overseas. 
    </p>
    <div className="flex flex-col md:flex-row md:space-x-2">
      {/* <components.Card CardContent={{
        text: "Education",
        imageUrl: "/documents/icons/cap.png",
        link: "/mdx/pages/education",
        description: ""
      }} /> */}

      <components.Card CardContent={{
        text: "Leadership",
        imageUrl: "/documents/images/leader/leaderhsip-banner.png",
        link: "/mdx/pages/leadership",
        description: ""
      }} /> 

      <components.Card CardContent={{
        text: "Global Experience",
        imageUrl: "/documents/icons/globe.png",
        link: "/mdx/pages/global",
        description: ""
      }} />
      </div>
  </div>
)

const Future = (
  <div className="prose">
    <components.h1>Looking to the Future</components.h1>
    <CustomMDX source={`
    I would like to pursue manufacturing technology and create human-centric products.
    Which led me to take up the [Capstone Project](/mdx/projects/capstone-project) with Magorium to gain more experience with Injection Moulding. \n
    This is partly inspired from owning a [3D Printer](/mdx/areas/3d-printing/3d-printing) and my love for products that combine both function and form.
      `} />
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
      {Introduction}
      {Experience}
      {Development}
      

      {/* <components.h2>
        Awards and Achievements
      </components.h2>

      <div className="flex flex-col md:flex-row md:space-x-2">
        <components.Card CardContent={{
          text: "Awards",
          imageUrl: "/documents/icons/trophy.png",
          link: "/mdx/pages/awards",
          description: "Awards from Competitions and Others"
        }} />
      </div> */}

      {Future}

      <CustomMDX source={`
      ---
      # Related
      - [3D Printing](/mdx/areas/3d-printing/3d-printing)
      - [Capstone Project](/mdx/projects/capstone-project)
      - [Robotics@ Apex](/mdx/areas/robotics/robotics-at-apex)
      - [Projects](/mdx/projects/projects)
        
      `} />

    </section>
);
}
