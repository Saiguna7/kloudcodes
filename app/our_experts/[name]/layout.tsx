import { Metadata } from "next";

export const metadata: Metadata = {
  title: "kloudcodes-experts",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
