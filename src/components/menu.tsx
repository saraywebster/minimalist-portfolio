import { Menu, X } from "lucide-react";
import { useState } from "react";
export const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className="text-xl font-bold text-gray-900 dark:text-white"
              style={{ fontFamily: "var(--font-title)" }}
            >
              saraywebster.dev
            </div>

            <button
              onClick={() => setOpen(!isOpen)}
              className="text-gray-500 dark:text-white focus:outline-none md:hidden"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <aside className=" ">
          <button>
            <X size={28} />
          </button>

          <nav>
            <a href="#home">Home</a>
            <a href="#projects">Projetos</a>
            <a href="#cotact">Contato</a>
          </nav>
        </aside>
      )}
    </>
  );
};
