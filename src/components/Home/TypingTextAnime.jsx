import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingTextAnime = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-end Developer", "React Developer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      cursorChar: "_",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <span
      className="text-zinc-500 font-bold text-xl sm:text-2xl md:text-4xl tracking-wide"
      ref={el}
    ></span>
  );
};

export default TypingTextAnime;
