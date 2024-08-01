import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "kloudcodes-(WEB & MOBILE APPLICTATION)",
  description:
    "KloudCodes: Expert Web & Mobile App Development | Custom Solutions Transform your business with KloudCodes' cutting-edge web and mobile application development services. We deliver custom, scalable, and user-centric solutions that drive growth and enhance user engagement. Our services include: Custom Web Applications, E-commerce Solutions ,CMS Development ,Progressive Web Apps (PWAs),iOS and Android Mobile Apps,Cross-Platform Mobile Apps,Why choose KloudCodes:Experienced development team, Customer-centric approach ,Innovative, tailored solutions,Transparent communicationFrom concept to deployment, we offer end-to-end development services. Our process ensures high-quality, secure applications that align with your business goals and provide seamless user experiences. Ready to bring your app idea to life? Contact KloudCodes today for a consultation and let's build the future of your business together.",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
