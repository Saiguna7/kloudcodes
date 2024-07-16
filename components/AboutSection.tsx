import Image from "next/image";
import Imagemotion from "./Imagemotion";
const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Imagemotion>
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="about"
            quality={100}
            priority
          />
        </Imagemotion>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2
            data-aos="fade-down"
            ata-aos-duration="3000"
            className="text-4xl font-bold text-white mb-4"
          >
            About Us
          </h2>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <p className="text-base lg:text-lg text-justify">
              <b>Greetings from KloudCodes!</b>
              <br></br>
              We are delighted to welcome you to our innovative world of
              software solutions. At KloudCodes, we&apos;re not just building
              products, we&apos;re crafting experiences that redefine the way
              you do business. Our startup journey is fueled by a relentless
              passion for creativity and a commitment to addressing the unique
              challenges faced by businesses today. From concept to code, our
              talented team is dedicated to delivering software that not only
              meets but exceeds your expectations. We understand the agility
              required in the fast-paced startup environment, and that&apos;s
              why our solutions are designed to be flexible, scalable, and
              tailored to your specific needs. Whether you&apos;re a budding
              entrepreneur or a seasoned startup, KloudCodes is here to empower
              you on your path to success. Join us on this exciting adventure,
              where innovation meets impact. Together, let&apos;s create a
              future where your business not only survives but thrives. Thank
              you for considering KoludCode as your technology partner. We look
              forward to collaborating with you and turning your visions into
              reality. Cheers to a future filled with possibilities! <br></br>
              <br></br>
              <strong>
                CEO -N.L VARUNKUMAR, Managing Lead N SHRAVAN KUMAR (Java Full
                Stack Developer), Managing Lead V SAI GUNA (Full Stack Developer
                Netxjs){" "}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
