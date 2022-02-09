import WindowSize from "./components/WindowSize";
import { useWindowSize } from "./helpers";
const App = () => {
  const [w, h] = useWindowSize();
  return (
    <div>
      <h1>
        DIT IS ONZE APP({w},{h})
      </h1>
      <WindowSize />
    </div>
  );
};

export default App;
