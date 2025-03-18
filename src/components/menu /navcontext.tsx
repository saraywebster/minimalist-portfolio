import { createContext, useContext, useState } from "react";

interface NavContextProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const NavContext = createContext<NavContextProps>({
  isOpen: false,
  setIsOpen: () => console.warn("no NavProvider"),
});

export const useNav = (): NavContextProps => {
  return useContext(NavContext) as NavContextProps;
};

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  );
};
