import React, { useState } from "react";
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

  const [errors, setErrors] = useState({
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
    let newErrors = {
      name: "",
      email: "",
      message: "",
    };

    let isValid = true;

    if (formData.name.trim() === "") {
      newErrors.name = "* O nome é obrigatório";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "* O email é obrigatório";
      isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "* O email é inválido";
      isValid = false;
    }

    if (formData.message.trim() === "") {
      newErrors.message = "* A mensagem é obrigatória";
      isValid = false;
    }

    setErrors(newErrors);
    return { isValid, newErrors };
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { isValid } = validateForm();

    if (isValid === false) {
      return;
    }

    setIsSubmitted(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setShowMessage(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setFadeOut(true);
      }, 2500);

      setTimeout(() => {
        setShowMessage(false);
      }, 2500);
    } catch (error) {
      return ` Erro o enviar mensagem ${error}`;
    } finally {
      setIsSubmitted(false);
    }
  };

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
          className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 ${
            errors.name
              ? "border-red-500 focus:outline-red-500 bg-red-50"
              : "border-gray-300 focus:outline-indigo-500"
          }`}
        />
        <span className="text-red-500 text-sm mb-2 w-full text-left">
          {errors.name}
        </span>

        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 ${
            errors.name
              ? "border-red-500 focus:outline-red-500 bg-red-50"
              : "border-gray-300 focus:outline-indigo-500"
          }`}
        />

        <span className="text-red-500 text-sm mb-2 w-full text-left">
          {errors.email}
        </span>

        <textarea
          name="message"
          rows={4}
          placeholder="Digite sua mensagem..."
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitted}
          className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 ${
            errors.name
              ? "border-red-500 focus:outline-red-500 bg-red-50"
              : "border-gray-300 focus:outline-indigo-500"
          }`}
        />

        <span className="text-red-500 text-sm mb-4 w-full text-left">
          {errors.message}
        </span>

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
