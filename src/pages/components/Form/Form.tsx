import Input from "@/components/form/Input";
import { useForm } from "@/hooks/useFormLead";
import Confetti from "react-confetti";
import "@styles/form/emailcss.css";
import useThemeStore from "@/context/theme-store";
import { useEffect } from "react";

const Form = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    loading,
    sendEmail,
    width,
    height,
  } = useForm();
  const { theme, applyChanges } = useThemeStore();
  useEffect(() => {
    applyChanges();
  }, [theme]);

  return (
    <section className="section_height relative flex items-center justify-center bg-primary">
      <div className="container">
        <div className="p-5" data-aos="zoom-out" data-aos-delay="300">
          <form className="subscribe" onSubmit={handleSubmit}>
            <h1 className="title">
              DESEO MÁS <br /> INFORMACIÓN
            </h1>
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

            <button type="submit" disabled={loading} className="submit-btn">
              <span>{loading ? "Enviando..." : "Enviar"}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 17 5-5-5-5"></path>
                <path d="m13 17 5-5-5-5"></path>
              </svg>
            </button>
          </form>
        </div>

        {sendEmail && <Confetti width={width} height={height} />}
      </div>
    </section>
  );
};

export default Form;
