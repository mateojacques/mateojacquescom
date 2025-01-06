import "./App.css";
import GridItem from "./components/grid/GridItem";
import { gridMap } from "./utils/gridMap";

const App = () => (
  <main id="main">
    {gridMap.map((item) => (
      <GridItem key={item.id} {...item} />
    ))}
  </main>
);

export default App;
