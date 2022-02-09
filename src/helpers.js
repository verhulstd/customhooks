import { useEffect, useState } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [windowSize.width, windowSize.height];
}

export function useField(req) {
  const [value, setValue] = useState("");
  function onChange(e) {
    setValue(e.target.value);
  }
  return { value, onChange };
}

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: undefined,
    y: undefined,
  });
  useEffect(function () {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return function () {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return [mousePosition.x, mousePosition.y];
}
