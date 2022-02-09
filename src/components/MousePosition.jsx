import { useMousePosition } from "../helpers";

const MousePosition = () => {
  const [x, y] = useMousePosition();

  return (
    <div>
      {x ||
        (x === 0 && (
          <div>
            x: {x} en y: {y}
          </div>
        ))}
    </div>
  );
};

export default MousePosition;
