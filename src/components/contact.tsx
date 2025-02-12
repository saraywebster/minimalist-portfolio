import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className="flex flex-col items-center mt-10 bg-white/10 p-6 rounded-lg shadow-lg max-w-lg">
      <h2 className="text-2xl font-semibold text-purple-400">Contato</h2>

      <section className="mt-4 flex flex-col gap-2 text-gray-400 ">
        <a className="flex items-center gap-2 hover:text-purple-400">
          <FaEnvelope />
          E-mail
        </a>
        <a className="flex items-center gap-2 hover:text-purple-400">
          <FaLinkedin />
          Linkedin
        </a>
        <a className="flex items-center gap-2 hover:text-purple-400">
          <FaGithub />
          Github
        </a>
      </section>
    </section>
  );
};
