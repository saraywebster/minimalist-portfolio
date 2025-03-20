import { useState } from "react";

const InputField = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}: any) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-gray-700 text-left mb-1">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export const InputContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "O nome é obrigatório.";
        break;
      case "email":
        if (!value.trim()) error = "O e-mail é obrigatório.";
        else if (!/\S+@\S+\.\S+/.test(value))
          error = "Digite um e-mail válido.";
        break;
      case "message":
        if (value.trim().length < 5)
          error = "A mensagem deve ter pelo menos 5 caracteres.";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação de todos os campos ao enviar
    Object.keys(formData).forEach((field) =>
      validateField(field, formData[field])
    );

    if (Object.values(errors).some((err) => err)) {
      console.log("Erro no formulário", errors);
      return;
    }

    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center w-full gap-4"
    >
      <InputField
        label="Nome"
        type="text"
        name="name"
        placeholder="Digite seu nome"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name}
      />
      <InputField
        label="E-mail"
        type="email"
        name="email"
        placeholder="Digite seu e-mail"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
      />
      <div className="flex flex-col w-full">
        <label className="text-gray-700 text-left mb-1">Mensagem</label>
        <textarea
          name="message"
          placeholder="Digite sua mensagem..."
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={4}
          className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="mt-4 w-full p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
      >
        Enviar
      </button>
    </form>
  );
};
