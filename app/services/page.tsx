import Footer from "@/components/Footer";
import Navbardiff from "@/components/Navbardiff";
import Servicesauto from "@/components/Servicesauto";

const page = () => {
  return (
    <main className="flex min-h-screen  overflow-hidden  flex-col bg-[#121212]">
      <Navbardiff />
      <div className="container min-h-screen mt-24 mx-auto px-12 py-4">
        <Servicesauto />
      </div>
      <Footer />
    </main>
  );
};

export default page;
