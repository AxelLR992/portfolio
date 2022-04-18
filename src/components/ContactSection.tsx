import React from "react";
import { useTranslation } from "react-i18next";
import "../assets/styles/contact.scss";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="contact">
      <h2 dangerouslySetInnerHTML={{ __html: t("home.contact_me") }}></h2>
      <h5 className="subtitle">{t("home.contact_me_subtitle")}</h5>
      <div className="contact__content">
        <p>{t("home.contact_me_message")}</p>
        <form className="contact__content__form">
          <div>
            <label>{t("forms.full_name")}</label>
            <input type="text" />
          </div>
          <div>
            <label>{t("forms.email")}</label>
            <input type="email" />
          </div>
          <div>
            <label>{t("forms.subject")}</label>
            <input type="text" />
          </div>
          <div>
            <label>{t("forms.message")}</label>
            <textarea></textarea>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
