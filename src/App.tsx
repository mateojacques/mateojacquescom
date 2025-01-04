import { ReactNode } from "react";
import "./App.css";
import { gridMap } from "./utils/gridMap";

const GridItem = ({
  component,
  classes,
}: {
  component: ReactNode;
  classes?: string;
}) => (
  <div className={`${`grid-item ${classes || ""}`.trim()}`}>
    <div className="content">{component}</div>
  </div>
);

const App = () => (
  <main id="main">
    {gridMap.map((item) => (
      <GridItem {...item} />
    ))}
  </main>
);

export default App;
