import Member from "./member";
import NotFound from "./not-found";

const page = ({ params }: { params: { name: string } }) => {
  if (params.name === "sai-guna") {
    return (
      <>
        <Member
          lead="managing"
          name="Sai Guna Vanam"
          designation="Full Stack Developer & Managing"
          image="/images/saiguna.jpg"
          imageName="saiguna"
          about="Sai Guna"
          linkedin="https://www.linkedin.com/in/sai-guna-vanam-817404251/"
          p1="  is a Fullstack Developer who seamlessly bridges the gap
                  between front-end aesthetics and back-end functionality. His
                  deep understanding of both server-side and client-side
                  technologies ensures that our applications are not only
                  visually stunning but also robust and scalable."
          p2="Technologies: Sai is proficient in a wide range of programming
                  languages and frameworks, including JavaScript, Python, React
                  and Nextjs. He's also skilled in database management with
                  PostgrlSQL and MongoDB and Prisma, and has a strong grasp of
                  platforms like Supabase."
          p3=" Being a Fullstack Developer allows me to work on every aspect
                  of an application, from concept to deployment. I love the
                  creative freedom this role provides, and I'm passionate
                  about building products that make a real difference in
                  people's lives."
        />
      </>
    );
  }
  if (params.name === "shravan-kumar") {
    return (
      <>
        <Member
          lead="managing"
          name="Shravan Kumar Nagapuri"
          designation="Java Full Stack Developer & Managing"
          image="/images/shravan.jpg"
          imageName="shravan"
          about="Shravan Kumar"
          linkedin="https://www.linkedin.com/in/shravan-nagapuri-46803a16b/"
          p1=" is a seasoned Frontend Developer with a passion for crafting visually stunning and highly responsive user interfaces. With over 5 years of experience, she has honed her skills in turning complex design concepts into seamless web experiences that engage and delight users."
          p2="Technologies:Shravan is proficient in HTML, CSS, and JavaScript, and excels in using modern frameworks and libraries like React, Vue.js, and Angular. She has a keen eye for design and is skilled in working with tools like Adobe XD, Figma, and Sketch to translate designs into code with pixel-perfect precision."
          p3="I see the frontend as the bridge between users and technology. My goal is to create interfaces that are not only functional but also enjoyable to interact with. The web is a constantly evolving landscape, and I love being a part of that evolution."
        />
      </>
    );
  }
  if (params.name === "sandeep") {
    return (
      <>
        <Member
          lead="Designer"
          name="Sandeep"
          designation="Graphic Designer"
          image="/images/sandeep.jpg"
          imageName="sandeep"
          about="Sandeep"
          p1="  is a creative powerhouse with a knack for translating ideas into visually compelling designs. With over of experience in the field, He is specializes in brand identity, digital illustrations, and print design. His keen sense of aesthetics and attention to detail make him a vital part of our creative team.

"
          p2="Sandeep is proficient in a wide range of design tools, including Adobe Creative Suite (Photoshop, Illustrator, InDesign), Adobe and CorelDRAW. He's also skilled in motion graphics using AI After Effects and Premiere Pro, adding a dynamic edge to his design projects."
          p3="Design is more than just aesthetics; it's about communication and storytelling. I'm passionate about creating visuals that not only capture attention but also leave a lasting impression. Every project is an opportunity to challenge myself and create something truly unique."
        />
      </>
    );
  }
  if (params.name !== "sandeep" || "sai-guna" || "shravan-kumar") {
    return (
      <>
        <NotFound />
      </>
    );
  }
};

export default page;
