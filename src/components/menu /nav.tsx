export const Nav = () => {
  return (
    <span
      className="space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 flex flex-col lg:flex-row text-2xl text-center text-blue-950"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <a
        href="#home"
        className="hover:text-blue-500 hover:scale-105transition-all duration-300"
      >
        Início
      </a>

      <a
        href="#sobre"
        className="hover:text-blue-500  hover:scale-105 transition-all duration-300"
      >
        Sobre
      </a>

      <a
        href="#projetos"
        className="hover:text-blue-500 hover:scale-105  transition-all duration-300"
      >
        Projetos
      </a>

      <a
        href="#contato"
        className="hover:text-blue-500  hover:scale-105 transition-all duration-300"
      >
        Contato
      </a>
    </span>
  );
};

export const MobileNav = () => {
  return (
    <nav className="w-full h-screen flex flex-col relative justify-center items-center bg-blue-100  text-blue-950">
      <span className="flex flex-col">
        <Nav />
      </span>
    </nav>
  );
};

export const TabletNav = () => {
  return (
    <nav
      className="w-full max-h-1/12 p-5 bg-blue-100 relative flex flex-col justify-center items-center text-blue-950 shadow-md
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
    <nav className="w-full flex flex-row p-3 items-center justify-evenly shadow-md">
      <h1
        className="text-2xl md:block hidden text-blue-950"
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
