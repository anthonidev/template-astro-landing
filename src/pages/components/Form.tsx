import Input from "@/components/form/Input";
import SampleEmail from "@/emails/SampleEmail";
import { render } from "@react-email/render";
import "@styles/emailcss.css";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

type FormData = {
  nombre: string;
  apellido: string;
  telefono: string;
  mensaje: string;
};

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    telefono: "",
    mensaje: "¡Hola Lote&Deal! Quisiera más información sobre su proyecto 🏡",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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

  const validateForm = (formData: FormData) => {
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
    setLoading(true);
    e.preventDefault();
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

  return (
    <div
      className="section_height relative flex items-center justify-center bg-white"
      // style={{
      //   backgroundImage: "url('/img/form-banner.webp')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="mx-auto w-full max-w-xl">
        <div className="p-5" data-aos="zoom-out" data-aos-delay="300">
          <form
            className="subscribe bg-white bg-opacity-60"
            onSubmit={handleSubmit}
          >
            <p className="title text-center">
              DESEO MÁS <br /> INFORMACIÓN
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <Input
                label="Nombres *"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Escribe tu nombre"
                type="text"
                regex={/^[a-zA-Z\s]*$/}
                error="Solo se permiten letras"
              />
              <Input
                label="Apellidos *"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Escribe tu apellido"
                type="text"
                regex={/^[a-zA-Z\s]*$/}
                error="Solo se permiten letras"
              />
              {/* 
              <Input
                label="Email *"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Escribe tu email"
                type="email"
                regex={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                error="Email inválido"
              /> */}
              <Input
                label="Teléfono *"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Escribe tu número de teléfono"
                type="tel"
                regex={/^[0-9]*$/}
                error="Solo se permiten números"
              />

              <div className="form_group col-span-1 lg:col-span-2">
                <label className="sub_title">Mensaje</label>
                <textarea
                  name="mensaje"
                  placeholder="Escribe tu mensaje"
                  className="form_style w-full"
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <br />
            <button
              type="submit"
              disabled={loading}
              className="submit-btn bounce flex w-full items-center justify-center"
            >
              <span>{loading ? "Enviando..." : "Enviar"}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 17 5-5-5-5"></path>
                <path d="m13 17 5-5-5-5"></path>
              </svg>
            </button>
          </form>
        </div>

        {sendEmail && <Confetti width={width} height={height} />}
      </div>
    </div>
  );
};

export default Form;
