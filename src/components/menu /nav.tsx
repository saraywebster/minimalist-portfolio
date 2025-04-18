import { useNav } from "./navcontext";
export const Nav = () => {
  const { setIsOpen } = useNav();

  const closeMenu = () => setIsOpen(false);

  return (
    <span
      className="space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 flex flex-col lg:flex-row text-2xl text-center text-indigo-950 "
      style={{ fontFamily: "var(--font-body)" }}
    >
      <a
        href="#home"
        className="hover:text-indigo-500 hover:scale-105transition-all duration-300"
        onClick={closeMenu}
      >
        Início
      </a>

      <a
        href="#about"
        className="hover:text-indigo-500  hover:scale-105 transition-all duration-300"
        onClick={closeMenu}
      >
        Sobre
      </a>

      <a
        href="#projects"
        className="hover:text-indigo-500 hover:scale-105  transition-all duration-300"
        onClick={closeMenu}
      >
        Projetos
      </a>

      <a
        href="#contact"
        className="hover:text-indigo-500  hover:scale-105 transition-all duration-300"
        onClick={closeMenu}
      >
        Contato
      </a>
    </span>
  );
};

export const MobileNav = () => {
  return (
    <nav className="w-full p-13 border-gray-50 border-2 flex flex-col relative justify-center items-center rounded-3xl bg-gray-50  text-indigo-950">
      <span className="flex flex-col">
        <Nav />
      </span>
    </nav>
  );
};

export const TabletNav = () => {
  return (
    <nav
      className="w-full rounded-3xl p-20 bg-gray-50 border-gray-50 border-2 relative flex flex-col justify-center items-center text-indigo-950
    "
    >
      <span className="flex flex-col">
        <Nav />
      </span>
    </nav>
  );
};

export const DesktopNav = () => {
  return (
    <nav className="w-full flex flex-row p-3 items-center justify-evenly bg-gray-50">
      <h1
        className="text-2xl md:block hidden text-indigo-950"
        style={{ fontFamily: "var(--font-title)" }}
      >
        Saraywebster
      </h1>
      <span className=" p-2">
        <Nav />
      </span>
    </nav>
  );
};
