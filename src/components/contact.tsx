import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { openLinks } from "./links";

export const Contact = () => {
  return (
    <section className="flex flex-col items-center mt-10 bg-white/10 p-6 rounded-lg shadow-lg max-w-lg">
      <h2 className="text-2xl font-semibold text-purple-400">Contato</h2>

      <section className="mt-4 flex flex-col gap-2 text-gray-400 ">
        <button
          className="flex items-center gap-2 hover:text-purple-400 cursor-progress"
          onClick={openLinks("mailto:saraywebster@gmail.com", "_parent")}
        >
          <FaEnvelope />
          E-mail
        </button>
        <button
          className="flex items-center gap-2 hover:text-purple-400 cursor-pointer"
          onClick={openLinks("https://br.linkedin.com/")}
        >
          <FaLinkedin />
          Linkedin
        </button>
        <button
          className="flex items-center gap-2 hover:text-purple-400 cursor-pointer"
          onClick={openLinks("https://github.com/saraywebster")}
        >
          <FaGithub />
          Github
        </button>
      </section>
    </section>
  );
};
