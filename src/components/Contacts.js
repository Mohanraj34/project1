import React from "react";

export default function Contacts() {
  return (
    <section id="contact" className="section">
      <div className="contact-inner">
        <div className="contact-left">
          <h2>Contact Me</h2>
          <a href="tel:+917395871513">
            <p>Phone : +917395871513</p>
          </a>

          <a href="mailto:kmrkumarasamy1513@gmail.com">
            <p> Email : kmrkumarasamy1513@gmail.com </p>
          </a>
        </div>
        {/*
        <div className="about-right">
          <div className="big-blob" />
          <div className="small-blob" />
        </div>
        */}
      </div>
    </section>
  );
}
