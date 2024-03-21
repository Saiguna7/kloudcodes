
import Image from "next/image";
const AchievementsSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-scenter py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-base lg:text-lg text-justify">
            We are a full stack web developer with a passion for creating
            interactive and responsive web applications. we have experience working with JavaScript, Reactjs,nextjs, Node.js, NoSQL,   HTML, CSS, and Git. We are a quick learner and We are always looking to expand my knowledge and skill set. We are a team player and We are excited to work with others to create amazing applications. Web development, web application, mobile application, UI UX design ERP(enterprise resource planning) LMS (Learning Management System) software development We possess the versatility to tackle diverse challenges in web development. Our passion lies in creating interactive and responsive applications that captivate users and deliver
            unparalleled experiences.
          </p>
        </div>
        <Image
          src="/images/service.png"
          width={12000}
          height={12000}
          alt="service"
          quality={100}
          priority
        />
      </div>
      <Image
        src="/images/projects/1.png"
        width={10000}
        height={10000}
        alt="projects1"
        quality={100}
        priority
      />
      <br />
      <br />
      <Image
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