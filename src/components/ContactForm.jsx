import React from "react";

const ContactForm = () => {
  return (
    <section className="form">
      <form>
        <div className="form__flex">
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              id="name"
              className="text-input"
              autoComplete="off"
              required
            />
            <label className="label" for="name">
              Name
            </label>
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter your Email"
              name="email"
              id="email"
              className="text-input"
              required
            />
            <label className="label" for="email">
              Email
            </label>
          </div>
        </div>
        <textarea placeholder="Additional Details" />
        <button className="form__btn">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
