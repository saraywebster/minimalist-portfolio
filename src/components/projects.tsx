import { FaGithub } from "react-icons/fa";
export const Projects = () => {
  return (
    <section className="flex flex-col items-start mt-10 gap-6 bg-white/20 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-purple-400">Projetos</h2>

      <p className="mt-2">Descrição</p>
      <a className="mt-3 inline-flex items-center text-purple-400 hover:text-purple-600 font-semibold">
        <FaGithub className="mr-2" />
        Ver no Github
      </a>
    </section>
  );
};
