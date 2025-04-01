import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Github = () => {
  return (
    <a
      href="https://github.com/saraywebster"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub de Sara Ferreira - saraywebster"
      className="group flex flex-col items-center text-gray-700 hover:text-indigo-500 transition-all duration-300 ease-in-out"
    >
      <FaGithub
        size={32}
        className="group-hover:scale-110 transition-transform duration-300"
      />
      <span className="text-xs mt-2 font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        GitHub
      </span>
    </a>
  );
};

export const Linkedin = () => {
  return (
    <a
      href="https://www.linkedin.com/in/ferreirasa/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Linkedin de Sara Ferreira"
      className="group flex flex-col items-center text-gray-700 hover:text-indigo-500 transition-all duration-300 ease-in-out"
    >
      <FaLinkedin
        size={32}
        className="group-hover:scale-110 transition-transform duration-300"
      />
      <span className="text-xs mt-2 font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        LinkedIn
      </span>
    </a>
  );
};

export const CardLinkedIn = () => {
  return (
    <section className="flex flex-col items-center space-y-5 bg-indigo-100 max-w-3xl mx-auto p-5 rounded-b-3xl backdrop-blur-2xl opacity-95">
      <div className="flex flex-col items-center space-y-5">
        <Linkedin />
      </div>
    </section>
  );
};
