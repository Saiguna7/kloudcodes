import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "kloudcodes-(Services)",
  description:
    "KloudCodes: Comprehensive Business Automation Solutions | Boost Efficiency & Growth Elevate your business with KloudCodes' cutting-edge automation services. We offer tailored solutions in process, IT, customer service, and marketing automation to streamline operations and drive growth. Our automation services include: Robotic Process Automation (RPA),Workflow & Business Process Management,IT & Cloud Infrastructure Automation,DevOps Automation,Chatbots & Virtual Assistants,CRM & Marketing Automation Why choose KloudCodes:,Expert automation specialists,Customized solutions for your business needs,Proven results with measurable impact,Transparent communication and support,From assessment to implementation, we provide end-to-end automation services. Our approach ensures seamless integration, maximizing efficiency and ROI across your organization.Ready to revolutionize your business operations? Contact KloudCodes today for a consultation and unlock the power of automation for your enterprise.",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
