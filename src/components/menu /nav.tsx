import { Book, Contact, Home, X } from "lucide-react";

export const Nav = ({ setOpen }: { setOpen?: (open: boolean) => void }) => {
  return (
    <nav
      className="col-span-4 row-start-2 row-span-2 grid grid-cols-4 grid-rows-6 gap-4 text-gray-800 p-4"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <a
        href="#home"
        className="col-span-2 row-span-2 col-start-2 row-start-1 p-2 flex items-center gap-2 hover:text-purple-500"
        onClick={() => setOpen?.(false)}
      >
        <Home size={28} />
        <span>Home</span>
      </a>
      <a
        href="#projects"
        className="col-span-2 row-span-2 col-start-2 row-start-3 p-2 flex items-center gap-2 hover:text-purple-500"
        onClick={() => setOpen?.(false)}
      >
        <Book size={28} />
        <span>Projetos</span>
      </a>
      <a
        href="#contact"
        className="col-span-2 row-span-2 col-start-2 row-start-5 p-2 flex items-center gap-2 hover:text-purple-500"
        onClick={() => setOpen?.(false)}
      >
        <Contact size={28} />
        <span>Contato</span>
      </a>
    </nav>
  );
};

export const MobileNav = ({
  setOpen,
}: {
  setOpen: (open: boolean) => void;
}) => {
  return (
    <aside
      className="fixed top-0 left-0 w-2/3 md:w-2/4 h-full bg-gray-100 text-gray-800
      shadow-md translate-x-0 transform transition-transform duration-300 ease-in-out z-50"
    >
      <div className="grid grid-cols-4 grid-rows-8 gap-5 p-6 h-full">
        <button
          onClick={() => setOpen(false)}
          className="text-purple-800 p-2 transition col-span-2 row-start-1 col-start-4"
        >
          <X
            size={30}
            className="transition-transform transform hover:scale-125 hover:text-purple-600"
          />
        </button>
        <Nav setOpen={setOpen} />
      </div>
    </aside>
  );
};

export const DesktopNav = () => {
  return (
    <div className="w-full">
      <Nav />
    </div>
  );
};
