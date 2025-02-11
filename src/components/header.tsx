import { Link } from "react-router";

export const Header = () => {
  return (
    <div
      className="
    fixed top-0 left-0 w-full bg-white
    opacity-30 backdrop-blur-lg p-4 shadow-md flex justify-between intems-center z-50"
    >
      <h1 className="text-xl font-semi-bold text-white-900 tracking-wide">
        Sara Ferreira
      </h1>
      <nav className="flex justify-between items-center">
        <ul className="flex space-x-4 text-white-900 font-medium text-sm">
          <li className="hover:underline">
            <Link to={"/about"}>Sobre mim</Link>
          </li>
          <li className="hover:underline">
            <Link to={""}>Projetos</Link>
          </li>{" "}
          <li className="hover:underline">
            <Link to={"/about"}>Contato</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
