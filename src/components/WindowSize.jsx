import { useWindowSize } from "../helpers";

const WindowSize = () => {
  const [w, h] = useWindowSize();
  return (
    <p>
      width : {w} en height : {h}
    </p>
  );
};

export default WindowSize;
