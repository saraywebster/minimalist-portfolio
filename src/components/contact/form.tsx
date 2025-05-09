import React, { useState } from "react";
import { InputComponent } from "./input";

export const Form = () => {
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
    } else {
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "* O email é inválido";
        isValid = false;
      }
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
    if (!isValid) return;

    try {
      setIsSubmitted(true);

      //   const response = await fetch("http://localhost:3000/gmail/email", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   });
      //   if (!response.ok) {
      //     throw new Error("Erro ao enviar mensagem");
      //   }
      //   const data = await response.json();
      //   console.log("Mensagem enviada com sucesso", data);
      setTimeout(() => {
        setShowMessage(true);
        setFadeOut(false);

        setTimeout(() => {
          setFadeOut(true);
          setIsSubmitted(false);
          setShowMessage(false);
        }, 2500);
      }, 1000);
    } catch (error) {}
  };
  return (
    <InputComponent
      isSubmitted={isSubmitted}
      showMessage={showMessage}
      fadeOut={fadeOut}
      formData={formData}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
