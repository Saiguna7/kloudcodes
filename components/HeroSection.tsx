import Image from "next/image";

import Link from "next/link";
import { Motion1, Typeanimation } from "./Motion";
import { Motion2 } from "./Motion";

const HeroSection = async () => {
  const imageBlur = await fetch("https://github.com/shadcn.png")
    .then((res) => res.arrayBuffer())
    .then((buffer) => Buffer.from(buffer).toString("base64"));
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <Motion1>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, We&apos;re{" "}
            </span>
            <br></br>
            <Typeanimation />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Expert freelance services tailored to your needs, delivered with
            precision and professionalism.
          </p>
          <div>
            <Link
              href="#projects"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 custom-pointer"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Our Projects
              </span>
            </Link>
          </div>
        </Motion1>
        <Motion2>
          <div
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
          >
            <Image
              priority
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              placeholder="blur"
              blurDataURL={`data:image/png;base64,${imageBlur}`}
            />
          </div>
        </Motion2>
      </div>
    </section>
  );
};

export default HeroSection;
