import Image from "next/image";
import Link from "next/link";
import React from "react";

const Exports = () => {
  return (
    <div className="relative w-full">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute md:-bottom-96 -bottom-72 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <section className="bg-white w-full h-[300px]">
        <h1>king</h1>
      </section>
      <section className="w-full mx-[10px] mt-[20px] mb-[10px]">
        <div className="flex max-md:flex-col w-full md:justify-between space-y-4 text-white md:px-[60px]">
          <h1 className="text-3xl font-semibold md:text-4xl">Our Experts</h1>
          <Link
            href={"/#contact"}
            className="custom-pointer flex items-center gap-[10px]"
          >
            <h1 className="font-bold text-sm md:text-lg">Contact us</h1>
            <p className="hover:bg-purple-800 hover:translate-x-1 hover:transition-all duration-500 ease-in-out bg-purple-600 text-white font-semibold px-[3px] md:px-2 md:py-[1px]">
              {">"}
            </p>
          </Link>
        </div>
        <div className="flex max-md:flex-col md:gap-[200px] gap-[10px] mt-[30px] md:px-[60px]">
          <div className="flex text-white gap-[20px]">
            <div className="h-[140px] w-[130px] overflow-hidden bg-white">
              <Image
                src="/images/sandeep.jpg"
                alt="sandeep"
                width={130}
                height={140}
                objectFit="codemod"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="font-semibold text-lg">V. Saiguna</h1>
              <p>Full Stack Developer</p>
            </div>
            <div className="hidden  flex-col items-center justify-center">
              <p>
                <strong>Meet Our Expert : </strong>
                Sai Gunna - Fullstack Developer Expertise: With over of
                experience in web development, Sai Gunna is a Fullstack
                Developer who seamlessly bridges the gap between front-end
                aesthetics and back-end functionality. His deep understanding of
                both server-side and client-side technologies ensures that our
                applications are not only visually stunning but also robust and
                scalable.
              </p>
              <p>
                <strong>Technologies : </strong>
                Sai is proficient in a wide range of programming languages and
                frameworks, including JavaScript, Python, Node.js, React and
                Angular. He&apos;s also skilled in database management with
                MySQL and MongoDB, and has a strong grasp of cloud platforms
                like AWS and Azure.
              </p>
              <p>
                Being a Fullstack Developer allows me to work on every aspect of
                an application, from concept to deployment. I love the creative
                freedom this role provides, and I&apos;m passionate about
                building products that make a real difference in people&apos;s
                lives.
              </p>
            </div>
          </div>
          <div className="flex text-white md:items-center">
            <div className="flex  gap-[15px]">
              <div className="h-[130px] w-[130px] overflow-hidden bg-white">
                <Image
                  src="/images/sandeep.jpg"
                  alt="sandeep"
                  width={130}
                  height={130}
                />
              </div>
              <div className="flex flex-col items-start">
                <h1>V. Saiguna</h1>
                <p>Full Stack Developer</p>
              </div>
            </div>
            <div className="hidden flex-col items-center justify-center">
              <p>
                <strong>Meet Our Expert : </strong> Sai Gunna - Fullstack
                Developer Expertise: With over of experience in web development,
                Sai Gunna is a Fullstack Developer who seamlessly bridges the
                gap between front-end aesthetics and back-end functionality. His
                deep understanding of both server-side and client-side
                technologies ensures that our applications are not only visually
                stunning but also robust and scalable.
              </p>
              <p>
                <strong>Technologies : </strong> Sai is proficient in a wide
                range of programming languages and frameworks, including
                JavaScript, Python, Node.js, React and Angular. He&apos;s also
                skilled in database management with MySQL and MongoDB, and has a
                strong grasp of cloud platforms like AWS and Azure.
              </p>
              <p>
                Being a Fullstack Developer allows me to work on every aspect of
                an application, from concept to deployment. I love the creative
                freedom this role provides, and I&apos;m passionate about
                building products that make a real difference in people&apos;s
                lives.
              </p>
            </div>
          </div>
          <div className="flex text-white items-center">
            <div className="flex gap-[15px]">
              <div className="h-[130px] w-[130px] overflow-hidden bg-white">
                <Image
                  src="/images/sandeep.jpg"
                  alt="sandeep"
                  width={130}
                  height={130}
                />
              </div>
              <div className="flex flex-col items-start">
                <h1>V. Saiguna</h1>
                <p>Full Stack Developer</p>
              </div>
            </div>
            <div className="hidden flex-col items-center justify-center">
              <p>
                <strong>Meet Our Expert : </strong> Sai Gunna - Fullstack
                Developer Expertise: With over of experience in web development,
                Sai Gunna is a Fullstack Developer who seamlessly bridges the
                gap between front-end aesthetics and back-end functionality. His
                deep understanding of both server-side and client-side
                technologies ensures that our applications are not only visually
                stunning but also robust and scalable.
              </p>
              <p>
                <strong>Technologies : </strong> Sai is proficient in a wide
                range of programming languages and frameworks, including
                JavaScript, Python, Node.js, React and Angular. He&apos;s also
                skilled in database management with MySQL and MongoDB, and has a
                strong grasp of cloud platforms like AWS and Azure.
              </p>
              <p>
                Being a Fullstack Developer allows me to work on every aspect of
                an application, from concept to deployment. I love the creative
                freedom this role provides, and I&apos;m passionate about
                building products that make a real difference in people&apos;s
                lives
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exports;
