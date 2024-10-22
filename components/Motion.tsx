"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export function Motion1({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      //@ts-ignore
      className="col-span-8 place-self-center  text-center sm:text-left justify-self-start"
    >
      {children}
    </motion.div>
  );
}

export function Motion2({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        //@ts-ignore
        className="col-span-4  place-self-center mt-4 lg:mt-0"
      >
        {children}
      </motion.div>
    </>
  );
}
export function Typeanimation() {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Web Developer",
          1000,
          "Mobile App Developer",
          1000,
          "UI/UX Designer",
          1000,
        ]}
        wrapper="span"
        className="overflow-hidden"
        speed={50}
        repeat={Infinity}
      />
    </>
  );
}
