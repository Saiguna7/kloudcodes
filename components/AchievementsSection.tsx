import Image from "next/image";
import Imagemotion from "./Imagemotion";
import Link from "next/link";
const AchievementsSection = () => {
  return (
    <section className="text-white" id="services">
      <div className="md:grid md:grid-cols-2 gap-8 items-scenter py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 h-full">
          <h2
            data-aos="fade-down"
            ata-aos-duration="3000"
            className="text-4xl font-bold text-white mb-4 text-center"
          >
            Our Services
          </h2>
          <div className="grid lg:grid-cols-2 md:grid-rows-3 grid-cols-1 gap-4 md:grid-cols-1 lg:w-[650px]">
            <div className="box ">
              <span></span>
              <div className="m-4 relative z-[2]">
                <div className="flex justify-center mb-2">
                  <Image
                    src="/images/Full Stack Logo.jpeg"
                    alt="log"
                    width={100}
                    height={100}
                    priority
                    quality={100}
                  />
                </div>
                <h1 className="text-center  md:text-md text-sm font-bold">
                  FULLSTACK DEVELOPMENT
                </h1>
                <p className="text-sm md:text-md text-center  mt-2 mb-10 leading-8">
                  At KLOUDCODES, we specialize in full stack development,
                  offering comprehensive solutions that cover both the front-end
                  and back-end of web applications. Our team of skilled
                  developers is equipped to bring your ideas to life with
                  seamless integration, functionality, and user experience.
                </p>
                <Link
                  href="/development"
                  className="md:pl-24 pl-20 text-sm text-transparent bg-clip-text bg-gradient-to-r from-[hsla(197,100%,64%,1)] to-[hsla(339,100%,55%,1)] 
                  custom-pointer
                  "
                >
                  Know more-{">"}
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden shadow-lg rounded-[8px] box1 ">
              <span></span>
              <div className="m-4 relative z-[2]">
                <div className="flex justify-center mb-2">
                  <Image
                    src="/images/webapplication.png"
                    alt="log"
                    width={75}
                    height={50}
                    priority
                    quality={100}
                  />
                </div>
                <h1 className="text-center  md:text-md text-sm font-bold">
                  WEB & MOBILE APPLICTATION
                </h1>
                <p className="text-sm md:text-md text-center  mt-2 mb-10 leading-8">
                  we specialize in creating innovative and user-friendly web and
                  mobile applications tailored to your business needs. Our team
                  of experienced developers and designers is dedicated to
                  delivering high-quality solutions that help you achieve your
                  goals and connect with your audience effectively.
                </p>
                <Link
                  href="/web"
                  className="md:pl-24 pl-20 mt-2 text-sm text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-[rgba(102,102,102,0.75)] custom-pointer"
                >
                  Know more-{">"}
                </Link>
              </div>
            </div>
            <div className="relative shadow-lg rounded-[8px] box2">
              <span></span>
              <div className="m-4 relative z-[2]">
                <div className="flex justify-center mb-2">
                  <Image
                    src="/images/digital.jpg"
                    alt="log"
                    width={75}
                    height={50}
                    priority
                    quality={100}
                  />
                </div>
                <h1 className="text-center  md:text-md text-sm font-bold">
                  DIGITAL MARKETING
                </h1>
                <p className="text-sm md:text-md text-center  mt-2 mb-12 leading-[1.6rem]">
                  In today&apos;s fast-paced digital world, standing out
                  requires more than just a presence; it requires a strategy. At
                  KLOUDCODES, we provide comprehensive digital marketing
                  services designed to enhance your online visibility, engage
                  your audience, and drive measurable results. Our team of
                  experts is committed to helping your business succeed in the
                  digital landscape.
                </p>
                <Link
                  href="/marketing"
                  className="md:pl-24 pl-20  mt-2 text-sm text-transparent bg-clip-text bg-gradient-to-r 
                  from-[#1982c4] to-[#ff6700] custom-pointer"
                >
                  Know more-{">"}
                </Link>
              </div>
            </div>
            <div className="relative shadow-lg rounded-[8px] box3">
              <span></span>
              <div className="m-4 relative z-[2]">
                <div className="flex justify-center mb-2">
                  <Image
                    src="/images/services.jpg"
                    alt="log"
                    width={75}
                    height={50}
                    priority
                    quality={100}
                  />
                </div>
                <h1 className="text-center  md:text-md text-sm font-bold">
                  MANAGED SERVICES
                </h1>
                <p className="text-sm md:text-md text-center  mt-2 mb-8 leading-[1.6rem]">
                  In today&apos;s fast-paced digital landscape, businesses
                  require reliable and efficient IT solutions to stay
                  competitive. At KLOUDCODES, we offer comprehensive managed IT
                  services that empower your organization to focus on what it
                  does best—growing your business. Our team of IT experts is
                  dedicated to providing proactive, reliable, and cost-effective
                  solutions tailored to meet your specific needs.
                </p>
                <Link
                  href="/services"
                  className="md:pl-24 pl-20  mt-2 text-sm text-transparent bg-clip-text bg-gradient-to-r 
                  from-[#1982c4] to-[#0a497c] custom-pointer"
                >
                  Know more-{">"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Imagemotion>
          <Image
            src="/images/service.png"
            width={12000}
            height={12000}
            alt="service"
            quality={100}
            priority
          />
        </Imagemotion>
      </div>
      <Imagemotion>
        <Image
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src="/images/projects/1.png"
          width={10000}
          height={10000}
          alt="projects1"
          quality={100}
          priority
        />
      </Imagemotion>
      <Image
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        src="/images/projects/4.png"
        width={10000}
        height={1000}
        alt="projects2"
        quality={100}
        priority
      />
    </section>
  );
};

export default AchievementsSection;
