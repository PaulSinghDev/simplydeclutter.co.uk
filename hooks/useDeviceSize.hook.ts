import { useState, useEffect } from "react";

const useDeviceSize = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  let timeout: ReturnType<typeof setTimeout>;

  // Debounced resize handle to limit number of renders
  const handleWindowResize = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 500);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return { width, height };
};

export { useDeviceSize };
