import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { DesktopNav, MobileNav, TabletNav } from "./nav";
import { useNav } from "./navcontext";
export const Sidebar = () => {
  const { isOpen, setIsOpen } = useNav();

  return (
    <div className="z-50 relative">
      <span className="hidden lg:block bg-gray-50">
        <DesktopNav />
      </span>

      <span className="block lg:hidden">
        <section
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer bg-indigo-200 p-1 w-1/6 rounded-2xl flex justify-center items-center right-1 top-1 z-50 opacity-80 backdrop-blur-2xl fixed border-2 border-indigo-100 "
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {isOpen ? (
                <X size={32} color="black" />
              ) : (
                <Menu size={32} color="black" />
              )}
            </motion.div>
          </AnimatePresence>
        </section>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 "
            >
              <span className="block md:hidden rounded-3xl shadow-md">
                <MobileNav />
              </span>

              <span className="hidden md:block lg:hidden shadow-md rounded-3xl">
                <TabletNav />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </span>
    </div>
  );
};
