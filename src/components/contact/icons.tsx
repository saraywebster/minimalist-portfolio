import { FaGithub, FaLinkedin } from "react-icons/fa";

export const IconsContact = () => {
  return (
    <div className="flex gap-6 justify-center">
      <a
        href="https://github.com/saraywebster"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub de Saray Webster"
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

      <a
        href="https://linkedin.com/in/ferreirasa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn de Saray Webster"
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
    </div>
  );
};
