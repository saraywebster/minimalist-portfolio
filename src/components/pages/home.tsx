import { Sidebar } from "..//menu /sidebar";
import { About } from "../about/about";
import { Contact } from "../contact/contact";
import { Footer } from "../footer/footer";

export const Home = () => {
  return (
    <>
      <main className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 bg-gray-50 ">
        <header className="col-span-12 col-start-1">
          <Sidebar />
        </header>
        <aside className="col-span-10 col-start-2 space-y-10">
          <About />
          <Contact />
        </aside>
      </main>
      <Footer />
    </>
  );
};
