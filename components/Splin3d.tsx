"use client";
import { useEffect, useState } from "react";
import anime from "animejs";
import Image from "next/image";
type Splin3dProps = {
  finishloading: () => void;
};

export default function Splin3d({ finishloading }: Splin3dProps) {
  const [isloaded, setLoaded] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishloading(),
    });
    loader
      .add({
        targets: "#spline",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#spline",
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#spline",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#spline",
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 10);
    animate();
    return () => clearTimeout(timeout);
  });

  return (
    <div
      className={`flex h-screen items-center justify-center w-screen ${isloaded} bg-black`}
    >
      <Image
        priority
        id="spline"
        src="/images/hero-image.png"
        width={200}
        height={200}
        alt="hero"
        quality={100}
      />
    </div>
  );
}
