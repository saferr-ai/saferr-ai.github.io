"use client";
import React, { useEffect, useRef } from "react";



const Background = ({ classid }) => {
  const appRef = useRef(null); // Explicitly typing the ref

  useEffect(() => {
    if (appRef.current) {
      appRef.current.style.setProperty("--mouse-x", `90%`); // Default to center
      appRef.current.style.setProperty("--mouse-y", `90%`); // Default to center
    }

    const moveGradient = (event) => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      const mouseX = Math.round((event.pageX / winWidth) * 100);
      const mouseY = Math.round((event.pageY / winHeight) * 100);

      if (appRef.current) {
        appRef.current.style.setProperty("--mouse-x", `${mouseX}%`);
        appRef.current.style.setProperty("--mouse-y", `${mouseY}%`);
      }
    };

    document.addEventListener("mousemove", moveGradient);
    return () => document.removeEventListener("mousemove", moveGradient);
  }, []);

  return (
    <div className="w-full h-full relative z-0">
      <div
        id={classid}
        className={classid}
        ref={appRef}
        data-scroll-container
      ></div>
    </div>
  );
};

export default Background;