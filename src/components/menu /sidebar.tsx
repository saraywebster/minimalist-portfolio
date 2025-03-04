import { Menu } from "lucide-react";
import { useState } from "react";
import { DesktopNav, MobileNav } from "./nav";

export const Sidebar = ({}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-5 left-5 md:left-7 z-50 text-white focus:outline-none transition-colors bg-purple-800 p-2 opacity-85 rounded-full lg:hidden md:p-4"
          aria-label="Abrir Menu"
        >
          <Menu size={30} />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 transition-opacity duration-300 z-40 lg:hidden"
          onClick={() => setOpen(false)}
          aria-label="Fechar Menu"
        />
      )}

      {isOpen && <MobileNav setOpen={setOpen} />}

      <aside className="hidden lg:block h-screen shadow-md w-1/7 fixed left-0 bg-gray-200 ">
        <DesktopNav setOpen={setOpen} />
      </aside>
    </>
  );
};
