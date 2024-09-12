import { useEffect, useState } from "react";
import { render } from "@react-email/render";
import SampleEmail from "@/emails/SampleEmail";

export const useForm = () => {
  const [formData, setFormData] = useState<FormLead>({
    nombre: "",
    apellido: "",
    telefono: "",
    mensaje: "¡Hola Lote&Deal! Quisiera más información sobre su proyecto 🏡",
  });

  const [sendEmail, setSendEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    if (sendEmail) {
      setTimeout(() => {
        setSendEmail(false);
        setLoading(false);
      }, 3000);
    }
  }, [sendEmail]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = (formData: FormLead) => {
    const { nombre, apellido, telefono } = formData;
    const regexName = /^[a-zA-Z\s]*$/;
    const regexPhone = /^[0-9]*$/;

    if (!nombre || !apellido || !telefono) {
      alert("Por favor, llena todos los campos.");
      return false;
    }

    if (!regexName.test(nombre)) {
      alert("Nombre inválido.");
      return false;
    }

    if (!regexName.test(apellido)) {
      alert("Apellido inválido.");
      return false;
    }

    if (!regexPhone.test(telefono)) {
      alert("Teléfono inválido.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!validateForm(formData)) {
      setLoading(false);
      return;
    }

    const finalHtml = await render(
      <SampleEmail
        name={formData.nombre}
        lastname={formData.apellido}
        phone={formData.telefono}
        message={formData.mensaje}
      />,
      { pretty: true },
    );

    const finalText = await render(
      <SampleEmail
        name={formData.nombre}
        lastname={formData.apellido}
        phone={formData.telefono}
        message={formData.mensaje}
      />,
      { plainText: true },
    );

    try {
      const res = await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "soporte@invertifast.pe",
          to: "ideallote@gmail.com",
          subject: `Nuevo lead: ${formData.nombre} ${formData.apellido}`,
          html: finalHtml,
          text: finalText,
        }),
      });

      const responseData = await res.json();
      if (responseData) {
        setFormData({
          nombre: "",
          apellido: "",
          telefono: "",
          mensaje:
            "¡Hola Lote&Deal! Quisiera más información sobre su proyecto 🏡",
        });
      }
    } catch (error) {
      console.error(error);
    }
    setSendEmail(true);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    sendEmail,
    width,
    height,
  };
};
