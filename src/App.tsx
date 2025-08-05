import "./App.css";
import GridItem from "./components/grid/GridItem";
import Cv from "@/components/cv/Cv";
import Showcase from "@/components/showcase/Showcase";
import Title from "@/components/title/Title";
import Email from "@/components/email/Email";
import Social from "@/components/social/Social";
import Experience from "@/components/experience/Experience";
import Github from "@/components/github/Github";
import Gitlab from "@/components/gitlab/Gitlab";
import Linkedin from "@/components/linkedin/Linkedin";
import Banner from "@/components/banner/Banner";
import Repository from "@/components/repository/Repository";

import cv from "@/assets/cv.docx";
import banner2 from "@/assets/banner2.png";
import banner3 from "@/assets/banner3.png";
import banner4 from "@/assets/banner4.png";
import banner5 from "@/assets/banner5.png";
import onimodeLogo from "@/assets/onimode.svg";
import daplotLogo from "@/assets/daplot.svg";
import tatziLogo from "@/assets/tatzi.svg";
import pdlLogo from "@/assets/pdl.svg";
import plazemLogo from "@/assets/plazem.svg";
import doratvLogo from "@/assets/doratv.svg";
import gamefortLogo from "@/assets/gamefort.svg";
import RepositoryModal from "@/components/repository/RepositoryModal";
import { useContext } from "react";
import { ProjectContext } from "./contexts/projectContext";

