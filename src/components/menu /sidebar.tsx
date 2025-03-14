import { DesktopNav, MobileNav } from "./nav";
export const Sidebar = ({}) => {
  return (
    <>
      <span className="hidden lg:block">
        <DesktopNav />
      </span>
      <span className="lg:hidden">
        <MobileNav />
      </span>
    </>
  );
};
