import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const cursorPointer = cursorRef.current;
    if (!cursorPointer) return;

    let mouseX = 0,
      mouseY = 0;
    let posX = 0,
      posY = 0;
    const speed = 0.1;

    const cursorWidth = cursorPointer.offsetWidth;
    const cursorHeight = cursorPointer.offsetHeight;

    const updateCursorPosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const smoothMove = () => {
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;

      cursorPointer.style.transform = `translate(${posX - cursorWidth / 2}px, ${posY - cursorHeight / 2}px)`;
      animationFrameRef.current = requestAnimationFrame(smoothMove);
    };

    const handleMouseEnter = () => {
      cursorPointer.classList.add("grow");
    };

    const handleMouseLeave = () => {
      cursorPointer.classList.remove("grow");
    };

    document.addEventListener("mousemove", updateCursorPosition);
    animationFrameRef.current = requestAnimationFrame(smoothMove);

    const links = document.querySelectorAll("a, .links");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor_pointer">.</div>
  );
};

export default Cursor;