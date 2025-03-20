import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

export const Form = () => {
  {
    /* STATES */
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [erros, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErros = {
      name: "",
      email: "",
      message: "",
    };

    let isValid = true;

    if (formData.name.trim() === "") {
      newErros.name = "O nome é obrigatório";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErros.email = "O email é obrigatório";
      isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErros.email = "O email é inválido";
      isValid = false;
    }

    if (formData.message.trim() === "") {
      newErros.message = "A mensagem é obrigatória";
      isValid = false;
    }

    setErrors(newErros);
    return { isValid, newErros };
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { isValid } = validateForm();

    if (isValid === false) {
      return;
    }

    setIsSubmitted(true);
    setShowMessage(true);
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    if (isSubmitted) {
      setFadeOut(false);

      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 2500);

      const removeTimer = setTimeout(() => {
        setIsSubmitted(false);
        setShowMessage(false);
      }, 3000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [isSubmitted]);

  {
    /*JSX*/
  }
  return (
    <section className="w-full max-w-3xl mx-auto p-8 bg-white rounded-2xl space-y-5">
      <h1 className="text-3xl font-light text-indigo-500 border-b-2 border-indigo-100 pb-1">
        Contato
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        />

        {erros.name && (
          <span className="text-red-500 text-sm bg-red-50 p-1">
            {erros.name}
          </span>
        )}

        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        />
        {erros.email && (
          <span className="text-red-500 text-sm bg-red-50">{erros.email}</span>
        )}

        <textarea
          name="message"
          rows={4}
          placeholder="Digite sua mensagem..."
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitted}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        />
        {erros.message && (
          <span className="text-red-500 text-sm bg-red-50">
            {erros.message}
          </span>
        )}

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
            className={`m-5 p-2 bg-green-50 text-green-600 opacity-100 transition-opacity duration-1000 ease-in-out ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            Mensagem enviada com sucesso!
          </p>
        )}
      </form>
    </section>
  );
};
