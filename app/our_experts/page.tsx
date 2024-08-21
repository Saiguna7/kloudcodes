import DigitMarketing from "@/components/DigitMarketing";
import Exports from "@/components/Exports";
import Footer from "@/components/Footer";
import Navbardiff from "@/components/Navbardiff";

const page = () => {
  return (
    <main className="flex min-h-screen  overflow-hidden  flex-col bg-[#121212]">
      <Navbardiff />
      <div className="w-full min-h-screen mt-[5.5rem] ">
        <Exports />
      </div>
      <Footer />
    </main>
  );
};

export default page;
