import axios, { AxiosError } from "axios";
import React, { FormEvent, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useTranslation } from "react-i18next";
import "../assets/styles/contact.scss";
import Alert from "./Alert";

const defaultFormData = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [error, setError] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    const { fullName, email, subject, message } = formData;
    if (!fullName || !email || !subject || !message) return setError(true);
    if (!executeRecaptcha) return console.log("XD");
    try {
      const recaptchaResult = await executeRecaptcha("contactform");
      await axios.post(`${process.env.SITE_URL}/send-form.php`, {
        ...formData,
        token: recaptchaResult,
      });
      setSuccessMessage(
        "Thank you for contacting me. I will answer you as soon as possible."
      );
      setFormData(defaultFormData);
    } catch (error) {
      setErrorMessage(`${error}`);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 dangerouslySetInnerHTML={{ __html: t("home.contact_me") }}></h2>
      <h5 className="subtitle">{t("home.contact_me_subtitle")}</h5>
      <div className="contact__content">
        <p>{t("home.contact_me_message")}</p>
        <form onSubmit={handleSubmit} className="contact__content__form">
          <div>
            <label>{t("forms.full_name")}</label>
            <input
              value={formData.fullName}
              required
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              type="text"
              className={
                error && !formData.fullName
                  ? `contact__content__form__errored-input`
                  : ""
              }
            />
          </div>
          <div>
            <label>{t("forms.email")}</label>
            <input
              value={formData.email}
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              className={
                error && !formData.email
                  ? `contact__content__form__errored-input`
                  : ""
              }
            />
          </div>
          <div>
            <label>{t("forms.subject")}</label>
            <input
              value={formData.subject}
              required
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              type="text"
              className={
                error && !formData.subject
                  ? `contact__content__form__errored-input`
                  : ""
              }
            />
          </div>
          <div>
            <label>{t("forms.message")}</label>
            <textarea
              value={formData.message}
              required
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={
                error && !formData.message
                  ? `contact__content__form__errored-input`
                  : ""
              }
            ></textarea>
          </div>

          <button type="submit" disabled={sending}>
            {sending ? "Enviando..." : "Enviar"}
          </button>
          <Alert
            className="contact__content__alert"
            severity="error"
            message={errorMessage}
            visible={!!errorMessage}
            onClose={() => setErrorMessage("")}
          />
          <Alert
            className="contact__content__alert"
            severity="success"
            message={successMessage}
            visible={!!successMessage}
            onClose={() => setSuccessMessage("")}
          />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
