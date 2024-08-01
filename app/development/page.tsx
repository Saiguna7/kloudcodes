import Footer from "@/components/Footer";
import FullStackdevelopment from "@/components/FullStackdevelopment";
import Navbardiff from "@/components/Navbardiff";

const page = () => {
  return (
    <main className="flex min-h-screen  overflow-hidden  flex-col bg-[#121212]">
      <Navbardiff />
      <div className="container min-h-screen mt-24 mx-auto px-12 py-4">
        <FullStackdevelopment />
      </div>
      <Footer />
    </main>
  );
};

export default page;
