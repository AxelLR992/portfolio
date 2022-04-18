import React from "react";
import "../assets/styles/contact.scss";

const ContactSection = () => {
  return (
    <section className="contact">
      <h2>
        <span>Contact</span> me
      </h2>
      <h5 className="subtitle">Lorem ipsum dolor sit amet</h5>
      <div className="contact__content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            possimus repellat labore in nostrum quisquam tempora itaque quibusdam,
            ex, inventore, alias adipisci aliquam? Nam, dolores!
          </p>
          <form className="contact__content__form">
            <div>
                <label>Full name</label>
                <input type="text" />
            </div>
            <div>
                <label>Email</label>
                <input type="email" />
            </div>
            <div>
                <label>Subject</label>
                <input type="text" />
            </div>
            <div>
                <label>Message</label>
                <textarea></textarea>
            </div>
          </form>
      </div>
    </section>
  );
};

export default ContactSection;
