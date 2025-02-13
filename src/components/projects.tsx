import { FaGithub } from "react-icons/fa";
import deliveryImage from "../assets/delivery.svg";
import { openLinks } from "./links";
export const Projects = () => {
  return (
    <section
      className="flex flex-col items-start mt-10 gap-4  p-6 rounded-lg shadow-lg relative backdrop-blur-md"
      style={{
        backgroundImage: `url(${deliveryImage})`,
        backgroundSize: "40%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-2xl font-semibold text-purple-400">Projetos</h2>

      <p className="mt-2">Descrição</p>
      <button
        className="mt3 inline-flex items-center text-center  text-purple-400 hover:text-purple-600 font-semibold cursor-pointer"
        onClick={openLinks("https://github.com/saraywebster")}
      >
        <FaGithub className="mr-2 flex-inline" />
        Ver no Github
      </button>
    </section>
  );
};
