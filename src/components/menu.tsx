import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-4 left-4 z-50 text-gray-500 dark:text-white focus:outline-none"
          aria-label="Abrir Menu"
        >
          <Menu size={28} />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black transition-opacity duration-300 z-40"
          onClick={() => setOpen(false)}
          aria-label="Fechar Menu"
        />
      )}

      {isOpen && (
        <aside className="fixed top-0 left-0 w-2/3 sm:w-1/3 h-full bg-blue-600 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50">
          <div className="p-6 flex flex-col h-full">
            <button
              onClick={() => setOpen(false)}
              className="self-end text-white"
            >
              <X size={28} />
            </button>

            <nav className="mt-8 space-y-4 text-lg">
              <a
                href="#home"
                className="block hover:text-gray-300 transition"
                onClick={() => setOpen(false)}
              >
                Home
              </a>
              <a
                href="#projects"
                className="block hover:text-gray-300 transition"
                onClick={() => setOpen(false)}
              >
                Projetos
              </a>
              <a
                href="#contact"
                className="block hover:text-gray-300 transition"
                onClick={() => setOpen(false)}
              >
                Contato
              </a>
            </nav>
          </div>
        </aside>
      )}
    </>
  );
};
