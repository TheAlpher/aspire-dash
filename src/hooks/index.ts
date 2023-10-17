import { useState, useEffect } from "react";

interface winDimensions {
  height: number | null;
  width: number | null;
}
export const useWindowDimensions = (): winDimensions => {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = () => {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  let throttled: boolean = false;
  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", function () {
        if (!throttled) {
          handleResize();
          throttled = true;
          setTimeout(function () {
            throttled = false;
          }, 100);
        }
      });
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
};
