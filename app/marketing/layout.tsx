import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "kloudcodes-(Digital Marketing)",
  description:
    "KloudCodes: Comprehensive Digital Marketing Services | Drive Growth & ROI Elevate your online presence with KloudCodes' expert digital marketing services. We offer tailored strategies in SEO, PPC, social media, content marketing, email campaigns, and CRO to boost your brand's visibility and drive conversions. Our services include:  Search Engine Optimization (SEO) ,Pay-Per-Click (PPC) Advertising ,Social Media Marketing ,Content Marketing ,Email Marketing ,Conversion Rate Optimization (CRO) Why choose KloudCodes: Experienced digital marketing professionals, Customized strategies for your business goals,Data-driven approach for measurable results,Transparent communication and reporting From local SEO to global campaigns, we help businesses of all sizes thrive online. Our proven approach includes in-depth analysis, strategic planning, precise implementation, and continuous optimization. Ready to amplify your digital presence? Contact KloudCodes today for a consultation and unlock your business's full potential in the digital landscape.",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
