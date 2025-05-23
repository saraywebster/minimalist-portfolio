type InputComponentProps = {
  formData: {
    name: string;
    email: string;
    message: string;
  };

  errors: {
    name: string;
    email: string;
    message: string;
  };

  isSubmitted: boolean;
  showMessage: boolean;
  fadeOut: boolean;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

import { FaSpinner } from "react-icons/fa";
export const InputComponent = ({
  formData,
  errors,
  isSubmitted,
  showMessage,
  fadeOut,
  handleChange,
  handleSubmit,
}: InputComponentProps) => {
  return (
    <>
      <section className="w-full max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-md">
        <h1 className="text-3xl font-light text-indigo-500 border-b-2 border-indigo-100 pb-1 mb-5">
          Contato
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center space-y-5"
        >
          <div className="w-full mb-2 space-y-2 ">
            <label className="text-gray-700 text-lg">Nome</label>
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleChange}
              className={`w-full text-gray-700 bg-indigo-50 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.name
                  ? "border-red-500 focus:outline-red-500 bg-red-50"
                  : "border-gray-300 focus:outline-indigo-500"
              }`}
            />
            <span className="text-red-500 p-1 text-sm w-full text-left">
              {errors.name}
            </span>
          </div>
          <div className="w-full mb-2 space-y-2">
            <label className="text-gray-700 text-lg">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border text-gray-700 bg-indigo-50 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.email
                  ? "border-red-500 focus:outline-red-500 bg-red-50"
                  : "border-gray-300 focus:outline-indigo-500"
              }`}
            />

            <span className="text-red-500 text-sm mb-2 w-full text-left">
              {errors.email}
            </span>
          </div>
          <div className="w-full mb-2">
            <label className="text-gray-700 text-lg">Mensagem</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Digite sua mensagem..."
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitted}
              className={`w-full p-2 border bg-indigo-50 border-gray-300 rounded-md focus:outline-none focus:ring-2 text-gray-700 focus:ring-indigo-500 ${
                errors.message
                  ? "border-red-500 focus:outline-red-500 bg-red-50"
                  : "border-gray-300 focus:outline-indigo-500"
              }`}
            />

            <span className="text-red-500 text-sm w-full text-left ">
              {errors.message}
            </span>
          </div>
          <button
            type="submit"
            className={`w-full p-3 text-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              isSubmitted
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-700"
            }`}
          >
            {isSubmitted ? (
              <span className="flex items-center justify-center">
                <FaSpinner className="animate-spin h-5 w-5" />
              </span>
            ) : (
              "Enviar"
            )}
          </button>

          {showMessage && (
            <p
              className={`m-2 p-2 bg-green-50 text-green-600 opacity-100 transition-opacity duration-1000 ease-in-out ${
                fadeOut ? "opacity-0" : "opacity-100"
              }`}
            >
              Mensagem enviada com sucesso!
            </p>
          )}
        </form>
      </section>
    </>
  );
};
