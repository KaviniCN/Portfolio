import { useState, useEffect } from "react";
import WebSFA from "./SFAWeb";
import MobileSFA from "./SFAMobile";

function SFA() {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return <div className="w-full bg-white">{isMobile ? <MobileSFA /> : <WebSFA />}</div>;
}

export default SFA;