const App = () => {
  const { setSelectedProject } = useContext(ProjectContext);
  const gridMap = [
    // ROW 1
    {
      id: 1,
      classes:
        "col-span-6 lg:col-start-1 lg:col-end-5 row-span-1 lg:row-start-1 lg:row-end-2 bb-0 br-0",
      component: <Title />,
    },
    {
      id: 2,
      classes:
        "animated-border col-span-6 lg:col-start-5 lg:col-end-8 row-span-1 lg:row-start-1 lg:row-end-2 bb-0 br-0",
      component: <Banner imageSrc={banner3} />,
    },
    {
      id: "cv",
      classes:
        "col-span-2 lg:col-start-8 lg:col-end-9 row-span-1 lg:row-start-1 lg:row-end-2 bb-0 br-0",
      component: <Cv />,
      href: cv,
    },
    {
      id: "email",
      classes:
        "col-span-2 lg:col-start-9 lg:col-end-10 row-span-1 lg:row-start-1 lg:row-end-2 bb-0 br-0",
      component: <Email />,
      href: "mailto:contact@mateojacques.com",
    },
    {
      id: "social",
      classes:
        "col-span-2 lg:col-start-10 lg:col-end-11 row-span-1 lg:row-start-1 lg:row-end-2 bb-0",
      component: <Social />,
      href: "https://bsky.app/profile/mateojacques.com",
    },
    // ROW 2
    {
      id: 6,
      classes:
        "animated-border col-span-6 lg:col-start-1 lg:col-end-4 row-span-1 lg:row-start-2 lg:row-end-3 bb-0 br-0",
      component: <Banner imageSrc={banner2} />,
    },
    {
      id: "showcase",
      classes:
        "col-span-6 lg:col-start-4 lg:col-end-9 row-span-1 lg:row-start-2 lg:row-end-5 bb-0 br-0",
      component: <Showcase />,
    },
    {
      id: "deku",
      classes:
        "animated-border col-span-2 sm:col-span-6 lg:col-start-9 lg:col-end-10 row-span-3 lg:row-start-2 lg:row-end-5 bb-0 br-0",
      component: <Banner imageSrc={banner4} />,
    },
    {
      id: "about-1",
      classes:
        "col-span-4 sm:col-span-6 lg:col-start-10 lg:col-end-11 row-span-1 lg:row-start-2 lg:row-end-3 bb-0 br-0",
      component: (
        <div className="flex justify-center items-center h-full p-5">
          <p className="text-md text-center">I reside in Argentina.</p>
        </div>
      ),
    },
    // ROW 3
    {
      id: "experience",
      classes:
        "col-span-4 sm:col-span-2 lg:col-start-1 lg:col-end-4 row-span-1 lg:row-start-3 lg:row-end-4 bb-0 br-0",
      component: <Experience />,
    },
    {
      id: "about-2",
      classes:
        "col-span-4 lg:col-start-10 lg:col-end-11 row-span-1 lg:row-start-3 lg:row-end-4 bb-0 br-0",
      component: <div className="flex justify-center items-center h-full p-5">
      <p className="text-md text-center">I make illustrations for fun.</p>
    </div>,
    },
    // ROW 4
    {
      id: "github",
      classes:
        "col-span-2 lg:col-start-1 lg:col-end-2 row-span-1 lg:row-start-4 lg:row-end-5 bb-0 br-0",
      component: <Github />,
  
      href: "https://github.com/mateojacques",
    },
    {
      id: "gitlab",
      classes:
        "col-span-2 lg:col-start-2 lg:col-end-3 row-span-1 lg:row-start-4 lg:row-end-5 bb-0 br-0",
      component: <Gitlab />,
  
      href: "https://git.avenida.com/mateo.jacques",
    },
    {
      id: "linkedin",
      classes:
        "col-span-2 lg:col-start-3 lg:col-end-4 row-span-1 lg:row-start-4 lg:row-end-5 bb-0 br-0",
      component: <Linkedin />,
  
      href: "https://linkedin.com/in/mateoleonjacques",
    },
    {
      id: "B8E6692B-676D-4943-8B6F-2A6F088BE3FB",
      classes:
        "col-span-6 lg:col-start-10 lg:col-end-11 row-span-1 lg:row-start-4 lg:row-end-5 bb-0 br-0",
      component: <div className="flex justify-center items-center w-full h-full p-5">
      <p className="text-md text-center">I speak both english and spanish.</p>
    </div>,
    },
    // ROW 5
    {
      id: "madara",
      classes:
        "animated-border col-span-6 lg:col-start-1 lg:col-end-4 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
      component: <Banner imageSrc={banner5} />,
    },
    {
      id: "onimode",
      classes:
        "col-span-2 lg:col-start-4 lg:col-end-5 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
      component: <Repository logoSrc={onimodeLogo} />,
      type: "button",
      tooltip: "Onimode",
      childComponent: (
        <RepositoryModal repository={{ name: "onimode", title: "Onimode" }} />
      ),
      onClick: () => setSelectedProject({name: "onimode"})
    },
    {
      id: "tatzi",
      classes:
        "col-span-2 lg:col-start-5 lg:col-end-6 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
      component: <Repository logoSrc={tatziLogo} size={75} />,
      type: "button",
      tooltip: "Tatzi",
      childComponent: (
        <RepositoryModal repository={{ name: "tatzi", title: "Tatzi" }} />
      ),
      onClick: () => setSelectedProject({name: "tatzi"})
    },
    {
      id: "daplot",
      classes:
        "col-span-2 lg:col-start-6 lg:col-end-7 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
      component: <Repository logoSrc={daplotLogo} size={100} />,
      type: "button",
      tooltip: "Daplot",
      childComponent: (
        <RepositoryModal repository={{ name: "daplot", title: "DaPlot" }} />
      ),
    },
    {
      id: "pdl",
      classes:
        "col-span-2 lg:col-start-7 lg:col-end-8 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
      component: <Repository logoSrc={pdlLogo} size={110} />,
      type: "button",
      tooltip: "Pro Drawing League",
      childComponent: (
        <RepositoryModal
          repository={{ name: "pdl", title: "Pro Drawing League" }}
        />
      ),
    },
    {
      id: "plazem",
      classes:
        "col-span-2 lg:col-start-8 lg:col-end-9 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
      component: <Repository logoSrc={plazemLogo} />,
      type: "button",
      tooltip: "Plazem",
      childComponent: (
        <RepositoryModal repository={{ name: "plazem", title: "Plazem" }} />
      ),
    },
    {
      id: "doratv",
      classes:
        "col-span-2 lg:col-start-9 lg:col-end-10 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
      component: <Repository logoSrc={doratvLogo} size={100} />,
      type: "button",
      tooltip: "DoraTV",
      childComponent: (
        <RepositoryModal repository={{ name: "doratv", title: "DoraTV" }} />
      ),
    },
    {
      id: "gamefort",
      classes:
        "col-span-2 lg:col-start-10 lg:col-end-11 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
      component: <Repository logoSrc={gamefortLogo} size={85} />,
      type: "button",
      tooltip: "Gamefort",
      childComponent: (
        <RepositoryModal repository={{ name: "gamefort", title: "Gamefort" }} />
      ),
    },
    // ROW 6
    {
      id: 20,
      classes:
        "col-span-2 sm:col-span-2 lg:col-span-10 row-span-1 lg:row-start-6 lg:row-end-7",
      component: <div></div>,
    },
  ];
  
  return (
    <main id="main">
      {gridMap.map((item) => (
        <GridItem key={item.id} {...item} />
      ))}
    </main>
  );
};

export default App;
