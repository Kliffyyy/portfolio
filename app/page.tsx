import { CustomMDX, Banner, Card, SmallCard} from "./components/mdx";
import Introduction from "./components/intro";

const title = `Hi, I am Klifton`;

const mdxContent = `
# What have I done?

## Projects

## Coding
I am most comfortable with Python and SwiftUI to code out most automations and applications. I learnt C++ when I started using Arduino for more engineering related projects and React when building this website. 
I have base knowledge of shell script to navigate in the terminal on linux based systems, mainly MacOS, and within MacOS have dabbled with applescript for automation. 
(See Building a Personal Website, Making Mootivator, Integrated Design Challenge)

## Software
For coding I use Visual Studio Code for creating scripts and automations. \n
I use XCode for developing applications native to the Apple ecosystem (Look at [Swift Accelerator Programme](https://swiftinsg.org)). 
Arduino IDE is used for coding microcontrollers like the Arduino UNO and other related boards. (See Integrated Design Challenge)
Apart from coding I have also used other design and media softwares. Using DaVinci Resolve to edit videos for projects. I use Figma for any UI designs and drafting up 2D designs. I am no UI/UX designer by any stretch but I do now how to use Figma to a good degree. (See Building a Peronsal Website and Making Mootivator)
I use Fusion360 for designing and creating accurate 3D CAD models. I previously used Blender for 3D CAD due to familiarity with the controls, however I now mainly use it to render out designs made in Fusion360. (See SST × Magorium)

## Hardware
The hardware that I have interacted with and know how to use are mainly from my time the Robotics Club (See Robotics@ Apex)
I first interacted with LEGO technic with the EV3 and Spike Prime systems. I learnt the basics of structuring a robot and managing things like centre of gravity, modular design and making robot designs structurally stable. I then moved on to VEX robotics, where constructing a robot is harder than the snap-fit pieces of lego, requiring careful planning and many hours of hard work. (See Competitions)
In classes, I would use Arduino to power my projects to collect data from sensors. I have also used the Raspberry Pi for basic Machine Learning applications. (see Integrated Design Challenge)
I attended a workshop by Infineon Semiconductor, and had the chance to interact with the PSoC system on chip boards. (update when the workshop is over) (See PSoC Microcontroller Workshop)
I also have experience operating a 3D printer and some basic knowledge of operating a Laser Cutter. (See BigD Camp, Ender 3 Pro, VIVITA)

# Exeprience
## Industry

`;

// ![align-right](/documents/images/personal/christmas.jpeg)
 

export default function Home() {
  return (
    <section className="w-full max-w-xl px-0 md:px-0">

      <Banner BannerContent={{
        text: "Swift Accelerator Programme",
        imageUrl: "/documents/images/SAP/empty seats.jpeg"
      }} />

      <h1 className="titles">
        {title}
      </h1>

      <Introduction />
      <article className="prose">
        <CustomMDX source={ "# Achievements \n 2× Yearly ESIS Bursary"} />   {/* Achievements Title */}
      </article>

      <Card cardContent={{
        title: "Coding",
        imageUrl: "/documents/images/personal/christmas.jpeg",
        link: "/projects/Testing",
        description: "Python | Swift | C++ | React | Shell Script | Applescript",
      }} />

      <Card cardContent={{
        title: "Hardware",
        imageUrl: "/documents/images/personal/christmas.jpeg",
        link: "/projects/Testing",
        description: `
        Arduino | Raspberry Pi | PSoC | 3D Printing | Laser Cutting
        `,
      }} />

      <Card cardContent={{
        title: "Software",
        imageUrl: "/documents/images/personal/christmas.jpeg",
        link: "/projects/Testing",
        description: `
        Fusion360 | DaVinci Resolve | Git | Slicer Software's | IDE's
        `,
      }} />
      
      <article className="prose">
        <CustomMDX source={ "# What Have I done"} />   {/* Achievements Title */}
      </article>

    </section>
);
}
