import Cv from "@/components/cv/Cv";
import Showcase from "../components/showcase/Showcase";
import Title from "../components/title/Title";
import Email from "@/components/email/Email";
import Social from "@/components/social/Social";
import Experience from "@/components/experience/Experience";
import Github from "@/components/github/Github";
import Gitlab from "@/components/gitlab/Gitlab";
import Linkedin from "@/components/linkedin/Linkedin";
import Banner from "@/components/banner/Banner";
import Repository from "@/components/repository/Repository";

import cv from "../assets/cv.docx";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import banner5 from "../assets/banner5.png";
import onimodeLogo from "../assets/onimode.svg";
import daplotLogo from "../assets/daplot.svg";
import tatziLogo from "../assets/tatzi.svg";
import pdlLogo from "../assets/pdl.svg";
import plazemLogo from "../assets/plazem.svg";
import doratvLogo from "../assets/doratv.svg";
import gamefortLogo from "../assets/gamefort.svg";

export const gridMap = [
  // ROW 1
  {
    id: 1,
    classes:
      "col-span-1 sm:col-span-2 lg:col-start-1 lg:col-end-5 row-span-1 lg:row-start-1 lg:row-end-2 bb-0 br-0",
    component: <Title />,
    type: "box",
  },
  {
    id: 2,
    classes:
      "animated-border col-span-1 lg:col-start-5 lg:col-end-8 row-span-1 lg:row-start-1 lg:row-end-2 bb-0 br-0",
    component: <Banner imageSrc={banner3} />,
    type: "box",
  },
  {
    id: "cv",
    classes:
      "col-span-1 lg:col-start-8 lg:col-end-9 row-span-1 lg:row-start-1 lg:row-end-2 bb-0 br-0",
    component: <Cv />,
    type: "box",
    href: cv,
  },
  {
    id: "email",
    classes:
      "col-span-1 lg:col-start-9 lg:col-end-10 row-span-1 lg:row-start-1 lg:row-end-2 bb-0 br-0",
    component: <Email />,
    type: "box",
    href: "mailto:contact@mateojacques.com",
  },
  {
    id: "social",
    classes:
      "col-span-1 lg:col-start-10 lg:col-end-11 row-span-1 lg:row-start-1 lg:row-end-2 bb-0",
    component: <Social />,
    type: "box",
    href: "https://bsky.app/profile/mateojacques.com",
  },
  // ROW 2
  {
    id: 6,
    classes:
      "animated-border col-span-1 lg:col-start-1 lg:col-end-4 row-span-1 lg:row-start-2 lg:row-end-3 bb-0 br-0",
    component: <Banner imageSrc={banner2} />,
    type: "box",
  },
  {
    id: "showcase",
    classes:
      "col-span-2 sm:col-span-3 lg:col-start-4 lg:col-end-9 row-span-3 lg:row-start-2 lg:row-end-5 bb-0 br-0",
    component: <Showcase />,
  },
  {
    id: "09A693FE-C90D-427A-9B23-8EBDFE2ED68D",
    classes:
      "animated-border col-span-2 sm:col-span-3 lg:col-start-9 lg:col-end-10 row-span-3 lg:row-start-2 lg:row-end-5 bb-0 br-0",
    component: <Banner imageSrc={banner4} />,
  },
  {
    id: "7BDDFF0D-15E6-404C-9EC0-A1CA82012CAE",
    classes:
      "col-span-2 sm:col-span-3 lg:col-start-10 lg:col-end-11 row-span-3 lg:row-start-2 lg:row-end-3 bb-0 br-0",
    component: <div></div>,
  },
  // ROW 3
  {
    id: "experience",
    classes:
      "col-span-2 sm:col-span-2 lg:col-start-1 lg:col-end-4 row-span-1 lg:row-start-3 lg:row-end-4 bb-0 br-0",
    component: <Experience />,
  },
  {
    id: "70707B49-28BD-430F-B0E0-9C22CC328A66",
    classes:
      "col-span-1 lg:col-start-10 lg:col-end-11 row-span-1 lg:row-start-3 lg:row-end-4 bb-0 br-0",
    component: <div></div>,
  },
  // ROW 4
  {
    id: "github",
    classes:
      "col-span-1 lg:col-start-1 lg:col-end-2 row-span-1 lg:row-start-4 lg:row-end-5 bb-0 br-0",
    component: <Github />,
    type: "box",
    href: "https://github.com/mateojacques",
  },
  {
    id: "gitlab",
    classes:
      "col-span-1 lg:col-start-2 lg:col-end-3 row-span-1 lg:row-start-4 lg:row-end-5 bb-0 br-0",
    component: <Gitlab />,
    type: "box",
    href: "https://git.avenida.com/mateo.jacques",
  },
  {
    id: "linkedin",
    classes:
      "col-span-1 lg:col-start-3 lg:col-end-4 row-span-1 lg:row-start-4 lg:row-end-5 bb-0 br-0",
    component: <Linkedin />,
    type: "box",
    href: "https://linkedin.com/in/mateoleonjacques",
  },
  {
    id: "B8E6692B-676D-4943-8B6F-2A6F088BE3FB",
    classes:
      "col-span-1 lg:col-start-10 lg:col-end-11 row-span-1 lg:row-start-4 lg:row-end-5 bb-0 br-0",
    component: <div></div>,
  },
  // ROW 5
  {
    id: "madara",
    classes:
      "animated-border col-span-1 lg:col-start-1 lg:col-end-4 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
    component: <Banner imageSrc={banner5} />,
    type: "box",
  },
  {
    id: "onimode",
    classes:
      "col-span-1 lg:col-start-4 lg:col-end-5 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
    component: <Repository logoSrc={onimodeLogo} />,
    type: "button",
    tooltip: "Onimode",
  },
  {
    id: "tatzi",
    classes:
      "col-span-1 lg:col-start-5 lg:col-end-6 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
    component: <Repository logoSrc={tatziLogo} size={75} />,
    type: "button",
    tooltip: "Tatzi",
  },
  {
    id: "daplot",
    classes:
      "col-span-1 lg:col-start-6 lg:col-end-7 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
    component: <Repository logoSrc={daplotLogo} size={100} />,
    type: "button",
    tooltip: "Daplot",
  },
  {
    id: "pdl",
    classes:
      "col-span-1 lg:col-start-7 lg:col-end-8 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
    component: <Repository logoSrc={pdlLogo} size={110} />,
    type: "button",
    tooltip: "Pro Drawing League",
  },
  {
    id: "plazem",
    classes:
      "col-span-1 lg:col-start-8 lg:col-end-9 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
    component: <Repository logoSrc={plazemLogo} />,
    type: "button",
    tooltip: "Plazem",
  },
  {
    id: "doratv",
    classes:
      "col-span-1 lg:col-start-9 lg:col-end-10 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
    component: <Repository logoSrc={doratvLogo} size={100} />,
    type: "button",
    tooltip: "DoraTV",
  },
  {
    id: "gamefort",
    classes:
      "col-span-1 lg:col-start-10 lg:col-end-11 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
    component: <Repository logoSrc={gamefortLogo} size={85} />,
    type: "button",
    tooltip: "Gamefort",
  },
  // ROW 6
  {
    id: 20,
    classes:
      "col-span-1 sm:col-span-2 lg:col-span-10 row-span-1 lg:row-start-6 lg:row-end-7",
    component: <div></div>,
  },
];
