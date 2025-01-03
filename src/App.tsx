import { ReactNode } from "react";
import "./App.css";

const GridItem = ({ col, row, component, classes }: { col: string; row: string; component: ReactNode, classes?: string;}) => (
  <div
    className={`${`grid-item ${classes || ""}`.trim()}`}
    style={{
      gridColumn: col,
      gridRow: row,
    }}
  >
    {component}
  </div>
);

const App = () => {
  const gridItems = [
    // ROW 1
    { id: 1, col: "1 / 3", row: "1 / 2", classes: "animated-border", component: <div className="content"></div> },
    { id: 2, col: "3 / 4", row: "1 / 2", component: <div className="content"></div> },
    { id: 3, col: "4 / 5", row: "1 / 2", component: <div className="content"></div> },
    { id: 4, col: "5 / 6", row: "1 / 2", component: <div className="content"></div> },
    { id: 5, col: "6 / 7", row: "1 / 2", component: <div className="content"></div> },
    // ROW 2
    { id: 6, col: "1 / 2", row: "2 / 3", component: <div className="content"></div> },
    { id: 7, col: "2 / 3", row: "2 / 3", component: <div className="content"></div> },
    { id: 8, col: "3 / 6", row: "2 / 5", classes: "animated-border", component: <div className="content"></div> },
    { id: 9, col: "6 / 7", row: "2 / 3", component: <div className="content"></div> },
    // ROW 3
    { id: 10, col: "1 / 3", row: "3 / 4", component: <div className="content"></div> },
    { id: 11, col: "6 / 7", row: "3 / 5", component: <div className="content"></div> },
    // ROW 4
    { id: 12, col: "1 / 2", row: "4 / 5", component: <div className="content"></div> },
    { id: 13, col: "2 / 3", row: "4 / 5", component: <div className="content"></div> },
    { id: 14, col: "1 / 2", row: "5 / 6", component: <div className="content"></div> },
    // ROW 5
    { id: 15, col: "2 / 3", row: "5 / 6", component: <div className="content"></div> },
    { id: 16, col: "3 / 4", row: "5 / 6", component: <div className="content"></div> },
    { id: 17, col: "4 / 5", row: "5 / 6", component: <div className="content"></div> },
    { id: 18, col: "5 / 6", row: "5 / 6", component: <div className="content"></div> },
    { id: 19, col: "6 / 7", row: "5 / 6", component: <div className="content"></div> },
    // ROW 5
    { id: 20, col: "1 / 7", row: "6 / 7", component: <div className="content"></div> },
  ];

  return (
    <main id="main">
      {gridItems.map((item) => (
        <GridItem {...item} />
      ))}
    </main>
  );
}

export default App;
