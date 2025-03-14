export const Nav = () => {
  return (
    <span className="space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 flex flex-col lg:flex-row font-bold text-xl text-center">
      <a
        href="#home"
        className="hover:text-orange-500 hover:scale-105 hover:border-b-2 hover:border-orange-500 transition-all duration-300"
      >
        Início
      </a>

      <a
        href="#sobre"
        className="hover:text-orange-500  hover:scale-105 hover:border-b-2 hover:border-orange-500 transition-all duration-300"
      >
        Sobre
      </a>

      <a
        href="#projetos"
        className="hover:text-orange-500 hover:scale-105 hover:border-b-2 hover:border-orange-500 transition-all duration-300"
      >
        Projetos
      </a>

      <a
        href="#contato"
        className="hover:text-orange-500  hover:scale-105 hover:border-b-2 hover:border-orange-500 transition-all duration-300"
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

export const DesktopNav = () => {
  return (
    <nav className="w-full flex flex-row align-center justify-around shadow-md p-2">
      <h1 className="text-2xl font-bold md:block hidden text-blue-950 p-2">
        Sara Ferreira
      </h1>
      <span className=" p-2">
        <Nav />
      </span>
    </nav>
  );
};
