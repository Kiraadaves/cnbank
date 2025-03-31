"use client";
import { useEffect, useRef } from "react";

const Ball = ({ className }: { className: string }) => {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ball = ballRef.current;
    if (!ball) return;

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;

    const animate = () => {
      if (!ball) return;

      x += dx;
      y += dy;

      if (x < 0 || x > window.innerWidth) dx = -dx;
      if (y < 0 || y > window.innerHeight) dy = -dy;

      ball.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <div ref={ballRef} className={`absolute ${className}`} />;
};

export default Ball;
