import { useEffect, useState } from "react";

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    // to react to resize changes
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return screenWidth;
}
