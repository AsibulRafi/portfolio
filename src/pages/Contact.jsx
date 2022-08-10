import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section className="contact__form">
      <h2 className="contact__form-heading">
        Let's Make Something Great
        <br /> Ready to get Started?
      </h2>
      <ContactForm />
    </section>
  );
};

export default Contact;
