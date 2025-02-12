import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full max-w-4xl p-5 bg-white/10 rounded-lg flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Sara Ferreira</h1>
      <nav className="flex gap-5">
        <Link to="/" className="text-gray-300 hover:text-purple-400">
          Sobre
        </Link>
        <Link to="/" className="text-gray-300 hover:text-purple-400">
          Projetos
        </Link>
        <Link to="/" className="text-gray-300 hover:text-purple-400">
          Contato
        </Link>
      </nav>
    </header>
  );
};
