import WindowSize from "./components/WindowSize";
import MousePosition from "./components/MousePosition";
import { useWindowSize, useMousePosition } from "./helpers";
import Form from "./components/Form";
const App = () => {
  const [w, h] = useWindowSize();
  const [x, y] = useMousePosition();
  return (
    <div>
      <h1>
        DIT IS ONZE APP({w}-{h}-{x}-{y})
      </h1>
      <WindowSize />
      <MousePosition />
      <Form />
    </div>
  );
};

export default App;
