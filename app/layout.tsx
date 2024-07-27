import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import Clientprovider from "@/components/Clientprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KloudCodes",
  description:
    "Kloudcodes is a cutting-edge software company specializing in innovative solutions for businesses of all sizes. With a focus on new technologies, we offer a comprehensive suite of services including web development, mobile app development, AI integration, customized  ERP, LMS & digital marketing solutions. Our team of skilled professionals is dedicated to delivering high-quality, customized software solutions tailored to meet the unique needs of each client. At Kloudcodes, we are committed to excellence, creativity, and customer satisfaction, helping our clients thrive in today's fast-paced digital landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} custom-scrollbar`}>
        <Provider>
          <Clientprovider>{children}</Clientprovider>
        </Provider>
      </body>
    </html>
  );
}
