import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { DesktopNav, MobileNav, TabletNav } from "./nav";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span className="hidden lg:block bg-blue-100">
        <DesktopNav />
      </span>

      <span className="block lg:hidden p-2 relative bg-blue-100 shadow-md">
        <section onClick={() => setIsOpen(!isOpen)} className="cursor-pointer ">
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
              className="absolute top-12 left-0 w-full shadow-lg z-40"
            >
              <span className="block md:hidden">
                <MobileNav />
              </span>

              <span className="hidden md:block lg:hidden">
                <TabletNav />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </span>
    </>
  );
};
