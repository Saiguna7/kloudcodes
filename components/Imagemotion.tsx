"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Imagemotion({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scale = useTransform(scrollYProgress, [1, 0], [1, 0.5]);
  const opticty = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scale,
          opacity: opticty,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
