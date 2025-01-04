import Showcase from "../components/showcase/Showcase";
import Title from "../components/title/Title";

export const gridMap = [
  // ROW 1
  {
    id: 1,
    classes: "col-span-1 sm:col-span-2 lg:col-start-1 lg:col-end-3 row-span-1 lg:row-start-1 lg:row-end-2 animated-border bb-0 br-0",
    component: <Title />,
  },
  {
    id: 2,
    classes: "col-span-1 lg:col-start-3 lg:col-end-4 row-span-1 lg:row-start-1 lg:row-end-2 bb-0 br-0",
    component: <div className="content"></div>,
  },
  {
    id: 3,
    classes: "col-span-1 lg:col-start-4 lg:col-end-5 row-span-1 lg:row-start-1 lg:row-end-2 bb-0 br-0",
    component: <div className="content"></div>,
  },
  {
    id: 4,
    classes: "col-span-1 lg:col-start-5 lg:col-end-6 row-span-1 lg:row-start-1 lg:row-end-2 bb-0 br-0",
    component: <div className="content"></div>,
  },
  {
    id: 5,
    classes: "col-span-1 lg:col-start-6 lg:col-end-7 row-span-1 lg:row-start-1 lg:row-end-3 bb-0",
    component: <div className="content"></div>,
  },
  // ROW 2
  {
    id: 6,
    classes: "col-span-1 lg:col-start-1 lg:col-end-2 row-span-1 lg:row-start-2 lg:row-end-3 bb-0 br-0",
    component: <div className="content"></div>,
  },
  {
    id: 7,
    classes: "col-span-1 lg:col-start-2 lg:col-end-3 row-span-1 lg:row-start-2 lg:row-end-3 bb-0 br-0",
    component: <div className="content"></div>,
  },
  {
    id: 8,
    classes: "col-span-2 sm:col-span-3 lg:col-start-3 lg:col-end-6 row-span-3 lg:row-start-2 lg:row-end-6 animated-border bb-0 br-0",
    component: <Showcase />,
  },
  {
    id: 9,
    classes: "col-span-1 lg:col-start-6 lg:col-end-7 row-span-1 lg:row-start-2 lg:row-end-3 bb-0",
    component: <div className="content"></div>,
  },
  // ROW 3
  {
    id: 10,
    classes: "col-span-2 sm:col-span-2 lg:col-start-1 lg:col-end-3 row-span-1 lg:row-start-3 lg:row-end-4 bb-0 br-0",
    component: <div className="content"></div>,
  },
  {
    id: 11,
    classes: "col-span-1 lg:col-start-6 lg:col-end-7 row-span-1 lg:row-start-3 lg:row-end-4 bb-0",
    component: <div className="content"></div>,
  },
  // ROW 4
  {
    id: 12,
    classes: "col-span-1 lg:col-start-1 lg:col-end-2 row-span-1 lg:row-start-4 lg:row-end-5 bb-0 br-0",
    component: <div className="content"></div>,
  },
  {
    id: 13,
    classes: "col-span-1 lg:col-start-2 lg:col-end-3 row-span-1 lg:row-start-4 lg:row-end-5 bb-0 br-0",
    component: <div className="content"></div>,
  },
  {
    id: 21,
    classes: "col-span-1 lg:col-start-6 lg:col-end-7 row-span-1 lg:row-start-4 lg:row-end-5 bb-0 br-0",
    component: <div className="content"></div>,
  },
  // ROW 5
  {
    id: 14,
    classes: "col-span-1 lg:col-start-1 lg:col-end-2 row-span-1 lg:row-start-5 lg:row-end-6 animated-border bb-0 br-0",
    component: <div className="content"></div>,
  },
  {
    id: 15,
    classes: "col-span-1 lg:col-start-2 lg:col-end-3 row-span-1 lg:row-start-5 lg:row-end-6 bb-0 br-0",
    component: <div className="content"></div>,
  },
  {
    id: 19,
    classes: "col-span-1 lg:col-start-6 lg:col-end-7 row-span-1 lg:row-start-5 lg:row-end-6 animated-border bb-0",
    component: <div className="content"></div>,
  },
  // ROW 6
  {
    id: 20,
    classes: "col-span-1 sm:col-span-2 lg:col-span-6 row-span-1 lg:row-start-6 lg:row-end-7",
    component: <div className="content"></div>,
  },
];