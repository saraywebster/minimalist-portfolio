import entregaAi from "../../assets/entregaai.png";
import { CardGithub } from "../link/icons";

const EntregaAi = () => {
  return (
    <article className="max-w-3xl mx-auto rounded-3xl p-5 flex flex-col justify-center space-y-2 bg-gray-50 shadow-sm">
      <h3 className="text-2xl font-light text-gray-700 text-center">
        Entrega Aí
      </h3>
      <figure className="flex flex-col items-center justify-center space-y-3">
        <figcaption className="text-gray-700  leading-relaxed p-1 text-center">
          Sistema de pedidos via WhatsApp com chatbot e IA. As entregas são
          feitas por qualquer tipo de veículo, com controle por API e integração
          completa.
        </figcaption>
        <img
          src={entregaAi}
          alt="Ilustração do projeto Entrega Aí"
          className="sm:max-w-3xl max-h-96 object-contain rounded-3xl shadow-sm"
          title="Entrega Aí"
        />
      </figure>
      <button
        disabled
        className="text-gray-400 font-bold text-md text-center bg-gray-50 p-2 mt-2 border-2 border-gray-200 rounded-3xl opacity-60 cursor-not-allowed"
        title="Indisponível"
      >
        Acessar: Versão 1.0
      </button>
    </article>
  );
};

export const Projects = () => {
  return (
    <section
      className="w-full max-w-3xl mx-auto bg-white rounded-2xl space-y-5"
      id="projects"
    >
      <div className="p-5 space-y-5">
        <h2 className="text-3xl font-light text-indigo-500 border-b-2 border-indigo-100 pb-2">
          Projetos
        </h2>
        <EntregaAi />
      </div>

      <CardGithub />
    </section>
  );
};

//atenção: corrigir o h2 e padding
