import { Sidebar } from "..//menu /sidebar";
import { About } from "../about/about";

export const Home = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 bg-gray-50 ">
      <header className="col-span-12 col-start-1">
        <Sidebar />
      </header>
      <aside className="md:col-span-10 md:col-start-2 col-span-10 col-start-2">
        <About />
      </aside>
      <footer className="col-span-12 col-start-1 bg-indigo-50">
        escrever o rodapé aqui
      </footer>
    </section>
  );
};
