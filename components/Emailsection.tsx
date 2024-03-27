
import LinkedinIcon from "@/public/linkedin-icon.svg";
import FacebookIcon from "@/public/facebook.svg";
import InstagramIcon from "@/public/instagram.svg";
import { MapPinIcon } from "@heroicons/react/24/solid";

import Image from "next/image";
import Link from "next/link";
import {PhoneIcon} from "@heroicons/react/24/solid"
import Formemail from "./Formemail";

export default function Emailsection() {
    
  return (
    <>
   <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">
      </div>
      <div data-aos="zoom-in-down" className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-justify">
          {" "}
          We&apos;re currently looking for new opportunities, our inbox is always
          open. Whether you have a question or just want to say hi, We&apos;re
          try my best to get back to you!
          <br></br>
          <MapPinIcon className='h-6 w-6 inline-flex text-white'/>
          <strong className="text-white">
            Jai Bharath Nagar, Nizampet, Hyderabad-500090
            </strong>
          <br></br>
            <PhoneIcon className="h-6 w-6 inline-flex text-white"/> <strong className="text-white">
              +91 9154548806
              </strong>
        </p>

        <div className="socials flex flex-row gap-2">
          <Link href="https://www.instagram.com/kloudcode?igsh=MWZjMHVhZTlhejV3dg==">
            <Image src={InstagramIcon}  alt="Instagram Icon" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100076056519394&mibextid=qi2Omg">
            <Image src={FacebookIcon}  alt="Facebook Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/sai-guna-vanam-817404251/">
            <Image src={LinkedinIcon}  alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div >
        <h1 data-aos="fade-down" className='text-center text-white'>Contact Us</h1>
        <Formemail/>
      </div>
    </section>

    </>
  )
}
