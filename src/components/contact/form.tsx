import React, { useState } from "react";
import { InputComponent } from "./input";

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

  // const validateField = (fieldName: string) => {

  // };

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

    if (!isValid) {
      return {
        message: "Erro ao enviar mensagem",
        errors: errors,
      };
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
