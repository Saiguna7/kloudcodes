import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "kloudcodes-(fullstack-development)",
  description:
    "KloudCodes: Expert Full-Stack Development Services | Web & Mobile Solutions Discover comprehensive full-stack development services at KloudCodes. Our expert team delivers tailored web and mobile solutions using cutting-edge technologies like Next.js, React, Vue.js, and Node.js. From responsive front-end design to robust back-end development, we handle every aspect of your project.Our process includes: Detailed consultation and planning ,Engaging UI/UX design ,Powerful back-end architecture ,Seamless API integration ,Rigorous testing and quality assurance ,Reliable deployment and ongoing support Choose KloudCodes for: Experienced developers Customized solutions Top-quality assurance On-time, on-budget delivery Transform your ideas into reality with our full-stack development expertise. Contact KloudCodes today for innovative, scalable, and high-performance digital solutions.",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
