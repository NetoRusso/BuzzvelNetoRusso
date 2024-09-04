import React, { useState, useRef, useEffect } from "react";
import Style from "./forms.module.css";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';


const Forms = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const messageOk = useRef();

  const formatPhone = (value) => {
    if (!value) return "";

    value = value.replace(/\D/g, "");
    return value;
  };


  const sendEmail = (e) => {
    e.preventDefault();


    const templateParams = {
      from_name: name,
      phone: phone,
      email: email,
      message: message
    }

    emailjs.send(
      "service_ieh8z3o",
      "template_t4wa55t",
      templateParams,
      "T7nQC9CTpaL0OgPfV"
    ).then((response) => {
      if (response.status === 200) {
        messageOk.current.innerText = t("Form.message_ok");
        setTimeout(() => {
          messageOk.current.innerText = "";
        }, 10000)
        form.current.reset();
      }
    }, (err) => {
      messageOk.current.innerText = t("Form.message_error") + err.text;
      setTimeout(() => {
        messageOk.current.innerText = "";
      }, 10000)
    })

  };



  return (
    <div className={Style.formContainer}>
    <form action="submit" className={Style.form} onSubmit={sendEmail} ref={form}>
      <p className={Style.formMessage} ref={messageOk}></p>
      <label htmlFor="name" className={Style.formLabel}>{t("Form.name")}</label>
      <input
        type="text"
        id="name"
        className={Style.formInput}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("Form.name_placeholder")}
        required
      />

      <label htmlFor="phone" className={Style.formLabel}>{t("Form.phone")}</label>
      <input
        type="text"
        onChange={(e) => setPhone(formatPhone(e.target.value))}
        id="phone"
        className={Style.formInput}
        placeholder={t("Form.phone_placeholder")}
      />

      <label htmlFor="email" className={Style.formLabel}>{t("Form.email")}</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        className={Style.formInput}
        placeholder={t("Form.email_placeholder")}
        required
      />

      <label htmlFor="message" className={Style.formLabel}>{t("Form.message")}</label>
      <textarea
        id="message"
        onChange={(e) => setMessage(e.target.value)}
        className={Style.formTextarea}
        placeholder={t("Form.message_placeholder")}
        required
      />

      <button type="submit" className={Style.formButton}>{t("Form.submit")}</button>
    </form>
    </div>
  )
};

export default Forms;
